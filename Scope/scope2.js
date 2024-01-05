// Second Part of Scope

function one() {

    let userName = "Shubham"

    function two() {

        let userMail = "shubham@google.com"
        console.log(userName);   // Here we can access the username values becasue of function One is parent of Function Two becuase Function Two is Insing the scope of Function One
    }

    two();
  //  console.log(userMail); // ReferenceError: userMail is not defined  // Look we can not access the varible of Function Two from Function One 
                          // Simple RealLife Example Child can have parents icecream but Parent can not have child icecream . XD 
                          // That's how the child function can have all the varibles of function One but Function One cannot access the variable of Function Two 
}                                       
one();



//*************************** NOW WILL SEE HOW WE CAN WRITE FUNCTION IN TWO TYPES***************************************//


 
typeOne(5)        // Look Where we call Function           // we can call before even accssing the values 
function typeOne(num) {                                            // Here's a first type
    
    return console.log( num + 1);                                                         
}


// If we do this what we did in function typeOne It will not work because we declear a variable as function 
let typeTwo = function(num) {                                       // Here's a another type      

    return console.log(num + 2); 
}
typeTwo(5)                                   // we have to log it after accessing the values