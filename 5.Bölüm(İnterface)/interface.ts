interface Point { // Aslında interface bir nesnenin yapısını belirtmek için kullanılır diyebiliriz.
    x: number,
    y: number
}

interface Passenger {
    name: string;
    phone: string;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void; // Buradaki void geriye bir parametre göndermiyor demektir.
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

// İnterface yapısının Javascript de bir karşılığı yoktur.Bunu buradaki js dosyasından da görebiliriz.

// Aşşağıda teker teker yaptıklarımızı yapmak yerine yukarıdaki şekildeki gibi yaptık.

// let travelTo = (point: Point) => { // Burada point nesnesinin içerisindeki değerlerin hangi değerleri alması gerektiğini belirttim.
//     // ..
// }

// let getDistance = (pointA: Point, pointB: Point ) => {
//     // ..
// }

// travelTo({ // Bu şekilde function'ın içerisine bir değer atıyıp buna istediğim değeri atıyabilirim.
//     x: 1, 
//     y: 2
// })
