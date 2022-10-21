//Interval practice 1
function printTime(){
    console.log(new Date());
};

setInterval(printTime,5000);

//Interval Practice 2
setInterval(()=>{
    console.log(new Date());
},5000);

//Timeout Practice1
setTimeout(()=>{
    console.log("Hello");
},3000);

//forEach Practice 1
let names:string[] = ['Names','Benjamin','Gregory','Fred','Strings','MoreNames'];
names.forEach((name:string)=>{
    console.log(`Welcome ${name}!`)
});

//foreach Practice 2
let nums:number[] = [5,6,2,3,4,8,7,9]

let total = 0;

nums.forEach((num:number) => {
    total = total + num;
});
console.log(total);

console.log("banana")