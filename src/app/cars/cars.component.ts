import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

    carName = '';
    addCarStatus = false;
    cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
    dates = [
        new Date(2017, 2, 11).toDateString(),
        new Date(2022, 3, 17).toDateString(),
        new Date(2012, 4, 10).toDateString(),
        new Date(2015, 5, 4).toDateString(),
        new Date(2013, 9, 14).toDateString(),
    ];

    constructor() {
        for (let i = 0; i < this.dates.length; i++) {
            console.log(this.dates[i]);
            if (typeof(this.dates[i]) === 'string') {
                console.log(true);
            } else {
                console.log(typeof (this.dates[i]));
            }
        }


    }

    addCar() {
        this.addCarStatus = true;
        this.cars.push(this.carName);
        this.carName = '';
    }

    setBigCarText(car: string) {
        return car.length > 4 ? true : false;
    }
}
