import {Component} from '@angular/core';
import {getBodyNode} from '@angular/animations/browser/src/render/shared';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent {
    // items = [
    //     {id: '2', itemName: 'Ford'},
    //     {id: '22', itemName: 'Mersedes'},
    //     {id: '12', itemName: 'Audi'},
    //     {id: '32', itemName: 'Bmw'},
    //     {id: '322', itemName: 'Zapar'}
    // ];
    items = ['Ford', 'Mersedes', 'Audi', 'Bmw', 'Zapar'];

    setBigText(item: string) {
        console.log(item.length > 4 ? true : false);
        return item.length > 4 ? true : false;
    }
    result: any = '';
    number: any = 0;
    value1: string;
    value2: string;
    constructor() {
        let itemsT = ['Ford', 'Mersedes', 'Audi', 'Bmw', 'Zapar', 'sliva'];
        let test = document.getElementById('test_div');
        let lenghtItems = itemsT.length;
        for (let i = 0; i < lenghtItems; i++) {
            test.innerHTML = '<p>' + itemsT[i] + '</p>' + '<br>';
            document.write('asdsd');
        }
        let animal = {
            eats: true,
            run: true
        };
        let human = {
            speek: true
        };
        console.log('rabit can run ? = ' + human.speek);


        var testTar = document.getElementById('test_div');
        console.log('asdasd');
        console.log(testTar.id);
        testTar.id = 'newId';
        console.log(testTar.id);
        // square Digits number

        // function squareDigits(num) {
        //     const strNum: any = String(num);
        //     let newNum: any = '';
        //     let newVariable : any = document.getElementById('result');
        //     for (let i = 0; i <= strNum.length - 1; i++) {
        //         newNum += strNum[i] * strNum[i];
        //     }
        //   let some: any =  Number(newNum);
        //     newVariable.some.innerText ;
        // }
        // squareDigits(9119);
    }

    search(){
        console.log(`value1: ${this.value1} \n value2: ${this.value2}`);
    }
}
