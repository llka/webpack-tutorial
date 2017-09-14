import $ from "jquery";
import './blocks/hiWebpack/hiWebpack.css';
import './blocks/common/common.css';
import hiWebpeck from './blocks/hiWebpack/hiWebpack';
import {Vehicle,Car} from './blocks/cars/cars.js';
import {Writer, Pen, Pencil} from './blocks/writers-private-symbol/writers';
import {Buildin, Bungalow} from './blocks/buildings-private-weakmap/buildings';

(function () {
    let $body;

    //Caching Selectors
    $(document).ready(function () {
        $body = $('body');
    });

    $(document).ready(function () {
        hiWebpeck($body);
    });

    for (let i = 0; i < 5; i++) {
        let car = new Car(i,i,i,i);
        car.setMark("VW");
        car.showCar();
    }

    let writers = new Array(9);
    for (let i = 0; i < 9; i++) {
        let wr;
        if(i < 3){
            wr = new Writer(i);
            console.warn(i);
        }else if(i < 7){
            wr = new Pen(i);
            console.warn(i);
        }else {
            wr = new Pencil(i);
            console.warn(i);
        }
        writers.push(wr);
    }

    writers.forEach(wr => wr.write('hi'));

    for (let i = 0; i < 5; i++) {
        let obj = new Bungalow(i,3,i*i);
        console.log(obj.getPlaces());
    }
})();
