import { ProductService } from "./ProductSerivce";
import { Product } from "./product";


let _productService = new ProductService();

let result;


result = _productService.getById(2);

let p = new Product();

p.id = 2;
p.name = "İphone 6";
p.price = 4000;
p.category = "Telefon";

_productService.saveProduct(p)
// _productService.deleteProduct(result);
result = _productService.getProducts();


result = _productService.getProducts();
console.log(result);

