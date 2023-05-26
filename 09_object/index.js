
let name = "John";
let age = 30;

// we can create a person object. Instead of 
// referencing these 2 variables, we can reference
// person object.

let person = {
//here we will have key:value pairs
// keys are the properties of the person
name: 'John',
age: 30

} // we call this curly brackets as object literal

console.log(person); //{ name: "John", age: 30 }

// Dot notation
person.name= 'Rohn'
console.log(person.name) //Rohn

// Bracket notation

person['name'] = 'Mary'
console.log(person['name']) //Mary

/*
which is better dot notation or bracket notation

1. we can see that dot notation is pretty concise so that should be your default choice.
2. Sometimes you don't know the target property until the runtime, user might be selecting some
target property which we are not aware of so we might need another variable like selection which
will take target property from the user and we can access that property using bracket notation 
in dynamic way
*/
let selection = 'name';
person[selection] = 'George'
console.log(person[selection]) // George


console.log(person) //Object { name: "George", age: 30 }