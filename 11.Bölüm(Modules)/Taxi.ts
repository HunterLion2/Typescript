import {Vehicle} from './Bus';
import { Point } from './Point';

export class Taxi implements Vehicle { //Burada export kavramı class içeriğini farklı dosyalarda da kullanmamıza olanak sağlar fakat kullanmak içinde import etmemiz gerekir. Yukarıda olduğu gibi.

    constructor(private _location?: Point, private _color?: string) { 
    }

    travelTo(point: Point): void{
        console.log(`taksi X: ${this._location.x} Y: ${point.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`) 
    }


    get location() {
        return this._location;
    }

    set location(value: Point) {
        if(value.x < 0 || value.y < 0 ) {
            throw new Error('Koordinat bilgileri negatif olamaz.'); 
        }
        this._location = value;
    }

}