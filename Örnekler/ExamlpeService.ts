import { Exampleİd } from "./example";


export class ExampleArray {
    private Example: Array<Exampleİd>;

    constructor() {

        this.Example = new Array<Exampleİd>(
            new Exampleİd(1, "Çınar", "Red", 2500),
            new Exampleİd(2, "Mehmet", "Blue", 5500),
            new Exampleİd(3, "Halil", "Brown", 3300),
            new Exampleİd(4, "Hasan", "Purple", 1000),
        )
    }

    getExampleİd(): Exampleİd[] {
        return this.Example
    }

}




