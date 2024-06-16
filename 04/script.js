// Closure and Curry Functions

// CLOSURES 
// A closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.


function init(_name){
    var name = _name;

    function myName(){
        // alert(name);
    }

    return myName;
}

displayNameMradul = init("Mradul");
displayNameVansh = init("Vansh");
displayNameMradul();
displayNameVansh();

// Javascript Curry 
// When we donot have all variables in a function available. Execute function
// only when all the params are available

// CURRY Example 1
function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(add(1)(2)(3));

    //Modified Code

    const add2 = (a) => (b) => (c) => a+b+c;
    console.log(add2(2)(2)(4));


// Curry Example 2

function sendEmail(to){
    return function (subject){
        return function (body){
            console.log(`Sending email to ${to} with subject : ${subject} and body : ${body}`);
        }
    }
}
sendEmail('mradul@gmail.com')('voucher received')('Voucher Code is XXXX');

    //Modified Code

    const sendEmail2 = (to) => (subject) => (body) => console.log(`Sending email to ${to} with subject : ${subject} and body : ${body}`);
    sendEmail2('mradul2@gmail.com')('voucher2 received')('Voucher Code is 2XXXX');