// we use loops to perform repeated tasks 
// Types of loops in Javascript are as follow -
/*   
1. for loop -> loops throw a block of code no of time
2. for in loop -> loop throw keys of an object 
3. for of loop -> loop throw the value of an object 
4. while loop  -> this is condition based loop
5. do while loop -> it runs atleast one time 

*/

const person = { name: "Manas", age: 18 };

    for (const key in person) {
      console.log(`${key}: ${person[key]}`); // hold this syntax
    }

const colors = ["red", "green", "blue"]; // this is array

    for (const color of colors) {
      console.log(color);
    }

// other loops are familier to us