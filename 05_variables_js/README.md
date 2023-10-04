## Variable in JS
*** 
1. We use a variable to store data temporarily in computers memory.
2. We store that data in memory and give it a name => variable name
3. Using this name we can read the data in the future.
4. Before ES6, **var** keyword was used to declare a variable. 
5. After ES6, best practice is to use **let** keyword to declare a variable.
***  

### Rules for naming variables in javascript
***
1. Cannot be a reserved keyword.
2. Should be a meaningful name. (DESCRIPTIVE)
3. Cannot start with a number. (1name)=> not allowed
4. Cannot contain a space or a hyphen
5. You can use camel notation. Eg. firstName
6. Are case-sensitive 
7. **let _firstName** and **let $firstName** is allowed.
8. Avoid using first letter of variable as capital letter. These kind of variable names are used for specifice use case in js which object-oriented programming.
9. vairables in upper-case are used for constants eg. let PI=3.1415;
***  
### 2 Ways of declaring multiple variables
***
1. let firstName, lastName; // they both are undefined
2. let firstName= 'John' , lastName= 'Wick';
3. Modern best practice is to declare both the variables on separate lines
