
/*

let interestRate = 0.3; // this is an initial value which we can always change later
interestRate = 1;
console.log(interestRate) //output -> 1   */

/************************************************************************ */

/* In real world problem, there are situations where we 
don't want to change value of variable, in this situation we use constant  */


const interestRate = 0.3;
interestRate = 1; // this will throw an error as we cant reassign a const variable
console.log(interestRate)