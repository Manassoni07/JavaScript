// variables in javascript is just like container in real life variables stores values in it 
// $ sign and _ sign are allowed to create varianble is js 
// naming is case sensitive 

// Data types are just term to show type of data which we used in our js file 
// there are 7 primitive data types in javascript 
/* 
   1. numbers 
   2. strings 
   3. boolean
   4. undefined
   5. null
   6. biglnt
*/

//  code for understanding \
// we understand this with the help of run tinme environment of javascript that is nodejs 

// or we can also use browser to run this with help of devlopers tool 
// for that we have to include script in html

console.log("Variables in Javascript "); 

var a = 100; // var is used for declaring global variables in js
var b = "manas";// string


let var1 = true; // let is used to declare local variable in js
let var2 = 'hello';


const x = 500; // constant varibles 
const y = 1000;

console.log(a,b);

console.log(typeof(a),typeof(b));


// Object in javascrip is same as map in c++ and dictnary in python 

// syntax to create objects in javascript

const item = {
    name : "Laptop : Ideapadslim 3",
    price : 300000
};

console.log(item); // ; can we removed in js 
