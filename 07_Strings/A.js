// strings are used to store and manupilate the text 


let name = "manas";
let str1 = "Hello";       // double quotes
let str2 = 'World';       // single quotes
let str3 = `Hello World`; // backticks (template literals)


// template litrals
console.log(`name of string is ${name} and its length is ${name.length}`); // by this way we use variables in strings

/* methods */

//Checks if a substring exists in the string.
let str = "JavaScript";
console.log(str.includes("Script")); // true

// Returns the position (index) of a substring. Returns -1 if not found.
str = "banana";
console.log(str.indexOf("a"));      // 1
console.log(str.lastIndexOf("a"));  // 5

// Extracts a part of the string.
str = "Hello World";
console.log(str.slice(0, 5));  // "Hello"


console.log(str.substring(6, 11));  // "World"


str = "I like cats";
console.log(str.replace("cats", "dogs")); // "I like dogs"


str = "   hello world   ";
console.log(str.trim()); // "hello world"


str = "apple,banana,grape";
console.log(str.split(",")); // ["apple", "banana", "grape"]
