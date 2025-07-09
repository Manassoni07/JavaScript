// syntax

/* function Myfunc(){
    code...
}

*/

function sum(a,b){
    return a + b;
}

let y = sum(1,2);
console.log(y);

// another way

let Sum = (a,b) =>{
    return a + b;
}
let c = Sum(1,1);
console.log(c);

// for future
/*
| Feature        | Arrow Function (`=>`)           | Function Declaration        |
| -------------- | ------------------------------- | ----------------------------|
| Syntax         | Compact                         | Verbose                     |
| `this` binding | Lexical (inherits from scope)   | Dynamic (depends on caller) |
| Hoisting       | ❌ Not hoisted                  | ✅ Hoisted                  |
| `new` usage    | ❌ Cannot be used as constructor| ✅ Can be used              |
| Use case       | Callbacks, inline functions     | General purpose             |
*/
