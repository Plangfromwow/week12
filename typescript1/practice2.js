var nums = [5, 6, 10, 3, 2];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i] * 2);
}
;
// Loop version 2 foreach with sepearte function
var f1 = function (p) {
    console.log(p * 2);
};
//f1(10);
nums.forEach(function (num) {
    console.log(num * 2);
});
