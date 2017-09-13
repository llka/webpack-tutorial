class Vehicle{
    constructor(mark, model){
        let _mark = mark;
        let _model = model;
        this.getMark = () => _mark;
        this.setMark = (mark) => _mark = mark;
        this.getModel = () => _model;
        this.setModel = (model) => _model = model;
    }
}

function countAllVehicles(){
    let count = 1;
    return function () {
        return count++;
    }
}

class Car extends Vehicle{
    constructor(mark, model, doors, fuelConsumption) {
        super(mark, model);
        this._fuelConsumption = fuelConsumption;
        this._doors = doors;
    }

    get doors() {
        return this._doors;
    }

    set doors(value) {
        this._doors = value;
    }

    get fuelConsumption() {
        return this._fuelConsumption;
    }

    set fuelConsumption(value) {
        this._fuelConsumption = value;
    }

    showCar(){
        console.info('car = ' + this.getMark() + ', ' + this.getModel() + ', ' + this.fuelConsumption);
    }
}

export {Vehicle, Car}

