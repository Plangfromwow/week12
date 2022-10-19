// compare the results of a fn to the fn itself 
// using a real world obj vs buying the object and giving it to someone as a gift 
function MakeCup(brand) {
    return "One cup of ".concat(brand, "!");
}
;
var cup1 = MakeCup('Folgers');
console.log(cup1);
function secondCoffeeMaker(machine) {
    return machine('Starbies');
}
;
console.log(secondCoffeeMaker(MakeCup));
