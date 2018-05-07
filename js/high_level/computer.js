function add(a,b) {
    return a+b;   
}

function minus(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function compute(a,b,fn) {
    return  fn(a,b);   
}
console.log(compute(1, 2, add));