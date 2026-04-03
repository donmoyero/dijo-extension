const bot = document.createElement("div");

bot.innerHTML = `
  <img src="${chrome.runtime.getURL("dijo.png")}" style="width:80px;">
`;

bot.style.position = "fixed";
bot.style.bottom = "20px";
bot.style.right = "20px";
bot.style.zIndex = "999999";
bot.style.cursor = "grab";
bot.style.animation = "float 3s ease-in-out infinite";

/* FLOAT ANIMATION */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.dijo-panel {
  position: fixed;
  bottom: 110px;
  right: 20px;
  width: 260px;
  background: #111;
  color: white;
  padding: 15px;
  border-radius: 12px;
  font-size: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  z-index: 999999;
}
.dijo-btn {
  margin-top: 10px;
  padding: 8px;
  background: #2563eb;
  border: none;
  color: white;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}
`;
document.head.appendChild(style);

/* PANEL */
const panel = document.createElement("div");
panel.className = "dijo-panel";
panel.style.display = "none";
panel.innerHTML = `
  <div>🤖 Hi, I’m Dijo</div>
  <div style="margin-top:8px;">Ready to help you apply</div>
  <button class="dijo-btn">Scan this job</button>
`;

/* TOGGLE PANEL */
bot.addEventListener("click", () => {
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

/* DRAG */
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

    panel.style.left = bot.style.left;
    panel.style.top = `${e.clientY - offsetY - 110}px`;
    panel.style.bottom = "auto";
    panel.style.right = "auto";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.body.appendChild(bot);
document.body.appendChild(panel);
