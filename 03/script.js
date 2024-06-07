// High Order Functions -> jo arguments me functions accept kar sake
// Callback fucntions -> functions as arguments

function add(a,b, cb){
    let res = a+b;
    cb(res);
}

add(2,3, (res)=>console.log(res));

// add -> high order fucntion
// cb -> callback function

// We can also return a fucntion

function addv2(a,b){
    let res = a+b;
    return () => console.log(res);
}

let myfunc = addv2(2,2); //this is a function returned
myfunc();