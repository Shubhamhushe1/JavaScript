//Datatype Conversion Operation 

let id = 11
console.log(id);        //for printing existing type of the variable
console.log(typeof(id)) // It give us the type of data store in variable because we use typeof method to know about type of the variable

let id2 = "22"  // now we have id2 is in string format but we want to convert into number
console.log(id2); //for printing existing type of the variable
console.log(typeof(id2))

let valueinNumber = Number(id2) // here we convert that string value to numeric value using the "Number(variablename)" same method we can conver numeric value to String also  
console.log(valueinNumber)  
console.log(typeof(valueinNumber)) // here we can check the value is converted or not by using typeoff method

let idNumeric = 132
let id3 = String(idNumeric)   // here we convert numeric value in String

console.log(id3); //for printing existing type of the variable
console.log(typeof(id3))  //// here we can check the value is converted or not by using typeoff method

let age = null

let ageConv = Number(age)  // in this we are going to convert the null value to number 
console.log(ageConv);      // but it give is zero as output

let ageString = String(age)  // in this we are going to convert the null value to String 
console.log(ageString);