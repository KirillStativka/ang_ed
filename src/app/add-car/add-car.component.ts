import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
    carName: string = 'No name car';
    carYear: number = 2017;
    @Output('onAddCar') carmEmmiter = new EventEmitter<{ name: string, year: number }>();

    constructor() {
        let btnHolder = document.getElementById('btn_click');
        console.log()
        // btnHolder.addEventListener('click',function () {
        //    this.classList.toggle('test');
        // });
    }

    ngOnInit() {
    }

    addCar(carNameRef,carNamerefY) {
        this.carmEmmiter.emit({
            name: carNameRef.value,
            year: carNamerefY.value
        });
        if (carNameRef.value.length === 0 ) {
            carNameRef.value = 'Empty field';
            carNamerefY.value = 0;
        } else {
            carNameRef.value = 'Audi';
            carNamerefY.value = 2019;
        }
    }


}
