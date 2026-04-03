const bot = document.createElement("div");

bot.innerHTML = `
  <img src="${chrome.runtime.getURL("dijo.png")}" style="width:80px;">
`;

bot.style.position = "fixed";
bot.style.bottom = "20px";
bot.style.right = "20px";
bot.style.zIndex = "999999";
bot.style.cursor = "grab";

/* FLOAT ANIMATION */
bot.style.animation = "float 3s ease-in-out infinite";

/* ADD STYLE */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
`;
document.head.appendChild(style);

/* DRAG FUNCTION */
let isDragging = false;
let offsetX, offsetY;

bot.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - bot.getBoundingClientRect().left;
  offsetY = e.clientY - bot.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    bot.style.left = `${e.clientX - offsetX}px`;
    bot.style.top = `${e.clientY - offsetY}px`;
    bot.style.bottom = "auto";
    bot.style.right = "auto";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.body.appendChild(bot);
