/* ============================================================
   DIJO — Live Mascot + Job Assistant
   ImpactGridGroup | impactgridgroup.com
   ============================================================ */

/* ── SVG DIJO (exact mascot likeness) ─────────────────────── */
const DIJO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 200" width="90" height="150" id="dijo-svg" style="display:block;overflow:visible;cursor:grab;">
  <defs>
    <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#60c8ff" stop-opacity="1"/>
      <stop offset="60%" stop-color="#1a7fff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#003fa3" stop-opacity="0.4"/>
    </radialGradient>
    <radialGradient id="antennaGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#80dfff"/>
      <stop offset="100%" stop-color="#0080ff"/>
    </radialGradient>
    <filter id="blueBloom" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- LEGS -->
  <g id="legs">
    <rect x="36" y="148" width="18" height="28" rx="6" fill="#1a1a2e"/>
    <rect x="66" y="148" width="18" height="28" rx="6" fill="#1a1a2e"/>
    <!-- shoes -->
    <ellipse cx="45" cy="177" rx="13" ry="7" fill="#e8e8f0"/>
    <ellipse cx="75" cy="177" rx="13" ry="7" fill="#e8e8f0"/>
  </g>

  <!-- ARMS -->
  <g id="arm-left">
    <rect x="10" y="92" width="16" height="38" rx="8" fill="#d0d0e8"/>
    <ellipse cx="18" cy="132" rx="9" ry="9" fill="#1a1a2e"/>
    <!-- ear light -->
    <ellipse cx="12" cy="100" rx="6" ry="10" fill="#1a1a2e"/>
    <ellipse cx="12" cy="100" rx="4" ry="7" fill="#0060cc"/>
    <ellipse cx="12" cy="100" rx="2" ry="4" fill="#40b0ff" opacity="0.8"/>
  </g>
  <g id="arm-right">
    <rect x="94" y="92" width="16" height="38" rx="8" fill="#d0d0e8"/>
    <ellipse cx="102" cy="132" rx="9" ry="9" fill="#1a1a2e"/>
    <!-- ear light -->
    <ellipse cx="108" cy="100" rx="6" ry="10" fill="#1a1a2e"/>
    <ellipse cx="108" cy="100" rx="4" ry="7" fill="#0060cc"/>
    <ellipse cx="108" cy="100" rx="2" ry="4" fill="#40b0ff" opacity="0.8"/>
  </g>

  <!-- BODY -->
  <rect x="24" y="88" width="72" height="68" rx="14" fill="#e8e8f4"/>
  <!-- belt -->
  <rect x="24" y="138" width="72" height="12" rx="4" fill="#1a1a2e"/>
  <rect x="52" y="138" width="16" height="12" rx="3" fill="#444"/>
  <rect x="57" y="140" width="6" height="8" rx="1" fill="#888"/>

  <!-- SHIRT COLLAR -->
  <polygon points="52,88 60,102 68,88" fill="white"/>
  <polygon points="52,88 48,102 60,102" fill="#ddd"/>
  <polygon points="68,88 72,102 60,102" fill="#ddd"/>

  <!-- TIE -->
  <polygon points="57,100 63,100 65,132 60,136 55,132" fill="#1a4fd6"/>
  <polygon points="57,100 60,108 63,100" fill="#0f3ab5"/>
  <!-- tie knot -->
  <rect x="57" y="97" width="6" height="7" rx="2" fill="#2255e0"/>

  <!-- CHEST TEXT -->
  <text x="60" y="120" font-family="Arial,sans-serif" font-size="9" font-weight="bold" fill="#1a4fd6" text-anchor="middle">Dijo</text>
  <text x="60" y="131" font-family="Arial,sans-serif" font-size="5.5" fill="#16a34a" text-anchor="middle">ImpactGridGroup</text>

  <!-- HEAD -->
  <ellipse cx="60" cy="58" rx="38" ry="40" fill="#e8e8f4"/>
  <!-- head sheen -->
  <ellipse cx="48" cy="36" rx="12" ry="8" fill="white" opacity="0.25" transform="rotate(-20,48,36)"/>

  <!-- VISOR (black face screen) -->
  <rect x="22" y="40" width="76" height="42" rx="18" fill="#0a0a14"/>
  <!-- visor inner rim -->
  <rect x="24" y="42" width="72" height="38" rx="16" fill="none" stroke="#333" stroke-width="1"/>

  <!-- LEFT EYE -->
  <g id="eye-left" filter="url(#blueBloom)">
    <circle cx="42" cy="61" r="15" fill="#050510"/>
    <!-- iris rings -->
    <circle cx="42" cy="61" r="13" fill="none" stroke="#0044bb" stroke-width="1" opacity="0.6"/>
    <circle cx="42" cy="61" r="10" fill="none" stroke="#0066dd" stroke-width="1.5" opacity="0.7"/>
    <circle cx="42" cy="61" r="7" fill="url(#eyeGlow)"/>
    <!-- pupil -->
    <circle cx="42" cy="61" r="4" fill="#001a66"/>
    <!-- highlight -->
    <circle cx="45" cy="57" r="2.5" fill="white" opacity="0.9"/>
    <circle cx="39" cy="65" r="1.2" fill="white" opacity="0.5"/>
    <!-- eyelid (animated) -->
    <rect id="lid-left" x="27" y="46" width="30" height="0" rx="4" fill="#0a0a14"/>
  </g>

  <!-- RIGHT EYE -->
  <g id="eye-right" filter="url(#blueBloom)">
    <circle cx="78" cy="61" r="15" fill="#050510"/>
    <circle cx="78" cy="61" r="13" fill="none" stroke="#0044bb" stroke-width="1" opacity="0.6"/>
    <circle cx="78" cy="61" r="10" fill="none" stroke="#0066dd" stroke-width="1.5" opacity="0.7"/>
    <circle cx="78" cy="61" r="7" fill="url(#eyeGlow)"/>
    <circle cx="78" cy="61" r="4" fill="#001a66"/>
    <circle cx="81" cy="57" r="2.5" fill="white" opacity="0.9"/>
    <circle cx="75" cy="65" r="1.2" fill="white" opacity="0.5"/>
    <rect id="lid-right" x="63" y="46" width="30" height="0" rx="4" fill="#0a0a14"/>
  </g>

  <!-- SMILE -->
  <path id="dijo-mouth" d="M 50 74 Q 60 80 70 74" stroke="#4488ff" stroke-width="2" fill="none" stroke-linecap="round"/>

  <!-- ANTENNA STEM -->
  <rect x="57" y="16" width="6" height="24" rx="3" fill="#1a1a2e"/>
  <!-- ANTENNA DOME -->
  <circle cx="60" cy="14" r="9" fill="url(#antennaGlow)" filter="url(#blueBloom)"/>
  <circle cx="60" cy="14" r="6" fill="#60d0ff"/>
  <circle cx="57" cy="11" r="2" fill="white" opacity="0.7"/>
