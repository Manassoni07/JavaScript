const b = document.querySelector(".btn");
const m = document.querySelector(".bulb");

// logic 
let flag = 0;

b.addEventListener("click", () => {
    if (flag == 0) {
        m.style.backgroundColor = "yellow";
        b.innerHTML = "on";
        flag = 1;
    }
    else {
        m.style.backgroundColor = "transparent";
        b.innerHTML = "off";
        flag = 0;
    }
})