// Objects 
// Singleton

// Object.create    => We can create object like this also by constructor

const user = {
    
    id: 1,
    name: "Shubham",
    "fullName" : "Shubham H",               // This kind of variable only print by the second method => console.log(user["fullName"])
                                            // Because we can not call string variable name useing ( . ) notation so we have to use like this  => console.log(user["fullName"])      
    eMail : "mail@google.com",                      
    location : "Pune",
    isLoggedIn : false,
    lastLogInDays : ["Monday","Thrusday"]
}

console.log(user.id,user.name,user.eMail,user.location,user.isLoggedIn,user.lastLogInDays);   // Outpute => 1 Shubham mail@google.com Pune false [ 'Monday', 'Thrusday' ]
// We can access object values using ( . ) notation .id , .name etc  for example user.id , user.name  
// but there is another way to access the values more useful than ( . ) notation 

// here is the another correct way to print variable form object

console.log(user["fullName"])      // Output =>Shubham H

user.eMail = "mail@rediff.com"       // => Changeing the value of variable  

console.log(user.eMail);            // Output => mail@rediff.com    // In output value is changed

// Object.freeze(user)                       // If we dont want to change value or anybody else the we can use this method (Object.freeze(objectname)) after using this the values in object can't be changed

user.eMail = "mail@yahoo.com"
console.log(user.eMail);            // Output =>   mail@rediff.com   // Look no changes in the value 
console.log(user);

user.grettings = function() {
    
    console.log("Hello User");

}

user.grettings2 = function() {

    console.log(`Hello User,${this.name}`);          // => String Interpolation  (` ..... `)  
                                                      // (this.)        will learn after some sessions    
}

// console.log(user.grettings);   => wrong way to print

console.log(user.grettings());

console.log(user.grettings2());

// Now Let's see how to correct way to denote the Symbol in Object 

const mySym = Symbol("key1")

const objs = {

 [mySym] : "MyKey1"         // => This is correct way to denote Symbol in Object.
               
}
console.log(objs[mySym]);



