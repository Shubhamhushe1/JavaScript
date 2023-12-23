// Basic Comparison

console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2==2);
console.log(2>=1);
console.log(2<=1);

//Datatype Comparison
console.log("Datatype Comparison");
console.log("2">1);  // here the compiler automatically covert the String into Number
console.log(2>"1");
console.log("2"==1); 

// Strict Comparison using "==="
console.log("Strict Comparison using  === ");
console.log("2" === 1); // SO after using strict comparison the compiler will strictly check the datatypes of the variables

// Not to do comparisons because of broken syntax or lang. issues
console.log("Not to do comparisons");
console.log(null>0); 
console.log(null<0);
console.log(null>=0);
console.log(null<=0);
console.log(null==0);
console.log(null===0);
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);
console.log(undefined==0);
console.log(undefined===0); 

// Avoid these kind of comparisons 

