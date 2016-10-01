import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls:['app/car-parts.component.css']
})

export class CarPartsComponent { 
    carParts: CarPart[];

    ngOnInit() {
        this.carParts = CARPARTS;
    }

    /*
    Old way to code dynamic sum
    totalCarParts(){
        let sum = 0;
        for (let carPart of this.carParts){
            sum += carPart.inStock;
        }
        return sum;
    }
    */

    // New way to code dynamic sum
    totalCarParts(){
        return this.carParts.reduce(
            (prev, current) => prev + current.inStock, 
            0
        );
    }

    upQuantity(carPart){
        if(carPart.quantity < carPart.inStock) carPart.quantity++;
    }

    downQuantity(carPart){
        if(carPart.quantity != 0) carPart.quantity--;
    }

    showKey(event){
        alert(event.keyCode);
    }

    getCoord(event){
        console.log(event.clientX + ", " + event.clientY);
    }
}
