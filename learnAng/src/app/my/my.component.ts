import {Component} from '@angular/core';

@Component({
    selector: 'app-my',
    templateUrl: './my.component.html',
    styleUrls: ['./my.component.scss']
})
export class MyComponent {
    someName = 'Petya';
    getMyName = 'No name';
    valueFromInput = '';
    getStatus = false;

    getCurentStatus() {
        this.getStatus = true;
    }

    constructor() {
        // let table = document.body.children[0];
        // for (let i = 0; i < table.rows.length; i++) {
        //     let row = table.rows[i];
        //     row.cells[i].style.backgroundColor = 'red';
        // }
    }

    getValueFromInput(event) {
        this.valueFromInput = event.target.value;
    }

    getNewName() {
        this.getMyName = 'Kiril is realy my name! ';
    }

    clearInput() {
        this.valueFromInput = '';
    }

}
