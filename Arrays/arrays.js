// Arrays and It's Methods

// Arrays => The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes

// JavaScript arrays are zero-indexed

const myArray =[0,1,2,3,4,5]               // Assing of Basic array to variable 

// console.log(myArray); 

const mixArray = ["Mix",1,2,3,true,null]   // In JavaScript arrays are resizeable can contain mix of different datatypes

// console.log(mixArray);                  // Output => [ 'Mix', 1, 2, 3, true, null ]  We can add mix types of datatypes in single array 

// Methods of Arrays

// console.log(myArray.length);            // Output => 6  Using .length we can get the length or how many elements are present in array.

// console.log(mixArray[0])                // Output => Mix | If we (arrayname[]) and put desired index no in squre bracket then we will get the out put of the assing value on    that index no

const newArray =  new Array (0,1,2,3,4,5)   // Here's another way of creating array in js using new keyword 
// console.log(newArray);

// newArray.push(6)                          // By using .push() method we can add new element in array after the last element for exmaple after 5 the 6 added

// console.log(newArray);                      // Output => [ 0, 1, 2, 3, 4, 5, 6 ]  

// newArray.pop()                           // By using this .pop() method we can remove the last element from array 

// console.log(newArray);                      //  Output => [ 0, 1, 2, 3, 4, 5,]     

 newArray.unshift(9)                         // By using unshift() method we can add new element on start of the array which not good at all because of this method all the current element exists in array there index no is changed                   

// console.log(newArray);                      //  Output => [ 9, 0, 1, 2, 3, 4, 5,] 

newArray.shift()                            // By using .shift() method we can remove the starting element of the array 

//  console.log(newArray);                      // //  Output => [ 0, 1, 2, 3, 4, 5,]     

const anotherArray = [0,1,2,3,4,5]

// console.log(anotherArray.includes(0));      // Output => true   | .includes() returns boolean type output only to check search element is present or not     
// console.log(anotherArray.includes(60));     // Output => false  | there is 60 present in array that's why we get false  

// console.log(anotherArray.indexOf(5));       // Output => 5      | .index() to cheack which value is present on that index no 

const arr1 = [0,1,2,3,4,5]
const arr2 = arr1.join()                    // By using .join() all the array element converted into string format 

// console.log(arr1);
// console.log(arr2);                          // Output => 0,1,2,3,4,5   
// console.log(typeof(arr2));

// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator: .join(" * ")

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" * "));                // in addition you can specify the separator
                                                // Output => Banana * Orange * Apple * Mango


// Slice and Splice Diffrenc                                                 

const newarr = [0,1,2,3,4,5]

console.log("A :",newarr);

console.log("B :", newarr.slice(1,3));     // Output => B : [ 1, 2 ]  // This method dont manipulate the the array elemnts 

console.log("Orignal A :",newarr);

console.log("C ",newarr.splice(1,3));     // Output => C : [ 1, 2, 3 ]  

console.log("Orignal A :",newarr);        // Output => Orignal A : [ 0, 4, 5 ]  Because of the .splice method all the array elements get affectede and changed thier native index position and created diff array


// Slice  => It doesn't manipulate the existing elements index values or elements

// Splice => This method affect all the elements and elements index values 