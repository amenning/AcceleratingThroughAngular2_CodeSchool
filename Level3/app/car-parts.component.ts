import { Component } from '@angular/core';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls:['app/car-parts.component.css']
})

export class CarPartsComponent { 
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5,
        "price": 4.99
    },
    {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4,
        "price": 9.99
    },
    {
        "id": 3,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0,
        "price": 24.99
    }];

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
}
