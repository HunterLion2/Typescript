function getAverage(a, b, c) {
    // c değerine "?:" verdiğimiz zaman bunun anlamı c'nin birden fazla değer alabileceğini ifade eder.
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') { // typeof değeri ile c değerinin hangi türde olduğunu olduğunu anlamış oluruz "undefined,boolean,number" gibi.
        total += c;
        count++;
    }
    var result = total / count;
    return 'result :' + result;
}
getAverage(10, 20, 30);
// : void   değeri bir fonksiyonun dönüş değerinin olmadığını belirtir.
var GetAverage = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    // Buradaki ...a değerindeki ... demek aslında birden fazla değer alabileceğini söylüyor.
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return 'result :' + result;
};
GetAverage(10);
GetAverage(10, 20, 30);
GetAverage(10, 40, 50, 60, 20, 30);
