import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    description = 'This is my app!';
    cars = ['Ford', 'Audi', 'BMV','Chevrolet'];

    getTest() {
        return 'clear';
    }

    getVal() {
        return '20000';
    }

    x: number = 2;
    y: number = 12;
    myAdd = function (x, y) {
        return this.x + this.y;
    };
}
