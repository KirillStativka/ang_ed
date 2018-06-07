import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
    carName = 'No name car';
    carYear = 2017;

    cars: [{ name: string, year: number }] = [{
        name: 'Ford',
        year: 2015
    }, {
        name: 'Mazda',
        year: 2010
    }, {
        name: 'Audi',
        year: 2017
    }];


    constructor() {

    }

    addCar() {

        if (this.carName === '') {
            this.carName = 'Empty field';
            this.carYear = 0;
        }
        this.cars.push({
            name: this.carName,
            year: this.carYear
        });
        this.carName = '';
        this.carYear = 2017;
    }
}
