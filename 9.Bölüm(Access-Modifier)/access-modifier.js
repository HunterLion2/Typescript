// AŞŞAĞIDA PRİVATE ÖZELLİĞİNİ VERDİĞİMİZ İÇİN COLOR VE currentLocation'I YAZMAMIZA GEREK KALMAZ
var Taxi = /** @class */ (function () {
    // private color : string; // private yazarak class dışarısında taxi_1 yazarak taxi_1.color diyemeyiz çünkü onu private yaptık busayede onu dışarıdan ayriyetten bir değer ile değiştiremez kıldık.
    // private currentLocation: Point;
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        // this.currentLocation = location || { x: 0, y: 0 };
        // this.color = color || 'unknown';
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this.location.x, " Y: ").concat(point.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
