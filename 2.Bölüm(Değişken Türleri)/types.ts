// let number = 5;
// number = "a";

// burada yukarıda yazdığım değerde hata çıkar çünkü başta nuber değerine bir değer atadım yani onun nasıl bir değer olduğunu ona başta söyledim ve sonra string bir değer atadım bu yüzden hata verdi.

// let a;

// a = 5;
// a = "a";
// a = true; // Bu değerler boolean değer denir.

// Yukarıda herhangi bir hata almayız çünkü a değişkenine herhangi bir değer atamadık ve bu yüzden herhangi bir değer atayabiliriz.

// Bir değişkenin tipini belirlemek istersek aşağıdaki gibi : işareti koyarız.
// let b: number; // Eğer bu şekilde bir değer atarsak o zaman işler değişir

// b = 5;
// b = "a"; // burada hata alırız çünkü b değişkenine başta number değerini atadık ve sonra string bir değer atamaya çalıştık.

let a:number = 5;
let b:string = "a";
let c:boolean = true;
let d:any = "a";
let e:number[] = [1,2,3]; // Bu ikiside aynı şeydir. e ve f
let f:Array<number> = [1,2,3]; // Array dizi anlamına gelir.
let g:any[] = [1,"a",true];
let h:[string,number,boolean] = ["a",5,true]; // tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi = 0, havale = 1, kapidaodeme = 2, eft = 3} // Aslında burası javascriptde ki Onject yapısına çok benzer aynı burada da değerler atarız fakat buradaki fark bu değerler burada sabit olarak atanabilir ve burada çift yönlü haritalama vardır. Yani hem isimden değere hem de değerden isime erişilinebilir.

let kredi = Payment.kredi; // => 0
let havale = Payment.havale; // => 1
let kapidaodeme = Payment.kapidaodeme; // => 2
let eft = Payment.eft; // => 3
