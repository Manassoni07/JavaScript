// write a program to print marks of a student using for loop and for in loop 

let obj = {
    manas : 99, naman : 81, dhruv : 97, sahu : 69, swastik : 54, yash : 100
}

console.log("Using for loop with Object.keys:");
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${obj[keys[i]]}`);
}

console.log("\nUsing for...in loop:");
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}