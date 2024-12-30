export class Product { // Export yazdım bu sayede başka dosyalarda import edip kullanabilirim.
    constructor (
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number
    ) {}
}