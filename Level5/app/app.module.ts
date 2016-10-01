import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { CarPartsComponent }   from './car-parts.component';
import { RacingDataService } from './racing-data.service'

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule 
    ],
    declarations: [ 
        AppComponent,
        CarPartsComponent
    ],
    bootstrap:    [ 
        AppComponent 
    ],
    providers:    [
        RacingDataService
    ]
})

export class AppModule { }
