// Strings and Strings Methods in JavaScript

// JavaScript counts positions from zero.
// First position is 0.
// Second position is 1.

let myName= "Shubham" 
console.log(myName);               // Basic String Print without adding any methods


// There are plenty of methods for Strings in JavaScript
// String length                =>  The length property returns the length of a string

let user = "Krishna"
console.log(user.length)        

// String slice()               =>    slice() extracts a part of a string and returns the extracted part in a new string. 
//                                    The method takes 2 parameters: start position, and end position (end not included).


let text = "Apple, Banana, Kiwi"; 
let part = text.slice(0,5); 
let part0 = text.slice(7);       // If you omit the second parameter, the method will slice out the rest of the string: 
console.log(part);
console.log(part0);



// String substring()           =>substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().


let text1 = "Apple, Banana, Kiwi"; 
let part1 = text.substring(7, 13);
console.log(part1);



// String substr()              =>
// String replace()             =>
// String replaceAll()          =>  
// String toUpperCase()         =>
// String toLowerCase()         =>      
// String concat()              =>  
// String trim()                =>
// String trimStart()           =>
// String trimEnd()             =>
// String padStart()            =>
// String padEnd()              =>
// String charAt()              =>
// String charCodeAt()          =>    
// String split()               =>



