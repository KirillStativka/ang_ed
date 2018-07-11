import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MyComponent} from './my/my.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UserComponent } from './user/user.component';


@NgModule({
    declarations: [
        AppComponent,
        MyComponent,
        CarComponent,
        CarsComponent,
        AddCarComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
