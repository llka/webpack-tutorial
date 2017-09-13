import $ from "jquery";
import './blocks/hiWebpack/hiWebpack.css';
import './blocks/common/common.css';
import hiWebpeck from './blocks/hiWebpack/hiWebpack';
import {Vehicle,Car} from './blocks/cars/cars.js';

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
})();
