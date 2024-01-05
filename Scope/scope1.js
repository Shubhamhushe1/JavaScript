// Global & Local Scope 

// Scope determines the accessibility (visibility) of variables. Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// JavaScript variables have 3 types of scope:
// Block scope
// Function scope
// Global scope

// Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x = 2;
  }

// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

{
    var x = 2;
  }
// x CAN be used here

// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:
// Local variables have Function Scope: They can only be accessed from within the function.
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";      // This variable is limited to function . We can call it function scope
    
    // code here CAN use carName
  }
  
// code here can NOT use carName


//Global JavaScript Variables : A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName
function myFunction() {
    // code here can also use carName
console.log(carName);    
}
myFunction()

// A global variable has Global Scope: All scripts and functions on a web page can access it. 


//  Automatically Global : If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";         // Look here we did not assing variable to value so it can access as globle
}