try {
    // Code that may cause an error
    let a = 10;
    let b = a + c; // c is not defined
    console.log(b);
} catch (error) {
    // Handle the error here
    console.log("Something went wrong:", error.message);
}
