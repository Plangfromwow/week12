//Interval practice 1
function printTime() {
    console.log(new Date());
}
;
setInterval(printTime, 5000);
//Interval Practice 2
setInterval(function () {
    console.log(new Date());
}, 5000);
//Timeout Practice1
setTimeout(function () {
    console.log("Hello");
}, 3000);
//forEach Practice 1
var names = ['Names', 'Benjamin', 'Gregory', 'Fred', 'Strings', 'MoreNames'];
names.forEach(function (name) {
    console.log("Welcome ".concat(name, "!"));
});
//foreach Practice 2
var nums = [5, 6, 2, 3, 4, 8, 7, 9];
var total = 0;
nums.forEach(function (num) {
    total = total + num;
});
console.log(total);
