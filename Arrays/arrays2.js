const marvelHeros = ["IronMan","SpiderMan","BlackWidow","HawkEye"]

const dcHeros = [ 'SuperMan', 'BatMan', 'Flash', 'Joker' ]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);    // The push() method is not suitable for merging arrays when you want to combine the elements of one array with the elements of another array individually. This is because the push() method adds the entire array as a single element to the target array, rather than merging the individual elements.

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);     

//  The concat() method in JavaScript is used to combine two or more arrays, creating a new array without modifying the existing arrays. It returns a new array that is a result of concatenating the arrays provided as arguments. Unlike the push() method, concat() merges individual elements rather than adding entire arrays as single elements.

const a1 = [1,[2,3],4,5,[6,7,[8,9]]] 

const a = a1.flat(Infinity)

console.log(a);    // The flat() method in JavaScript is used to flatten a nested array by a specified depth. It returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log((Array.isArray("SHUBHAM")));  // Output  =>  false   Because It's not array .isArray() method in JavaScript. The Array.isArray() method is a built-in method that is used to check whether an object is an array or not. It returns true if the object is an array and false otherwise.

console.log((Array.from("SHUBHAM")));   // Output => ['S', 'H', 'U', 'B', 'H', 'A', 'M']   Array.from() makes non-arrays look and behave like arrays in JavaScript. It's a quick way to convert iterable or array-like objects into actual arrays.

// Spread Operator   (...)  for Example  (...ArrayName)

// The spread operator (...) in JavaScript is a concise syntax for expanding elements of an iterable (like an array) or object. It is used in various contexts, including array literals, function arguments, and object literals, to easily copy, merge, or create new arrays or objects.

const abc = ["Jethalal","Tappu","Champaklaal"]
const xyz = ["Dayaben","Sundar"]

console.log(...abc,...xyz);

// If we want all of them in array

const arr = [...abc,...xyz] 
console.log(arr);     

console.log(Array.from({name : "Shubham"}));      // Will Know deeper in further studies 

let score1 = 100
let score2 = 200
let score3 =300
let score4 =400


console.log(Array.of(score1,score2,score3,score4));   // Output =>  [ 100, 200, 300, 400 ]

// The Array.of() method in JavaScript creates a new array with the provided arguments as its elements.
