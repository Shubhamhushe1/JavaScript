// Basic Operations 
// Normal Arethmatic Operations 
console.log(1+2)   
console.log(2-1)
console.log(1*2)
console.log(1/2)
console.log(1%2)
console.log(2**2)  // 2 to the power of 2  

// add to strings
let string1 = "hello"
let string2 = "_world"

let string3 = string1 + string2 // adding two diff string in single string or assing to single variable with the addition so we can get output

console.log(string1 + string2); // addition two strings

console.log(string3); 

// Little Complex Stuff to remember

console.log("1" + 2)   // 1 is string and 2 is numeric value so we will get string output 
console.log(1 +"2")   // 1 is numeric and 2 is string still we get string output
console.log(3 + 1 + "2") // now we have Two  numaric values 3+1  and one string value "2" then the pre numeric values get addition and the rest string value print as usual     
console.log("3"+ 1 + 2)  // here the actual complex part as per EGMA Documentation if String comes first the all the values after that considers String to print the output 

// Prefix and Postfix Operations

let gameCounter = 100
gameCounter++ // It's a postfix counter // in this value increment after usage
console.log(gameCounter);

let gameCounter2 = 100 
++gameCounter2  // It's a prefix counter // in this value increment berfore usage 
console.log(gameCounter2);

