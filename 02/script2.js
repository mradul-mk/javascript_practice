// ============================================================================

// Normal Functions

function addNumbersV1()
{
    let ans = 0;
    for(let i=0;i<arguments.length;i++){
        ans += arguments[i];
    }
    return ans;
}

function addNumbersV2(...numbers){ //spread operator
    let ans = 0;
    for(let i=0;i<numbers.length;i++){
        ans += numbers[i];
    }
    return ans;
}

console.log("addNumbersV1 = " + addNumbersV1(1,2,3,4,5));
console.log("addNumbersV2 = " + addNumbersV2(1,2,3,4,5,6));

// ============================================================================
// Arrow Functions

// 1. Syntax 

const add = (a,b) => {
    return  a+b;
}
console.log("Arrow function add " + add(2,3));

// agar sirf 1 line hai function m to we can further reduce arrow function

const addv2 = (a,b) => a+b;
console.log("Arrow function addv2 " + addv2(3,4));

// 2. arguments kwywork nahi use krskte arrow func mein
// spread operator kar skte hai

const addnumv3 = (...nums) => {
    let ans = 0;
    for(let i=0;i<nums.length;i++){
        ans += nums[i];
    }
    return ans;
}
console.log("Arrow function addv3 " + addnumv3(1,2,3,4,5));

// 3. Hoisting . Function ko pehle use kar lo aur baad mein define karo
// normal function : hoisting allowed
// arrow function : hoisting not allowed
sayHello(); // allowed
function sayHello(){
    console.log('Normal Hello')
}

//hello(); // Not allowed
const hello = () => console.log("Arrow Hello");
hello();

// 4. this keyword
// normal function -> this refer to current object
// arrow function -> this refer to browser window

const obj = {
    value : 20,
    myFunc: function(){
        console.log("current obj : " + this.value);
    }
}
obj.myFunc();

const obj2 = {
    value : 20,
    myFunc: () => {
        console.log("window obj : " + this);
    }
}
obj2.myFunc();