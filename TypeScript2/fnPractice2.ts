// compare the results of a fn to the fn itself 
// using a real world obj vs buying the object and giving it to someone as a gift 


function MakeCup(brand:string){
    return `One cup of ${brand}!`
};

let cup1:string = MakeCup('Folgers');
console.log(cup1);


function secondCoffeeMaker(machine){
    return machine('Starbies');
};

console.log(secondCoffeeMaker(MakeCup));