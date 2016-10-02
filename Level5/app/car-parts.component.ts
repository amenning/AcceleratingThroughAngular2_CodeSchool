import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service'

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls:['app/car-parts.component.css']
})

export class CarPartsComponent { 
    carParts: CarPart[];

    constructor(private racingDataService: RacingDataService) { }

    ngOnInit() {
        this.racingDataService.getCarParts()
            .subscribe(carParts => this.carParts = carParts);
    }

    //Old way to code dynamic sum
    totalCarParts(){
        let sum = 0;
        if(Array.isArray(this.carParts)) {
            for (let carPart of this.carParts){
                sum += carPart.inStock;
            }
        }
        return sum;
    }

    /*
    // New way to code dynamic sum
    totalCarParts(){
        return this.carParts.reduce(
            (prev, current) => prev + current.inStock, 
            0
        );
    }
    */

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
