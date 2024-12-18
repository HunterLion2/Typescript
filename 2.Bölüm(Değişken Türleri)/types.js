// let number = 5;
// number = "a";
// burada yukarıda yazdığım değerde hata çıkar çünkü başta nuber değerine bir değer atadım yani onun nasıl bir değer olduğunu ona başta söyledim ve sonra string bir değer atadım bu yüzden hata verdi.
// let a;
// a = 5;
// a = "a";
// a = true;
// Yukarıda herhangi bir hata almayız çünkü a değişkenine herhangi bir değer atamadık ve bu yüzden herhangi bir değer atayabiliriz.
// Bir değişkenin tipini belirlemek istersek aşağıdaki gibi : işareti koyarız.
// let b: number; // Eğer bu şekilde bir değer atarsak o zaman işler değişir
// b = 5;
// b = "a"; // burada hata alırız çünkü b değişkenine başta number değerini atadık ve sonra string bir değer atamaya çalıştık.
var a = 5;
var b = "a";
var c = true;
var d = "a";
var e = [1, 2, 3]; // Bu ikiside aynı şeydir. e ve f
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["a", 5, true]; // tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;

(function (Payment) { // Burada ts dosyasındaki enum türünün js'e dönüşmüş hali vardır.
  Payment[(Payment["kredi"] = 0)] = "kredi";
  Payment[(Payment["havale"] = 1)] = "havale";
  Payment[(Payment["kapidaodeme"] = 2)] = "kapidaodeme";
  Payment[(Payment["eft"] = 3)] = "eft";
})(Payment || (Payment = {}));

var kredi = Payment.kredi; // => 0
var havale = Payment.havale; // => 1
var kapidaodeme = Payment.kapidaodeme; // => 2
var eft = Payment.eft; // => 3
