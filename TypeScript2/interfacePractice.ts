class Car{
    make:string;
    model:string;
    year:number;

    constructor(_make:string,_model:string,_year:number){
        this.make = _make;
        this.model = _model;
        this.year = _year;
    }
};

let car1:Car = {
    make:'Honda',
    model:'Civic',
    year:1995
};

let car2:Car = {
    make:'Ford',
    model:'Mustang',
    year:2018
};

let car3:Car = {
    make:'Chevy',
    model:'Trax',
    year: 2018
};

console.log(car1);
console.log(car2);
console.log(car3);