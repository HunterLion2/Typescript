interface Point { 
    x: number,
    y: number
}


interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void; 
}

// implements demek bir class'ın belirli bir interface'ı uyguladığını belirtir.

//BURADA İNTERFACE DEĞİLDE CLASS'I KULLANMAMIZIN SEBEBİ CLASS DAN BİR OBJE ÜRETEBİLİRİZ.

class Taxi implements Vehicle { // class özelliği nesnelerin ve özelliklerini ve davranışlarını tanımlar
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

