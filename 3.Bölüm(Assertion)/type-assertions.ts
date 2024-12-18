let message;

message = 'Hello World';

// <> değeri ile string olduğunu belirtiriz.
let count = (<string>message).length; // Burada message değeri herhangi net bir değere sahip olmadığı için bunun length değerini bulamaz buyüzden bize hata verdirtir bu yüzden ne değeri olduğunu belirtmemiz gerekir.
let length =  (message as string).length; // <> ile as değeri aynı şeydir.


