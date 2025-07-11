const main = document.querySelector(".main");
const cusr = document.querySelector(".c");

main.addEventListener("mousemove",(e)=>{
    cusr.style.left = e.x+ "px";
    cusr.style.top = e.y+ "px";
})