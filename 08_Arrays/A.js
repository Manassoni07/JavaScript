// array is just a variable which stores multiple data in it 
// creation 

let arr = [1,3.09,"manas",true,null];

console.log(arr)

//  acessing element 
console.log(arr[3]);

arr[0] = 5;// that is array are mutable in nature 
console.log(arr[0]);// 5 

console.log(arr);

console.log("type of array is",typeof(arr));

// fact 
console.log("type of null is",typeof(null));// object
console.log(null instanceof Object); // false


//object why ? it is primitive datatype 
// ans is This is actually a bug in JavaScript that has existed since the first version of the language (1995). Here's what happened:

//     In the original JavaScript implementation, values were stored using type tags.
//     The type tag for object was 0.
//     The special value null was represented as a null pointer, which was also internally 0.
//     So when the engine checked typeof null, it saw 0 and assumed it was an object.

