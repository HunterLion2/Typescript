interface Point { 
    x: number,
    y: number
}

interface Vehicle {
    // currentLocation: Point;
    travelTo(point: Point): void; 
}

class Taxi implements Vehicle { 

    constructor(private _location?: Point, private _color?: string) { 
    }

    travelTo(point: Point): void{
        console.log(`taksi X: ${this._location.x} Y: ${point.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`) 
    }


    get location() {
        return this._location;
    }

    set location(value: Point) {
        if(value.x < 0 || value.y < 0 ) {
            throw new Error('Koordinat bilgileri negatif olamaz.'); // throw anahtar kelimesi bir hata fırlatmak için kullanılır.
        }
        this._location = value;
    }

}
 
let taxi_1: Taxi = new Taxi({ x: 2, y:5 });
taxi_1.travelTo({ x: 1, y: 2});

let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5};


// AÇIKLAMA
///////////////////////////////

// Getter Metodu: get location() metodu, _location özelliğini döndürür. Bu metot, taxi_1.location ifadesi kullanıldığında çağrılır.
// Setter Metodu: set location(value: Point) metodu, _location özelliğini ayarlar ve yeni değerin geçerli olup olmadığını kontrol eder. Bu metot, taxi_1.location = { x: 3, y: 4 } ifadesi kullanıldığında çağrılır.
// Kapsülleme ve Kontrol: Getter ve setter metotları, sınıfın iç durumunu kapsüller ve dışarıdan gelen değerlerin doğruluğunu kontrol eder.


