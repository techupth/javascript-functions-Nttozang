// Start coding here
let calculator = {
    add : (a,b) => a+b,
    subtract : (a,b) => a-b,
    multiply : (a,b) => a*b,
    divide : (a,b) => a/b,
};

let addResult = calculator.add;
let divideResult = calculator.divide

console.log(addResult(10,20));
console.log(divideResult(3000,10));