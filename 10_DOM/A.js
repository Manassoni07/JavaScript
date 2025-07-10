// Common DOM Manipulation Tasks

//1. Accessing Elements

// By ID
let title = document.getElementById("title");

// By class
let items = document.getElementsByClassName("item");

// By tag name
let paras = document.getElementsByTagName("p");

// Modern way (CSS selectors)
let firstItem = document.querySelector(".item"); // first match
let allItems = document.querySelectorAll(".item"); // NodeList of all matches


//2. changing content 

title.innerText = "New line ";
title.innerHTML = "<span>hello world</span>";

//3. Changing styles

title.style.color = "red";
title.style.fontSize = "24px";
//etc......

//4. changing attributes
let img = document.querySelector("img");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "New Image");

//5.Adding and removing class
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("active");

//6.creating and appending elements
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph";
document.body.appendChild(newPara);

//7.removing 
newPara.remove(); // Removes the element

//8.event listeners
let btn = document.getElementById("clickBtn");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});


