import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MyComponent} from './my/my.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';


@NgModule({
    declarations: [
        AppComponent,
        MyComponent,
        CarComponent,
        CarsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
