// Objects Part 2 

const objs = new Object()   // Singleton Object      // This how object is created using constructor    // Output => {}     Beacuse Object is empty there is no key and value in it.
// console.log(objs);

const objAnother = {}     // Non-Singleton Object    // We can declear object like this too 

const tinderUser = {}
tinderUser.id = 1
tinderUser.name = "Samay"
tinderUser.eMail = "samay@google.com"
tinderUser.isLoggedIn = false

console.log(tinderUser);         // Output => { id: 1, name: 'Samay', eMail: 'samay@google.com', isLoggedIn: false } 

const regularUser = {

    id: 1,
    fullName: {                                                                             
        userFullName: {
            firstName: "Ram",
            lastName: "Lala"
        }
    }
}                                      // We can declare object within object as much as you can we can access also 

console.log(regularUser);             // Output =>  {id: 1,fullName: { userFullName: { firstName: 'Ram', lastName: 'Lala' } } }

const obj1 = {1: "A", 2: "B", 3: "C"}
                                                        // Megerging to Objects 
const obj2 = {1: "D", 2: "E", 3: "F"}

//const obj = {obj1,obj2}                    
//console.log(obj);                 // Output => { obj1: { '1': 'A', '2': 'B', '3': 'C' } , obj2: { '1': 'D', '2': 'E', '3': 'F' } }
                                 // Same issue we face early in array, created 2 seprate object as 2 elements of array  


// const obj3 = Object.assign({},obj1, obj2)   // Another way to add objects 

const x = {1: "A", 2: "B"};
const y = {1: "A", 2: "B"};

const z = {...x, ...y};     // we can add objects throud Spread Operator too just like arrays
console.log(z);                                                 

// not done

