interface Point { 
    x: number,
    y: number
}

interface Vehicle {
    // currentLocation: Point;
    travelTo(point: Point): void; 
}

// AŞŞAĞIDA PRİVATE ÖZELLİĞİNİ VERDİĞİMİZ İÇİN COLOR VE currentLocation'I YAZMAMIZA GEREK KALMAZ
class Taxi implements Vehicle { 
    // private color : string; // private yazarak class dışarısında taxi_1 yazarak taxi_1.color diyemeyiz çünkü onu private yaptık busayede onu dışarıdan ayriyetten bir değer ile değiştiremez kıldık.
    // private currentLocation: Point;

             // public  dersek eğer burada o zaman class'ın dışından yine istediğimiz gibi ulaşabilir oluruz.    
    constructor(private location?: Point, private color?: string) { 
       // this.currentLocation = location || { x: 0, y: 0 };
       // this.color = color || 'unknown';
    }

    travelTo(point: Point): void{
        console.log(`taksi X: ${this.location.x} Y: ${point.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}
 
let taxi_1: Taxi = new Taxi({ x: 2, y:5 });
taxi_1.travelTo({ x: 1, y: 2});

// AÇIKLAMA
///////////////////////////////////

// Neden private ve public Özellikler Kullanılır?
// Kapsülleme: private üyeler, sınıfın iç durumunu korur ve dış müdahalelere karşı güvenlik sağlar. Bu, sınıfın iç yapısını gizleyerek daha güvenli ve yönetilebilir kod yazılmasını sağlar.
// Erişilebilirlik Kontrolü: public üyeler, sınıfın dışından erişilebilir ve değiştirilebilir. Bu, sınıfın belirli özelliklerinin ve metotlarının dışarıdan kullanılmasına izin verir.
// Güvenlik ve Tutarlılık: private üyeler, sınıfın iç durumunu korur ve dışarıdan gelen hatalı veya istenmeyen değişiklikleri engeller. Bu, sınıfın iç durumunun tutarlı kalmasını sağlar.
