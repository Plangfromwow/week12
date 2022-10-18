console.log('hello world');
function Add(x, y) {
    return x + y;
}
var Add2 = function (x, y) {
    return x + y;
};
var Multiply = function (x, y) {
    return x * y;
};
console.log(Multiply(6, 5));
// does the same thing, but don't have to make a whole thingy mabob for it.
var mult2 = function (x, y) { return x * y; };
console.log(mult2(10, 20));
// interval function 
var hello = function () {
    console.log("hello world");
};
hello();
// now we make the set interval function, we are going to hand over two things: 
//Function to call, number of miliseconds that it waits to do it again
//will then call that function that many times, we will do it every 3 seconds because we are CARAZY
// to hand over things to afunction, we are passing as parameters
// we are going to hand over a function and a time interval. 
//setInterval(hello,3000);
setInterval(function () {
    console.log('hello');
}, 3000);
// this is all well and everything and it's the only thing we need to take away form this
