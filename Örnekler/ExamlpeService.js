"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleArray = void 0;
var example_1 = require("./example");
var ExampleArray = /** @class */ (function () {
    function ExampleArray() {
        this.Example = new Array(new example_1.Exampleİd(1, "Çınar", "Red", 2500), new example_1.Exampleİd(2, "Mehmet", "Blue", 5500), new example_1.Exampleİd(3, "Halil", "Brown", 3300), new example_1.Exampleİd(4, "Hasan", "Purple", 1000));
    }
    ExampleArray.prototype.getExampleİd = function () {
        return this.Example;
    };
    return ExampleArray;
}());
exports.ExampleArray = ExampleArray;
