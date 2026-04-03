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
textarea {
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  padding: 6px;
}
`;
document.head.appendChild(style);

/* PANEL */
const panel = document.createElement("div");
panel.className = "dijo-panel";
panel.style.display = "none";

let savedCV = localStorage.getItem("dijo_cv") || "";

panel.innerHTML = `
  <div>🤖 Hi, I’m Dijo</div>
  <div id="status" style="margin-top:8px;">Paste your CV once</div>

  <textarea id="cvInput" rows="4">${savedCV}</textarea>

  <button id="saveCV" class="dijo-btn">Save CV</button>
  <button id="scanBtn" class="dijo-btn">Scan this job</button>

  <div id="debug" style="margin-top:10px; font-size:12px; color:#aaa;"></div>
`;

/* TOGGLE */
bot.addEventListener("click", () => {
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

/* ✅ CLEAN JOB EXTRACTION */
function getJobText() {
  const selectors = [
    "[data-testid='jobsearch-jobDescriptionText']",
    "#jobDescriptionText",
    ".jobsearch-jobDescriptionText"
  ];

  for (let sel of selectors) {
    const el = document.querySelector(sel);
    if (el && el.innerText.length > 200) {
      return el.innerText.substring(0, 2000);
    }
  }

  return document.body.innerText.substring(0, 2000);
}

/* BUTTONS */
panel.addEventListener("click", async (e) => {
  const status = document.getElementById("status");
  const debug = document.getElementById("debug");

  if (e.target.id === "saveCV") {
    const cvText = document.getElementById("cvInput").value;

    localStorage.setItem("dijo_cv", cvText);
    status.innerText = "CV saved ✅";
  }

  if (e.target.id === "scanBtn") {
    const cvText = localStorage.getItem("dijo_cv");

    if (!cvText) {
      status.innerText = "No CV saved";
      return;
    }

    status.innerText = "Scanning...";

    const jobText = getJobText();

    debug.innerText = `CV length: ${cvText.length}`;

    try {
      const res = await fetch("https://impactgrid-dijo-api.onrender.com/ai/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cv_text: cvText,
          job_description: jobText
        })
      });

      const data = await res.json();

      status.innerText = `Match: ${data.score}%`;
      debug.innerText += ` | Reason: ${data.reason}`;

    } catch (err) {
      status.innerText = "Error";
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
