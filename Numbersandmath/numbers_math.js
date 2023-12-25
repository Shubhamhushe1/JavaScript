// Numbers and Maths

const score =100   // Basic way of assinging Number to variable

const anotherScore = new Number(100)   // By creating object of Number we Strcitly assing Number to variable

console.log(score);           // Outuput => 100

console.log(anotherScore);   // Output =>  [Number: 100]    after creating object for strictly we got out Number value in this format


// Some Important Existing Methods for Numbers

const num = 100.121
const anotherNum = 100

console.log("Using toString Method : "+num.toString().length);   // Output =>  7  Because using toString() we convert that Number into string and with the existing [.lenght()] method we calculate the lenght of that number

console.log("Using toFixed Method :" + anotherNum.toFixed(2));   // Output =>  100.00  Because using toFixed() to get precise number in the mehtod we put(2) for how much precise value we want.    

const otherNumber = 69.3964 
console.log("Using toPrecision Method : "+otherNumber.toPrecision(3)); // Output => 69.4 Because we get Precision value using [toPrecision()] but we have to give how much precision we want so we write like toPrecision(3) so we go 3 nos. of precision 
                                                                        // toPrecision method returns the String not the Number keep that in mind 

console.log("Using toPrecision Method : "+otherNumber.toPrecision(3).length); //(Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits)
                                                                        
const money = 100000000 


console.log("Using toLocaleString Method "+money.toLocaleString());   // Output => 100,000,000  we got the value in U.S money format 
console.log("Using toLocaleString Method "+money.toLocaleString('en-In'));   // Output => 10,00,00,000 we got the value in Indian money format 


// ******************************************MATHS******************************************//

// Maths :  It is a Library comes by default in JavaScript.So we can perform mathematical operations easily.


console.log(Math.abs(-6));     // Output => 6 [.abs()] Method gives absolute value like If we have negative value it  will convert into positive but we cant turn positive value into negative 

console.log(Math.round(5.1));   // Output => 5 [.round()] Method we use for roundoff the value to get value without decimal 

// If value is less than .5 the will get lower value and else we get higher value 

console.log(Math.round(4.9));   // Output => 5 [.round()] Method we use for roundoff the value to get value without decimal 

console.log(Math.ceil(4.4));   // Output => 5 [.ceil()] Method we use for always greater value we get  [Highest Value]  //  To Round off to Higher Value 
console.log(Math.floor(4.9));   // Output => 4 [.floor()] Method we use for always lesser value we get [Lowest Value]  //   To Round off to Lower Value 

console.log(Math.min(40,50,60,20,10));  // Output => 10 [.min()] Method we use for get the min value from the array 
console.log(Math.max(40,50,60,20,10));  // Output => 60 [.max()] Method we use for get the max value from the array 




// Math.random() method 
 
console.log(Math.random());     // Output => (random value) 0.12345679  We get random value between 0 to 1 using [.random()] method.

// what if we want the min value atleast 1 the will add +1 in to the method =>

console.log((Math.random()*10)+1);   // Output => (random value) 1.xyzz  We get random value between 0 to 1 using [.random()] method.

console.log(Math.floor(Math.random() * 10) + 1);

const minValue =10
const maxValue =20

console.log(Math.floor(Math.random() * (maxValue - minValue+1) ) +minValue);  // OutPut => We will get output between minValue to maxValue we use [.floor()] to get lower value without decimal in it




