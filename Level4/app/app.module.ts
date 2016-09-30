import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { CarPartsComponent }   from './car-parts.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ 
        AppComponent,
        CarPartsComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
