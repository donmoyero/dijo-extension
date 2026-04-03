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

/* STYLE */
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
  <div id="status" style="margin-top:8px;">Ready to scan this job</div>
  <button id="scanBtn" class="dijo-btn">Scan this job</button>
`;

/* TOGGLE */
bot.addEventListener("click", () => {
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

/* SCAN BUTTON */
panel.addEventListener("click", async (e) => {
  if (e.target.id === "scanBtn") {
    const status = document.getElementById("status");
    status.innerText = "Scanning job...";

    const pageText = document.body.innerText.substring(0, 3000);

    try {
      const res = await fetch("https://impactgrid-dijo-api.onrender.com/ai/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cv_text: "I am a customer service assistant with experience in retail and communication skills", // TEMP CV
          job_description: pageText
        })
      });

      const data = await res.json();

      status.innerText = `Match: ${data.score}%`;

    } catch (err) {
      status.innerText = "Error scanning job";
    }
  }
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
