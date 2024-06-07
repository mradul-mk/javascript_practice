// Variables
// JS is loosly typed language because of loose data types
// =======================================================================
// Type 1: var -> global scope
// Re assign kar skte ho
// Kabhi bhi access karo

var a  = 1

a = "mradul"
console.log(a)

console.log(b)
var b = 2
console.log(b)

// =======================================================================
// Type 2 : let . Comes in newer versions of JS . Has a local scope
// Re assign kar skte ho
// Access sirf khud k block k andar

if(true){
    let x = 1;
    console.log(x);
}

//console.log(x); // error

// =======================================================================
// Type 3 : const . Constant. Local scope and assign value at time of decleration.
// Re assign nahi kar skte ho
// Access sirf khud k block k andar

const y = 22;
//y= 30; //error
console.log(y)