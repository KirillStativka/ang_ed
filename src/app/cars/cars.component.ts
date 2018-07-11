import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

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

    name: string = 'Tom';
    age: number = 24;

    constructor() {
        console.log('constructor');
    }
    ngOnInit() { console.log('onInit'); }

    updateCarList(car: { name: string, year: number }) {
        this.cars.push(car);
    }

}
