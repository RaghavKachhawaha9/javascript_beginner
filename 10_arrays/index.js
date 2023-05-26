
let selectedColors = ['red','blue']; // these square brackets are called array literals

console.log(selectedColors)

/*
Array [ "red", "blue" ]​
0: "red"​
1: "blue"​
length: 2​
<prototype>: Array []
*/

//Accessing elements in an array

console.log(selectedColors[0])  // red
console.log(selectedColors[1])  //blue

//expanding array

selectedColors[2] = 'green'

console.log(selectedColors) //[ 'red', 'blue', 'green' ]

// We can change type of element in an array

selectedColors[1] = 3

console.log(selectedColors)  //[ 'red', 3, 'green' ]

// type of array

console.log(typeof selectedColors)  //object

//array properties eg. length

console.log(selectedColors.length) // 3
