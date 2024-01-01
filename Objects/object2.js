// Objects Part 2 

const objs = new Object()   // Singleton Object      // This how object is created using constructor    // Output => {}     Beacuse Object is empty there is no key and value in it.
// console.log(objs);

const objAnother = {}     // Non-Singleton Object    // We can declear object like this too 

const tinderUser = {}
tinderUser.id = 1
tinderUser.name = "Samay"
tinderUser.eMail = "samay@google.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);         // Output => { id: 1, name: 'Samay', eMail: 'samay@google.com', isLoggedIn: false } 

const regularUser = {

    id: 1,
    fullName: {                                                                             
        userFullName: {
            firstName: "Ram",
            lastName: "Lala"
        }
    }
}                                      // We can declare object within object as much as you can we can access also 

// console.log(regularUser);             // Output =>  {id: 1,fullName: { userFullName: { firstName: 'Ram', lastName: 'Lala' } } }

const obj1 = {1: "A", 2: "B", 3: "C"}
                                                        // Megerging to Objects 
const obj2 = {1: "D", 2: "E", 3: "F"}

//const obj = {obj1,obj2}                    
//console.log(obj);                 // Output => { obj1: { '1': 'A', '2': 'B', '3': 'C' } , obj2: { '1': 'D', '2': 'E', '3': 'F' } }
                                 // Same issue we face early in array, created 2 seprate object as 2 elements of array  


// const obj3 = Object.assign({},obj1, obj2)   // Another way to add objects 

const x = {1: "A", 2: "B"};
const y = {3: "A", 4: "B"};

const z = {...x, ...y};     // we can add objects throud Spread Operator too just like arrays
// console.log("Using Spread Operator :", z);     // Output => Using Spread Operator : { '1': 'A', '2': 'B', '3': 'A', '4': 'B' }                                             

// const objxy = Object.assign({},x,y)     // Object.assign({},x,y)  Object.assign () is method to add objects into single array, for better code structure we have to put {} before variables.        
// console.log(objxy);                    // Output => { '1': 'A', '2': 'B', '3': 'A', '4': 'B' }  


const bumbleUser = {

id:1,
name: "Shikha",
age :22,
mail:"shikha22@google.com",
isLoggedOut:true

}

console.log(bumbleUser);
console.log(Object.keys(bumbleUser));          // Output => [ 'id', 'name', 'age', 'mail', 'isLoggedOut' ] // Object.Keys(ObjectName) is use to get key of the data from Object
console.log(Object.values(bumbleUser));        // Output => [ 1, 'Shikha', 22, 'shikha22@google.com', true ] // Object.values(ObjectName) is use to get values only from Object
console.log(Object.entries(bumbleUser));       // Output => [[ 'id', 1 ],[ 'name', 'Shikha' ],[ 'age', 22 ],[ 'mail', 'shikha22@google.com' ],[ 'isLoggedOut', true ]]  // We will get seperate Array for each key 
console.log(bumbleUser.hasOwnProperty('isLoggedIn'));  // We use .hasOwnProperty to know the specific key or value is present in the Object or not  



const users =[
    
    {
        no:1,
        naam:"A"
    },

    {
        no:2,                                           // This kind of data come when we fetch all the data from the database to perform operations, multiple details in single object
        naam:"B"
    },

    {
        no:3,
        naam:"C"
    }


]

console.log(users[0]);  //      Output =>     { no: 1, naam: 'A' }
console.log(users[1]);  //      Output =>     { no: 2, naam: 'B' }   // using index no. we can get specific details
console.log(users[2]);  //      Output =>     { no: 3, naam: 'C' }

users[0].id // we can get specific details too

                                              

                                                        // Object Destructure 

const subject = {

    coursename: "JavaScript",
    teacher : "Hitesh",
    price : 999
    
    }


// console.log(subject.coursename);   // Output => JavaScript   // we can get output like this but we can destructure the  object 

// const {coursename : course} = subject                       //Destructuring             
// console.log(course);              // Output => JavaScript    

const{coursename} = subject
console.log(coursename);         // we can destructure like this too 

                                                            
                                                                // JSON 

// Example of JSON 

{
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
      ]

}

//JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page.
//What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

