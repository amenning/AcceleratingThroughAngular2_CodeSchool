import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <h2>{{carPart.name}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.inStock}}</p>`
})

export class AppComponent { 
    title = 'Ultra Racing';

    carPart = {
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5
    };
}