</svg>`;

/* ── SPEECH BUBBLE MESSAGES ────────────────────────────────── */
const MESSAGES = [
  "Hi! I'm Dijo 👋",
  "Paste your CV and I'll scan jobs!",
  "72% match — not bad! 🎯",
  "I'll tailor your CV for you ✨",
  "Found 3 missing skills 🔍",
  "Your cover letter is ready! ✉️",
  "Click me to open my panel!",
  "Let's land that job! 🚀",
];

/* ── STYLES ────────────────────────────────────────────────── */
const style = document.createElement("style");
style.innerHTML = `
  #dijo-bot {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 2147483640;
    user-select: none;
    transition: filter 0.2s;
  }
  #dijo-bot:hover { filter: brightness(1.1); }

  #dijo-bubble {
    position: fixed;
    background: white;
    color: #0d1b2e;
    font-family: sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 18px 18px 4px 18px;
    box-shadow: 0 4px 20px rgba(0,80,255,0.18);
    white-space: nowrap;
    z-index: 2147483641;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.25s, transform 0.25s;
    border: 1.5px solid #dbeafe;
  }
  #dijo-bubble.show {
    opacity: 1;
    transform: scale(1);
  }

  /* ── PANEL ── */
  .dijo-panel {
    position: fixed;
    bottom: 190px;
    right: 24px;
    width: 310px;
    background: #0f1117;
    color: white;
    padding: 16px;
    border-radius: 16px;
    font-size: 14px;
    box-shadow: 0 12px 40px rgba(0,80,255,0.25), 0 0 0 1px rgba(255,255,255,0.06);
    z-index: 2147483639;
    font-family: sans-serif;
    max-height: 80vh;
    overflow-y: auto;
  }
  .dijo-panel-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid #1e2535;
  }
  .dijo-panel-header img { width: 32px; height: 32px; border-radius: 50%; }
  .dijo-panel-title { font-weight: 700; font-size: 15px; color: #60c8ff; }
  .dijo-panel-sub { font-size: 11px; color: #555; }
  .dijo-btn {
    margin-top: 10px;
    padding: 9px;
    background: #2563eb;
    border: none;
    color: white;
    width: 100%;
    border-radius: 9px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.15s, transform 0.1s;
  }
  .dijo-btn:hover { background: #1d4ed8; transform: translateY(-1px); }
  .dijo-btn:active { transform: scale(0.98); }
  .dijo-btn.green { background: #16a34a; }
  .dijo-btn.green:hover { background: #15803d; }
  .dijo-btn.purple { background: #7c3aed; }
  .dijo-btn.purple:hover { background: #6d28d9; }
  .dijo-btn.grey { background: #374151; }
  .dijo-btn.grey:hover { background: #1f2937; }
  .dijo-btn:disabled { background: #374151; cursor: not-allowed; opacity: 0.6; transform: none; }
  textarea {
    width: 100%;
    margin-top: 10px;
    border-radius: 9px;
    padding: 8px;
    box-sizing: border-box;
    font-size: 12px;
    background: #1a1f2e;
    color: #e5e7eb;
    border: 1px solid #2d3748;
  }
  .dijo-score { font-size: 32px; font-weight: bold; text-align: center; margin: 10px 0; }
  .dijo-reason { font-size: 12px; color: #ccc; margin-bottom: 6px; line-height: 1.5; }
  .dijo-skills-section { margin-top: 8px; font-size: 12px; }
  .dijo-skills-label { font-weight: bold; margin-top: 6px; margin-bottom: 2px; }
  .dijo-chip {
    display: inline-block;
    padding: 2px 9px;
    border-radius: 20px;
    margin: 2px;
    font-size: 11px;
  }
  .dijo-chip.match { background: #166534; color: #bbf7d0; }
  .dijo-chip.miss  { background: #7f1d1d; color: #fecaca; }
  .dijo-output {
    background: #1a1a1a;
    border-radius: 9px;
    padding: 10px;
    font-size: 12px;
    line-height: 1.6;
    color: #e5e7eb;
    white-space: pre-wrap;
    word-break: break-word;
    margin-top: 10px;
    max-height: 300px;
    overflow-y: auto;
  }
  .dijo-copy-btn {
    margin-top: 8px;
    padding: 6px;
    background: #374151;
    border: none;
    color: #d1d5db;
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
    font-size: 12px;
  }
  .dijo-copy-btn:hover { background: #4b5563; }
  .dijo-divider { border: none; border-top: 1px solid #2d2d2d; margin: 12px 0; }

  /* ── ANIMATIONS ── */
  @keyframes dijoFloat {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes dijoDance {
    0%   { transform: rotate(-12deg) translateY(0px); }
    25%  { transform: rotate(12deg)  translateY(-6px); }
    50%  { transform: rotate(-8deg)  translateY(0px); }
    75%  { transform: rotate(8deg)   translateY(-4px); }
    100% { transform: rotate(-12deg) translateY(0px); }
  }
  @keyframes dijoWave {
    0%,100% { transform: rotate(0deg); transform-origin: bottom center; }
    25%     { transform: rotate(20deg); transform-origin: bottom center; }
    75%     { transform: rotate(-10deg); transform-origin: bottom center; }
  }
  @keyframes antennaBlip {
    0%,100% { r: 9; opacity: 1; }
    50%     { r: 12; opacity: 0.7; }
  }
`;
document.head.appendChild(style);

/* ── BUILD BOT ─────────────────────────────────────────────── */
const bot = document.createElement("div");
bot.id = "dijo-bot";
bot.innerHTML = DIJO_SVG;
bot.style.animation = "dijoFloat 3s ease-in-out infinite";

const bubble = document.createElement("div");
bubble.id = "dijo-bubble";
document.body.appendChild(bubble);

/* ── PANEL ─────────────────────────────────────────────────── */
const panel = document.createElement("div");
panel.className = "dijo-panel";
panel.style.display = "none";

let savedCV = localStorage.getItem("dijo_cv") || "";

panel.innerHTML = `
  <div class="dijo-panel-header">
    <div>
      <div class="dijo-panel-title">🤖 Dijo</div>
      <div class="dijo-panel-sub">ImpactGridGroup Job Assistant</div>
    </div>
  </div>

  <!-- MAIN VIEW -->
  <div id="mainView">
    <div id="status" style="color:#aaa;font-size:13px;">Paste your CV once, then scan any job.</div>
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
      <hr class="dijo-divider">
      <div style="font-size:12px; color:#aaa; margin-bottom:4px;">Generate for this job:</div>
      <button id="coverLetterBtn" class="dijo-btn green">✉️ Cover Letter</button>
      <button id="tailorCVBtn" class="dijo-btn purple">📄 Tailor My CV</button>
    </div>
    <div id="debug" style="margin-top:8px; font-size:11px; color:#444;"></div>
  </div>

  <!-- OUTPUT VIEW -->
  <div id="outputView" style="display:none;">
    <div id="outputTitle" style="font-weight:bold; margin-bottom:8px;"></div>
    <div id="outputStatus" style="font-size:12px; color:#aaa; margin-bottom:6px;"></div>
    <div class="dijo-output" id="outputText"></div>
    <button class="dijo-copy-btn" id="copyBtn">📋 Copy to clipboard</button>
    <button class="dijo-btn grey" id="backBtn" style="margin-top:8px;">← Back</button>
  </div>
`;

/* ── TOGGLE PANEL ──────────────────────────────────────────── */
let panelOpen = false;
bot.addEventListener("click", (e) => {
  if (isDragging) return;
  panelOpen = !panelOpen;
  panel.style.display = panelOpen ? "block" : "none";
  if (panelOpen) triggerWave();
});

/* ── BLINK ANIMATION ───────────────────────────────────────── */
function blink() {
  const lidL = document.getElementById("lid-left");
  const lidR = document.getElementById("lid-right");
  if (!lidL || !lidR) return;
  let h = 0;
  const close = setInterval(() => {
    h += 4;
    lidL.setAttribute("height", h);
    lidR.setAttribute("height", h);
    if (h >= 28) { clearInterval(close); openEyes(); }
  }, 16);
}
function openEyes() {
  const lidL = document.getElementById("lid-left");
  const lidR = document.getElementById("lid-right");
  if (!lidL || !lidR) return;
  let h = 28;
  const open = setInterval(() => {
    h -= 4;
    lidL.setAttribute("height", Math.max(0, h));
    lidR.setAttribute("height", Math.max(0, h));
    if (h <= 0) clearInterval(open);
  }, 16);
}
function scheduleBlink() {
  const delay = 2000 + Math.random() * 4000;
  setTimeout(() => { blink(); scheduleBlink(); }, delay);
}
scheduleBlink();

/* ── EYE TRACKING ──────────────────────────────────────────── */
document.addEventListener("mousemove", (e) => {
  const svg = document.getElementById("dijo-svg");
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height * 0.35;
  const dx = (e.clientX - cx) / window.innerWidth;
  const dy = (e.clientY - cy) / window.innerHeight;
  const mx = Math.max(-3, Math.min(3, dx * 6));
  const my = Math.max(-2, Math.min(2, dy * 4));

  const el = document.getElementById("eye-left");
  const er = document.getElementById("eye-right");
  if (el) el.setAttribute("transform", `translate(${mx},${my})`);
  if (er) er.setAttribute("transform", `translate(${mx},${my})`);
});

/* ── SPEECH BUBBLE ─────────────────────────────────────────── */
function showBubble(msg) {
  const botRect = bot.getBoundingClientRect();
  bubble.innerText = msg;
  bubble.style.right = (window.innerWidth - botRect.right + 10) + "px";
  bubble.style.bottom = (window.innerHeight - botRect.top + 10) + "px";
  bubble.classList.add("show");
  setTimeout(() => bubble.classList.remove("show"), 3000);
}

/* ── IDLE DANCE ────────────────────────────────────────────── */
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  bot.style.animation = "dijoFloat 3s ease-in-out infinite";
  idleTimer = setTimeout(() => {
    bot.style.animation = "dijoDance 0.6s ease-in-out infinite";
    const msgs = ["Bored... entertain me! 😴", "Still here! 👀", "Scan a job? 🚀", "I'm dancing! 💃"];
    showBubble(msgs[Math.floor(Math.random() * msgs.length)]);
    setTimeout(() => {
      bot.style.animation = "dijoFloat 3s ease-in-out infinite";
    }, 4000);
  }, 15000);
}
document.addEventListener("mousemove", resetIdle);
document.addEventListener("keydown", resetIdle);
resetIdle();

/* ── WAVE ON CLICK ─────────────────────────────────────────── */
function triggerWave() {
  const armR = document.getElementById("arm-right");
  if (!armR) return;
  armR.style.animation = "dijoWave 0.4s ease-in-out 3";
  showBubble(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
  setTimeout(() => { armR.style.animation = ""; }, 1300);
}

/* ── WALK ACROSS SCREEN ────────────────────────────────────── */
let walkInterval;
let walkX = window.innerWidth - 120;
let walkDir = -1;
let isWalking = false;

function startWalk() {
  if (isWalking || isDragging || panelOpen) return;
  isWalking = true;
  bot.style.animation = "none";
  bot.style.bottom = "24px";
  bot.style.right = "auto";
  bot.style.left = walkX + "px";

  walkInterval = setInterval(() => {
    if (isDragging || panelOpen) { stopWalk(); return; }
    walkX += walkDir * 1.5;
    const svg = document.getElementById("dijo-svg");
    if (svg) svg.style.transform = walkDir < 0 ? "scaleX(-1)" : "scaleX(1)";
    if (walkX < 10) { walkDir = 1; }
    if (walkX > window.innerWidth - 120) { walkDir = -1; }
    bot.style.left = walkX + "px";
  }, 16);

  setTimeout(() => {
    stopWalk();
    bot.style.left = "auto";
    bot.style.right = "24px";
    bot.style.animation = "dijoFloat 3s ease-in-out infinite";
    const svg = document.getElementById("dijo-svg");
    if (svg) svg.style.transform = "";
  }, 6000 + Math.random() * 4000);
}

function stopWalk() {
  clearInterval(walkInterval);
  isWalking = false;
}

setInterval(() => {
  if (!isDragging && !panelOpen && Math.random() > 0.6) startWalk();
}, 20000);

/* ── DRAG ──────────────────────────────────────────────────── */
let isDragging = false;
let offsetX, offsetY;

bot.addEventListener("mousedown", (e) => {
  isDragging = false;
  const startX = e.clientX, startY = e.clientY;
  offsetX = e.clientX - bot.getBoundingClientRect().left;
  offsetY = e.clientY - bot.getBoundingClientRect().top;

  const onMove = (ev) => {
    if (Math.abs(ev.clientX - startX) > 4 || Math.abs(ev.clientY - startY) > 4) {
      isDragging = true;
    }
    if (isDragging) {
      bot.style.left   = `${ev.clientX - offsetX}px`;
      bot.style.top    = `${ev.clientY - offsetY}px`;
      bot.style.bottom = "auto";
      bot.style.right  = "auto";
      panel.style.left   = bot.style.left;
      panel.style.top    = `${ev.clientY - offsetY - 330}px`;
      panel.style.bottom = "auto";
      panel.style.right  = "auto";
    }
  };
  const onUp = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    setTimeout(() => { isDragging = false; }, 50);
  };
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
});

/* ── JOB TEXT EXTRACTION ───────────────────────────────────── */
function getJobText() {
  let text = "";
  const title = document.querySelector("h1");
  if (title) text += "TITLE: " + title.innerText + "\n\n";
  const company =
    document.querySelector("[data-testid='inlineHeader-companyName']") ||
    document.querySelector(".jobsearch-CompanyInfoContainer") ||
    document.querySelector("[class*='company']");
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
    if (el && el.innerText.length > 200) { text += "DESCRIPTION:\n" + el.innerText; break; }
  }
  if (text.length < 200) text = document.body.innerText;
  return text.substring(0, 2500);
}

function getJobMeta() {
  const titleEl = document.querySelector("h1");
  const jobTitle = titleEl ? titleEl.innerText.trim() : "this role";
  const companyEl =
    document.querySelector("[data-testid='inlineHeader-companyName']") ||
    document.querySelector(".jobsearch-CompanyInfoContainer") ||
    document.querySelector("[class*='company']");
  const companyName = companyEl ? companyEl.innerText.trim() : "your company";
  return { jobTitle, companyName };
}

function scoreColour(score) {
  if (score >= 75) return "#4ade80";
  if (score >= 55) return "#facc15";
  return "#f87171";
}

function showOutput(title, content) {
  document.getElementById("mainView").style.display = "none";
  document.getElementById("outputView").style.display = "block";
  document.getElementById("outputTitle").innerText = title;
  document.getElementById("outputText").innerText = content;
  document.getElementById("outputStatus").innerText = "";
}

function showMain() {
  document.getElementById("outputView").style.display = "none";
  document.getElementById("mainView").style.display = "block";
}

/* ── PANEL BUTTON HANDLERS ─────────────────────────────────── */
panel.addEventListener("click", async (e) => {
  const status        = document.getElementById("status");
  const debug         = document.getElementById("debug");
  const results       = document.getElementById("results");
  const scoreDisplay  = document.getElementById("scoreDisplay");
  const reasonDisplay = document.getElementById("reasonDisplay");
  const summaryDisplay= document.getElementById("summaryDisplay");
  const matchedSkills = document.getElementById("matchedSkills");
  const missingSkills = document.getElementById("missingSkills");
  const matchedLabel  = document.getElementById("matchedLabel");
  const missingLabel  = document.getElementById("missingLabel");

  if (e.target.id === "backBtn") { showMain(); return; }

  if (e.target.id === "copyBtn") {
    const text = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(text).then(() => {
      e.target.innerText = "✅ Copied!";
      setTimeout(() => { e.target.innerText = "📋 Copy to clipboard"; }, 2000);
    });
    return;
  }

  if (e.target.id === "saveCV") {
    const cvText = document.getElementById("cvInput").value.trim();
    if (!cvText) { status.innerText = "⚠️ CV is empty — paste your CV first."; return; }
    localStorage.setItem("dijo_cv", cvText);
    status.innerText = "✅ CV saved! Now open any job and click Scan.";
    showBubble("CV saved! Let's find your job 🎯");
    return;
  }

  if (e.target.id === "scanBtn") {
    const cvText = localStorage.getItem("dijo_cv");
    if (!cvText) { status.innerText = "⚠️ No CV saved. Paste your CV and click Save CV first."; return; }
    status.innerText = "⏳ Scanning job...";
    results.style.display = "none";
    debug.innerText = "";
    showBubble("Scanning job... 🔍");
    const jobText = getJobText();
    debug.innerText = `CV: ${cvText.length} chars | Job: ${jobText.length} chars`;
    try {
      const res = await fetch("https://impactgrid-dijo-api.onrender.com/ai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv_text: cvText, job_description: jobText })
      });
      const data = await res.json();
      const score = data.score ?? 0;
      scoreDisplay.innerText = `${score}% Match`;
      scoreDisplay.style.color = scoreColour(score);
      reasonDisplay.innerText  = data.reason  || "";
      summaryDisplay.innerText = data.summary || "";
      if (data.matched_skills?.length > 0) {
        matchedLabel.innerText = "✅ You have:";
        matchedSkills.innerHTML = data.matched_skills.map(s => `<span class="dijo-chip match">${s}</span>`).join("");
      } else { matchedLabel.innerText = ""; matchedSkills.innerHTML = ""; }
      if (data.missing_skills?.length > 0) {
        missingLabel.innerText = "❌ You're missing:";
        missingSkills.innerHTML = data.missing_skills.map(s => `<span class="dijo-chip miss">${s}</span>`).join("");
      } else { missingLabel.innerText = ""; missingSkills.innerHTML = ""; }
      status.innerText = "Scan complete ✅";
      results.style.display = "block";
      showBubble(`${score}% match — ${score >= 75 ? "Great fit! 🎉" : score >= 55 ? "Not bad! 💪" : "Keep going! 🔧"}`);
    } catch (err) {
      status.innerText = "❌ Error connecting to Dijo API.";
      debug.innerText += ` | Error: ${err.message}`;
    }
    return;
  }

  if (e.target.id === "coverLetterBtn") {
    const cvText = localStorage.getItem("dijo_cv");
    if (!cvText) { status.innerText = "⚠️ No CV saved."; return; }
    const btn = document.getElementById("coverLetterBtn");
    btn.disabled = true; btn.innerText = "⏳ Generating...";
    showBubble("Writing your cover letter ✍️");
    const jobText = getJobText();
    const { jobTitle, companyName } = getJobMeta();
    try {
      const res = await fetch("https://impactgrid-dijo-api.onrender.com/ai/cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv_text: cvText, job_description: jobText, job_title: jobTitle, company_name: companyName })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      showOutput(`✉️ Cover Letter — ${jobTitle}`, data.cover_letter);
      showBubble("Cover letter ready! ✉️");
    } catch (err) {
      status.innerText = `❌ Cover letter failed: ${err.message}`;
    } finally {
      btn.disabled = false; btn.innerText = "✉️ Cover Letter";
    }
    return;
  }

  if (e.target.id === "tailorCVBtn") {
    const cvText = localStorage.getItem("dijo_cv");
    if (!cvText) { status.innerText = "⚠️ No CV saved."; return; }
    const btn = document.getElementById("tailorCVBtn");
    btn.disabled = true; btn.innerText = "⏳ Tailoring...";
    showBubble("Tailoring your CV... 📄");
    const jobText = getJobText();
    const { jobTitle, companyName } = getJobMeta();
    try {
      const res = await fetch("https://impactgrid-dijo-api.onrender.com/ai/tailor-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv_text: cvText, job_description: jobText, job_title: jobTitle, company_name: companyName })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      showOutput(`📄 Tailored CV — ${jobTitle}`, data.tailored_cv);
      showBubble("Your CV is tailored! 🚀");
    } catch (err) {
      status.innerText = `❌ CV tailoring failed: ${err.message}`;
    } finally {
      btn.disabled = false; btn.innerText = "📄 Tailor My CV";
    }
    return;
  }
});

/* ── MOUNT ─────────────────────────────────────────────────── */
document.body.appendChild(bot);
document.body.appendChild(panel);

/* ── WELCOME BUBBLE ────────────────────────────────────────── */
setTimeout(() => showBubble("Hi! I'm Dijo 👋 Click me!"), 1500);
