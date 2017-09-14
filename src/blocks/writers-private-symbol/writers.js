let Writer = (function () {
    let _id = Symbol();

    class Writer {
        constructor(id) {
            this[_id] = id;
        }

        write(str){
            console.log(`Writer - ${this[_id]} says: ` + str);
        }


        getId() {
            return this[_id];
        }

        setId(value) {
            this[_id] = value;
        }
    }

    return Writer;
})();

class Pen extends Writer{
    constructor(id){
        super(id);
    }

    write(str){
        console.log(`Writer pen - ${super.getId()} says: ` + str);
    }
}

class Pencil extends Writer{
    constructor(id){
        super(id);
    }

    write(str){
        console.log(`Writer pencil - ${super.getId()} says: ` + str);
    }
}

export {Writer, Pen, Pencil};