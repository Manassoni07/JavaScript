// async await >> Promise chains >> callback hell

// A callback is just a function that you give to another function to run later.

function orderPizza(callback) {
    console.log("Making your pizza...");
    setTimeout(() => {
        console.log("Pizza is ready!");
        callback(); // run the function when pizza is ready
    }, 2000); // 2 seconds delay
}

function eatPizza() {
    console.log("Yum! Eating pizza now.");
}

orderPizza(eatPizza);
