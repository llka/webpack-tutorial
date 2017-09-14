let Building = (function () {
    let _id = new WeakMap();
    let _height = new WeakMap();

    class Building {
        constructor(id, height) {
            _id.set(this, id);
            _height.set(this, height);
        }

        get id() {
            return _id.get(this);
        }

        set id(value) {
            _id.set(this, value);
        }

        get height() {
            return _height.get(this);
        }

        set height(value) {
            _height.set(this, value);
        }
    }
    return Building;
})();

let Bungalow = (function () {
    let _places = new WeakMap();

    class Bungalow extends Building {
        constructor(id, height, places) {
            super(id, height);
            _places.set(this, places);
        }

        getPlaces() {
            return _places.get(this);
        }

        setplaces(value) {
            _places.set(this, value);
        }

    }
    return Bungalow;
})();

export {Building, Bungalow};