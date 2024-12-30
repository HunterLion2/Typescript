import { IProductService } from "./IProductService";
import { Product } from "./product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {

    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducs().forEach(p => this.products.push(p));
        // p parametresi, forEach döngüsündeki her bir ürün (Product nesnesi) için geçerli olan değişkendir.
        // this.products.push(p) ifadesi, p ürününü ProductService sınıfının products dizisine ekler.
    }


    getById(id: number): Product {
        return this.products.filter(p => p.id == id)[0]; // filter metodu, bir dizi üzerinde döngü yapar ve her bir öğeyi verilen koşula göre test eder. Koşulu sağlayan öğelerden oluşan yeni bir dizi döner.
    }
    getProducts(): Array<Product> { 
        return this.products;      
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        } else {
            let index; // this.products.indexOf(product); // indexOf metodu, bir dizide belirtilen öğenin ilk bulunduğu konumun indeksini döndürür.

            for(let i=0 ; i < this.products.length; i++) {
                if(this.products[i].id === product.id) {
                    index = i;
                }
            }

            this.products.splice(index,1,product); // buranın türkçesi verilen indexten itibaren 1 ürünü sileriz yerine aldığımız product'ı ekleriz.
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index > 0 ) {
            this.products.splice(index, 1)
        }
    }

    private generateId(): number {
        let key = 1;
        while(this.getById(key) != null) {
            key++;
        }
        return key;
    }


}