// There are two type of datatypes 1) Premitive Datatypes & 2) Non-Primitive Datatypes (Reference Type)

// Primitve Datatyps [ Number,BigInt,String,Boolean,null,undefined,symbol,object]

let idNumber = 11              // Number
let idBigInt = 123456789n      // BigInt
let userName = "Shubham"       // String
let isLoggedIn = true          // Boolean
let isValue = null             // Null
let x = undefined              // Undefined

const score = Symbol('10')     // Symbol 

const newscore = Symbol('10')   // Will compare score and newscore to know how the symbol datatype we can see diff output with same data in diff variables 
                                // Symbol makes unique values of data
console.log(score ===newscore); // here we get output false because of unique values by the use of [Symbol Datatype]
console.log(typeof(score,newscore));



// Non-Premative Datatypes (Reference Type) [Arrays,Objects,Functions]

let cars= ["P1","M5","Z4","XC90","E250d"];  // Array 
console.log(cars);
console.log(typeof(cars));

let myObj= {                        // Object    // we can decleare Object in Variable i.e let myObj= {here's all the object data}
    
     myId : 1,                                   // we dont have to use [=]  to assing data to variable we have to use [:] in object                
     myName : "Shubham",              
     myEmail: "abc@xyz.com"
}

console.log(myObj);
console.log(typeof(myObj));

let myFunction = function () {                           

 console.log("Hello World in Function Datatype");       // Function [Non- Premitive Datatype thats how we write and we can assing variable to it also]

}

