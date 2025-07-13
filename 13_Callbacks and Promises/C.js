
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous task.
// States of a Promise:

//     Pending: Initial state

//     Resolved: Task completed successfully

//     Rejected: Task failed
let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Task completed!");
    } else {
        reject("Task failed.");
    }
});

promise
    .then(result => console.log(result)) // if resolved
    .catch(error => console.log(error)); // if rejected
