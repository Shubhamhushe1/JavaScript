// JavaScript Arrow Function Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => (a * b);                     // Implicit Return  we dont have to use return 

console.log(myFunction(4,5));                           // We will get the output without using return 

// If we use return we call it explicit return and I we do not use return we call it implicit return 

// Before Arrow 
hello = function() {
    return "Hello World!";                    // That's how we write with explicit return // It means we have to use return keyword to give something to function back
  }

  console.log(hello()); 

  // Let's pass Object using Arrow Function
  
let myObject = () => ({userName:"Shubham"})                // In this way we pass object in arrow function make sure all the object inside the round brackets otherwise it will not work

console.log(myObject());                     

// Arrow Function With Parameters:

//let withParameters = (num) => 100 + num        // That's how we pass parameters in arrow function

// let withParameters = (num) => (100 + num)     // We should use round brackets in arrow function for best practices 

let withParameters = num => (100 + num)         // We can pass like this too without parentheses 

console.log(withParameters(10));  

//******************************************************************************************************************************************//

// What about This ?
// The handling of this is also different in arrow functions compared to regular functions. In short, with arrow functions there are no binding of this.
// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.

// This keyword refers to current context 

const user = {
  userName:"Shubham",
  price : 499,
  welcomeMassage : function (){
    console.log(`${this.userName}, Welcome to website`);                 // Here we using This for current context within the scope of user Object
    
    console.log(this);                                 // If we use this keyword within scope  Output =>  {userName: 'Shubham',price: 499,welcomeMassage: [Function: welcomeMassage]}
  }
}

user.welcomeMassage()                          

user.userName = "Sam"                                    // Here we change the context or we can call we change the values 

user.welcomeMassage()

console.log(this);                    // Output => {}          // Because this keyword only refers to current context in node enviorment 