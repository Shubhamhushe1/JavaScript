// FUNCTIONS 
// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

// function sayMyName(){                              // sayMyName is Reference variable of Function 

// console.log("S");
// console.log("H");
// console.log("U");
// console.log("B");
// console.log("H");
// console.log("A");
// console.log("M");

// }

// sayMyName                                           //  This is reference  
// sayMyName()                                         // This is how we call a funcion using () after referance variable of function      // The () Operator : The () operator invokes (calls) the function

//Basic Parameter Pass Function
function parameterPass(a,b){                           // a and b are the parameter of the functions we can perform operation on parameters
 // console.log(a+b);                                             
}
parameterPass(3,7)                                    // Output => 10 

// Basic Predefined Parameted Passed in Function
function parameterPass1 (a=4,b=5){

 //   console.log(a+b);                               // Just basic console print which don't pass any return value to function
      return result = a+b                             // when we console that does not mean it will give us return value . If we want our function give us return value the we have to use return keyword for return a value
    
      console.log("Shubham");                         // After we return to function something rest command will be not consided to be executed or after return rest code will not be look forword to execution for functions
                                                      // Once we return to function, the function stop doing its working and the rest commands is worthless for execution
    //     let result=a+b                             // we can write code like this too in function
//     return result                                  //  return that result variable to function 

}
parameterPass1()
// console.log(result);                                  // we use return keyword for returning a value from function 

function logInUserMessage(username){


return `${username} Just Logged In`                 // String Interpolation 

}
          
// logInUserMessage("Shubham")    // It's blank right now so no output but function is executed , Value return toh milgya but aagye kya we do not say to print the value
// console.log(logInUserMessage("Shubham"));  // That how we print the values by taking parameters 


function logInUserMessage1(username){
    if(!username){                                            // (!) we use this as a not equals to sign  // we can use like this too (username === undefined). Undefined means value is not defined yet  
        return console.log("Enter a Username");         // In JavaScript ("") empty string and Undefined value considerd to be false value 
    }
    return `${username} Just Logged In`                 // String Interpolation 

    }
// logInUserMessage1()                                  // Output => Enter a Username //  Because we did not pass any value to function 
// console.log(logInUserMessage1("ShreeRam"))


function logInUserMessage3(username="Krishna"){        // here we predifined the username   // now atleat we can get minimum value "Krishna" if we do not pass any value 


    return `${username} Just Logged In`                 // String Interpolation 
    
    }

console.log(logInUserMessage3());                       // User name is predefined we do not have pass any value from here 
console.log(logInUserMessage3("Radha"));                // If we pass the value then it will override the predefined value from parameter 