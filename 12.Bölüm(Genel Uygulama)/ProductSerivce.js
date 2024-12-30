"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducs().forEach(function (p) { return _this.products.push(p); });
        // p parametresi, forEach döngüsündeki her bir ürün (Product nesnesi) için geçerli olan değişkendir.
        // this.products.push(p) ifadesi, p ürününü ProductService sınıfının products dizisine ekler.
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id == id; })[0]; // filter metodu, bir dizi üzerinde döngü yapar ve her bir öğeyi verilen koşula göre test eder. Koşulu sağlayan öğelerden oluşan yeni bir dizi döner.
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            (let);
            i = 0;
            i < this.products.length;
            i++;
            {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); // buranın türkçesi verilen indexten itibaren 1 ürünü sileriz yerine aldığımız product'ı ekleriz.
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
