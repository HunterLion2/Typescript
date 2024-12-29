function getAverage(a: number, b:number, c?:number): string { // Burada teker teker hangi değerin hangi değeri aldığını söylemiş olduk
    // c değerine "?:" verdiğimiz zaman bunun anlamı c'nin birden fazla değer alabileceğini ifade eder.

    let total = a + b;
    let count = 2;

    if(typeof c !== 'undefined') {
        total += c;
        count++;
    }

    const result = total / count;
    return 'result :' + result;
}

getAverage(10,20,30);
                                // : void   değeri bir fonksiyonun dönüş değerinin olmadığını belirtir.
const GetAverage = (...a: number[]): string => { // Aslında burada sona yazılan : string değeri function değerinin string bir değer döndürüceğini söylemiş oluruz.
    // Buradaki ...a değerindeki ... demek aslında birden fazla değer alabileceğini söylüyor.
    let total = 0;
    let count = 0;

    for(let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total / count;
    return 'result :' + result;
}

GetAverage(10);
GetAverage(10,20,30);
GetAverage(10,40,50,60,20,30);




