- What is the difference between forEach, map, filter and reduce ?
### forEach calls a function once for each element in an array.

### map() creates a new array with results of calling a function for every array element.
### map() doesn't change the original array and doesn't execute on empty functions.

### filter() method creates an array filled with all array elements that pass a test provided by a function.

### reduce() method executes a reducer function for each value of an array and returns a single value which is the function's accumulated result.

- Explain the difference between function declaration and arrow function ?

### Syntax
`const add = function(a,b){
    return a + b   
}`

`const add = (a,b) => {
    return a + b
}`

### Use of `this` keyword is not necessary in arrow functions, only to use in regular functions.
### Regular functions are constructable and `new` keyword is used, where as in arrow functions we cannot use it.

- Explain the difference between findIndex() and find()
### The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.

### The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

- If you like to filter out one object element in an array which method do you like to use: filter or find ?
### filter()

- Explain the difference of var, let and const when we declare a variable ?
### var is a global scope, can be reassigned, redeclared, hoisted.\
### let is function scope and block scope and only can be reassigned.
### const is block scope and function scope