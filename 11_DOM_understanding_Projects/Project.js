const btn = document.querySelector(".btn"); // we select button using query selector 
// we can also do this by other selectors its your choise
const a = document.querySelector(".model"); // we select h2 here by its classs name 

let isclick = false; // we set a check

//this is event listener 
// when we click on button this function will run 
// first arrgument is event and second is function 

btn.addEventListener("click", () => {

    if (isclick == false) {
        a.innerHTML = "Friend";// this change inner html
        a.style.color = "green";// this change style 
        btn.innerHTML = "Remove";
        isclick = true; // check updated
    }
    else {
        a.innerHTML = "Stranger";
        a.style.color = "red";
        btn.innerHTML = "Add Friend";
        isclick = false;
    }
})