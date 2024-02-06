
function greet() {
    //body of function 
    console.log("Hello world")
}

greet(); // Hello world

// argument and parameter

function address(name) { //name is parameter here
    console.log('hello ' + name)
}

address('John') // john is argument here  
address('Mary') // we can reuse this function with different input

//output 
// hello John
// hello Mary


// We can have multiple parameters

function welcome(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

welcome('John', 'Wick') // output -> Hello John Wick


//Types of function

// return keyword

function square(num){
    return num*num;
}


let number = square(3)
console.log(number) // 9
//creating a variable to call a function is not necessary 
console.log(square(2)) //4

