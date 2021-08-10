function sum(a, b){
    return a+b;
}

function product(a,b){
    return a*b;
}

console.log("the sum is " + sum(2,3));
console.log("the product is " + product(2,3));

// Using an anonymous function as the callback for setTimeout
setTimeout( function(){
    console.log("I'm coming from the anonymous function!")
},1000);

// Using an arrow function as the callback for setTimeout
// Works just like an anonymous function but less code
setTimeout(()=> console.log("I'm coming from the arrow function!"),1000);
