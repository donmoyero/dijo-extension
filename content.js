const bot = document.createElement("div");
bot.innerHTML = `<img src="${chrome.runtime.getURL("dijo.png")}" style="width:80px;">`;
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
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.dijo-panel {
  position: fixed;
  bottom: 110px;
  right: 20px;
  width: 280px;
  background: #111;
  color: white;
  padding: 15px;
  border-radius: 12px;
  font-size: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  z-index: 999999;
  font-family: sans-serif;
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
  font-size: 14px;
}
.dijo-btn:hover {
  background: #1d4ed8;
}
textarea {
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  padding: 6px;
  box-sizing: border-box;
  font-size: 12px;
}
.dijo-score {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 8px 0;
}
.dijo-reason {
  font-size: 12px;
  color: #ccc;
  margin-bottom: 6px;
  line-height: 1.4;
}
.dijo-skills-section {
  margin-top: 8px;
  font-size: 12px;
}
.dijo-skills-label {
  font-weight: bold;
  margin-top: 6px;
  margin-bottom: 2px;
}
.dijo-chip {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 20px;
  margin: 2px 2px;
  font-size: 11px;
}
.dijo-chip.match  { background: #166534; color: #bbf7d0; }
.dijo-chip.miss   { background: #7f1d1d; color: #fecaca; }
`;
document.head.appendChild(style);

/* PANEL */
const panel = document.createElement("div");
panel.className = "dijo-panel";
panel.style.display = "none";

let savedCV = localStorage.getItem("dijo_cv") || "";

panel.innerHTML = `
  <div>🤖 Hi, I'm Dijo</div>
  <div id="status" style="margin-top:8px; color:#aaa;">Paste your CV once, then scan any job.</div>

  <textarea id="cvInput" rows="4" placeholder="Paste your CV here...">${savedCV}</textarea>

  <button id="saveCV" class="dijo-btn">💾 Save CV</button>
  <button id="scanBtn" class="dijo-btn">🔍 Scan this job</button>

  <div id="results" style="display:none; margin-top:12px;">
    <div class="dijo-score" id="scoreDisplay"></div>
    <div class="dijo-reason" id="reasonDisplay"></div>
    <div class="dijo-reason" id="summaryDisplay"></div>
    <div class="dijo-skills-section">
      <div class="dijo-skills-label" id="matchedLabel" style="color:#4ade80;"></div>
      <div id="matchedSkills"></div>
      <div class="dijo-skills-label" id="missingLabel" style="color:#f87171; margin-top:6px;"></div>
      <div id="missingSkills"></div>
    </div>
  </div>

  <div id="debug" style="margin-top:10px; font-size:11px; color:#555;"></div>
`;

/* TOGGLE */
bot.addEventListener("click", () => {
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

/* JOB TEXT EXTRACTION */
function getJobText() {
  let text = "";

  const title = document.querySelector("h1");
  if (title) text += "TITLE: " + title.innerText + "\n\n";

  const company =
    document.querySelector("[data-testid='inlineHeader-companyName']") ||
    document.querySelector(".jobsearch-CompanyInfoContainer");
  if (company) text += "COMPANY: " + company.innerText + "\n\n";

  const descSelectors = [
    "[data-testid='jobsearch-jobDescriptionText']",
    "#jobDescriptionText",
    ".jobsearch-jobDescriptionText",
    ".job-description",
    "[class*='description']",
    "[class*='jobDescription']"
  ];

  for (let sel of descSelectors) {
    const el = document.querySelector(sel);
    if (el && el.innerText.length > 200) {
      text += "DESCRIPTION:\n" + el.innerText;
      break;
    }
  }

  if (text.length < 200) {
    text = document.body.innerText;
  }

  return text.substring(0, 2500);
}

/* SCORE COLOUR */
function scoreColour(score) {
  if (score >= 75) return "#4ade80"; // green
  if (score >= 55) return "#facc15"; // yellow
  return "#f87171";                  // red
}

/* BUTTON HANDLERS */
panel.addEventListener("click", async (e) => {
  const status       = document.getElementById("status");
  const debug        = document.getElementById("debug");
  const results      = document.getElementById("results");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const reasonDisplay= document.getElementById("reasonDisplay");
  const summaryDisplay=document.getElementById("summaryDisplay");
  const matchedSkills= document.getElementById("matchedSkills");
  const missingSkills= document.getElementById("missingSkills");
  const matchedLabel = document.getElementById("matchedLabel");
  const missingLabel = document.getElementById("missingLabel");

  /* SAVE CV */
  if (e.target.id === "saveCV") {
    const cvText = document.getElementById("cvInput").value.trim();
    if (!cvText) {
      status.innerText = "⚠️ CV is empty — paste your CV first.";
      return;
    }
    localStorage.setItem("dijo_cv", cvText);
    status.innerText = "✅ CV saved! Now open any job and click Scan.";
  }

  /* SCAN JOB */
  if (e.target.id === "scanBtn") {
    const cvText = localStorage.getItem("dijo_cv");

    if (!cvText) {
      status.innerText = "⚠️ No CV saved. Paste your CV and click Save CV first.";
      return;
    }

    status.innerText = "⏳ Scanning job...";
    results.style.display = "none";
    debug.innerText = "";

    const jobText = getJobText();
    debug.innerText = `CV: ${cvText.length} chars | Job: ${jobText.length} chars`;

    try {
      const res = await fetch("https://impactgrid-dijo-api.onrender.com/ai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cv_text: cvText,
          job_description: jobText
        })
      });

      const data = await res.json();

      /* DISPLAY SCORE */
      const score = data.score ?? 0;
      scoreDisplay.innerText = `${score}% Match`;
      scoreDisplay.style.color = scoreColour(score);

      reasonDisplay.innerText  = data.reason  || "";
      summaryDisplay.innerText = data.summary || "";

      /* MATCHED SKILLS */
      if (data.matched_skills && data.matched_skills.length > 0) {
        matchedLabel.innerText = "✅ You have:";
        matchedSkills.innerHTML = data.matched_skills
          .map(s => `<span class="dijo-chip match">${s}</span>`)
          .join("");
      } else {
        matchedLabel.innerText = "";
        matchedSkills.innerHTML = "";
      }

      /* MISSING SKILLS */
      if (data.missing_skills && data.missing_skills.length > 0) {
        missingLabel.innerText = "❌ You're missing:";
        missingSkills.innerHTML = data.missing_skills
          .map(s => `<span class="dijo-chip miss">${s}</span>`)
          .join("");
      } else {
        missingLabel.innerText = "";
        missingSkills.innerHTML = "";
      }

      status.innerText = "Scan complete";
      results.style.display = "block";

    } catch (err) {
      status.innerText = "❌ Error connecting to Dijo API.";
      debug.innerText += ` | Error: ${err.message}`;
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
    bot.style.left   = `${e.clientX - offsetX}px`;
    bot.style.top    = `${e.clientY - offsetY}px`;
    bot.style.bottom = "auto";
    bot.style.right  = "auto";

    panel.style.left   = bot.style.left;
    panel.style.top    = `${e.clientY - offsetY - 120}px`;
    panel.style.bottom = "auto";
    panel.style.right  = "auto";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.body.appendChild(bot);
document.body.appendChild(panel);
