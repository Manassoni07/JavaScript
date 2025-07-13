// It’s a way to write asynchronous code that looks like normal code — no .then(), no .catch() mess.
// It works with Promises, but is easier to read and write.

function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pizza is ready!");
        }, 2000);
    });
}

//  Using async/await
async function eatPizza() {
    console.log("Ordering pizza...");
    
    let result = await orderPizza(); // wait until pizza is ready

    console.log(result); // "Pizza is ready!"
    console.log("Yum! Eating pizza now.");
}

eatPizza();
