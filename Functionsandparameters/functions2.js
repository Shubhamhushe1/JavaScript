// REST AND SPREAD OPERATOR  (... anyvariable or parameter) 

// REST AND SPREAD OPERATOR HAVE SAME TYPE TO DENOTE 
// Spread Operators allow us to expand an array or object into its individual elements. 
// Rest Operator allows us to condense multiple elements into a single array.

// Spread and Rest Operator changes is working depending upon how it will get used during writing a code
// for example If we want to merge two array togather the we use Spread operator
// and If we want to add multiple parameters we use REST Operator i.e Shopping Cart // we dont know na how many item user will put into cart so can not limit it in fuctions parameters so we use rest operator in functions parameters

function shoppingCart (...items ){
return items

}
// console.log(shoppingCart(100,100,200,454,569));        // Output = > [ 100, 100, 200, 454, 569 ]   // use can unlimited items into the cart it will added to array

// Let's se now If we do not use Rest Operator what will happens 

function shoppingCart1 (items ){
    return items
    
    }
//console.log(shoppingCart1(100,100,200,454,569));    // Output = > 100   // Because we did not use rest operator function got only 1st value we put in shoppingCart1

function shoppingCart3 (value1,value2,...items ){                          // there is one more thing when the two values already defind or after that we declear a rest operator 
   
   // return items                                          // we return only items not the value1 and value2 items from cart   // Output =>   [ 200, 454, 569 ]  Look here now first two values get assigned to value1 and value2 after that rest value goes to ...items
   return [value1, value2, ...items];                      // If we return like this in array all the parameters the we will get all the passed values
    }
console.log(shoppingCart3(100,300,200,454,569));       


                                                 // How to Pass Object in Functions

const user = {
    id: 1,
    name: "Shubham"

 }                                                

 function passuser (anyuser)  {

    console.log(`Id is ${anyuser.id} and Name is ${anyuser.name}`);   

 }

// passuser(user)            // Output => Id is 1 and Name is Shubham             // This is how we pass the object to function
                          // *** IMP *** During object passing we have to check typesafety we have to put exact spelling of keys from objects           


passuser({
    id:2,
    name:"radha"             // We can directly pass the object also without taking into variable or anything 
})                          

                                              // How to Pass ARRAY in Functions


let myArray = [100,200,300,400,500]

function passArray(anyarray) {


// return console.log(anyarray);           // we retrun all array elements here 
return console.log(anyarray[2])            // here we are returning the 2th index position element from array 


}
passArray(myArray)                              