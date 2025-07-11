const a = document.querySelector(".container");
const love = document.querySelector("i");

a.addEventListener("dblclick", () => {
  // Trigger animation
  love.style.transform = "translate(-50%, -50%) scale(1.5)";
  love.style.opacity = 0.8;
    setTimeout(() => {
    love.style.opacity = 0;
  }, 500);

  // Reset after a short delay
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
