// Stack Memory & Heap Memory 

// All the Premitive Datatypes are store in Stack Memory & All The Non-Premative Datatypes are Store in Heap Memory

// Premative Datatype

let myName = "Shubham"
let myAnotherName = myName    // The value store in stack memory give reference of variable data not the actual value


console.log(myAnotherName);

myAnotherName ="ShubhamAnother"  // Here we can see rather than changing the exsting value from memory it will create another value for output

console.log(myAnotherName);

// Non-Premative Datatype

let user1 ={
    name : "shubham",
    upiId : "shubham@sbi.com"

}

// console.log(user1);    //  here we get output of object the non-premative datatype

let user2= user1

user2.name = "ShubhamAnother"    

console.log(user1.name);
console.log(user2.name);   // So after output we can see In heap Memory directly refer to Orignal data not the refreance after change in user2 data user 1 data 
                           //gets automatically change beacuse of direct access to data in heap memory 
                           // in heap memory user1 and user2 got same reference from heapmemory

// Stack (Premative Datatypes) & Heap (Non-Premative Datatypes)