interface Point { 
    x: number,
    y: number
}


interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void; 
}

class Taxi implements Vehicle { 
    // ..
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}

class Bus implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}

// Burada class yapısı sayesinde bir Obje Şablonu oluşturduk bu objeyi çalıştırmak içinde "new" diyip kullanıcağımız objenin adını yazarız örnek: "new Taxi();" gibi

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({ x: 1, y: 2});
taxi_1.currentLocation = { x: 2, y:5 };

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6});
taxi_2.currentLocation = { x: 2, y: 5 };

let bus_1 = new Bus();
bus_1.currentLocation = { x: 4, y: 3};

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
