let nums:number[] = [5,6,10,3,2];

for (let i = 0;i<nums.length;i++){
    console.log(nums[i] * 2)
};

// Loop version 2 foreach with sepearte function

let f1 = (p:number)=> {
    console.log(p*2);
};

//f1(10);

nums.forEach((num:number)=>{
    console.log( num * 2)
});


// loop v3 foreach with function insied  

// loop v4 

for( let num of nums){
    console.log(num*4);
};