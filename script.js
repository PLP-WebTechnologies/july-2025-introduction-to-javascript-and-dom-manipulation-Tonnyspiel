let x = 10;
let y = 5;

console.log(x / y);
 
let a = 5
let b =10/2
console.log(a==b);
console.log(a>b);

function addition() {
    return x + y;
}
function subtraction() {
    return x - y;
}
function multiply() {
    return x * y;
}
function division() {
    return x / y;
}


console.log(addition());
console.log(subtraction());
console.log(multiply());
console.log(division());


function greet() {
    console.log('Hello my people');
}

greet(); // call the function


if(5>3){
    console.log("YES");
}
else{
    console.log("NO");
}


let arr = [10, 20, 30, 40];

for (let item of arr) {
    console.log(item);
}
