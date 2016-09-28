import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Ultra Racing</h1>'
})

class AppComponent { }

platformBrowserDynamic().bootstrapModule(AppModule);