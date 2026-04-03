/* ============================================================
   DIJO — Live Mascot + Job Assistant
   ImpactGridGroup | impactgridgroup.com
   ============================================================ */

/* ── SVG DIJO (accurate to reference mascot image) ─────────── */
const DIJO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 260" width="110" height="180" id="dijo-svg" style="display:block;overflow:visible;cursor:grab;">
  <defs>
    <radialGradient id="dEyeG" cx="38%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#70d8ff"/>
      <stop offset="45%" stop-color="#1a80ff"/>
      <stop offset="100%" stop-color="#002fa0" stop-opacity="0.6"/>
    </radialGradient>
    <radialGradient id="dHeadG" cx="32%" cy="22%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="55%" stop-color="#e8eaf0"/>
      <stop offset="100%" stop-color="#cdd0de"/>
    </radialGradient>
    <radialGradient id="dBodyG" cx="28%" cy="18%" r="75%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#eaeaf5"/>
      <stop offset="100%" stop-color="#c8cade"/>
    </radialGradient>
    <radialGradient id="dArmG" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#f0f0f8"/>
      <stop offset="100%" stop-color="#c0c2d8"/>
    </radialGradient>
    <radialGradient id="dAntennaG" cx="30%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#b0f0ff"/>
      <stop offset="55%" stop-color="#0090ff"/>
      <stop offset="100%" stop-color="#0040aa"/>
    </radialGradient>
    <radialGradient id="dEarG" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#60c8ff"/>
      <stop offset="60%" stop-color="#0060cc"/>
      <stop offset="100%" stop-color="#002888"/>
    </radialGradient>
    <radialGradient id="dShoeG" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#d8d8e8"/>
    </radialGradient>
    <filter id="dSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000020" flood-opacity="0.18"/>
    </filter>
    <filter id="dEyeGlow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="1.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="dAntennaGlow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- ═══ LEGS (walk animation via JS) ═══ -->
  <!-- Left leg -->
  <g id="dleg-left" style="transform-origin:54px 198px">
    <rect x="42" y="198" width="24" height="36" rx="10" fill="#1a1a2e"/>
    <!-- shoe -->
    <ellipse cx="54" cy="234" rx="20" ry="10" fill="url(#dShoeG)"/>
    <ellipse cx="54" cy="231" rx="15" ry="6" fill="#f8f8fc"/>
    <!-- shoe highlight -->
    <ellipse cx="48" cy="229" rx="6" ry="3" fill="white" opacity="0.6"/>
  </g>
  <!-- Right leg -->
  <g id="dleg-right" style="transform-origin:106px 198px">
    <rect x="94" y="198" width="24" height="36" rx="10" fill="#1a1a2e"/>
    <!-- shoe -->
    <ellipse cx="106" cy="234" rx="20" ry="10" fill="url(#dShoeG)"/>
    <ellipse cx="106" cy="231" rx="15" ry="6" fill="#f8f8fc"/>
    <ellipse cx="100" cy="229" rx="6" ry="3" fill="white" opacity="0.6"/>
  </g>

  <!-- ═══ ARMS (swing animation via JS) ═══ -->
  <!-- Left arm -->
  <g id="darm-left" style="transform-origin:28px 148px">
    <!-- upper arm -->
    <rect x="14" y="140" width="22" height="48" rx="11" fill="url(#dArmG)"/>
    <!-- arm highlight -->
    <rect x="16" y="143" width="8" height="20" rx="4" fill="white" opacity="0.4"/>
    <!-- hand -->
    <ellipse cx="25" cy="191" rx="13" ry="13" fill="#1a1a2e"/>
    <ellipse cx="25" cy="191" rx="9" ry="9" fill="#252540"/>
    <!-- knuckle bumps -->
    <circle cx="19" cy="187" r="3" fill="#1a1a2e"/>
    <circle cx="25" cy="185" r="3" fill="#1a1a2e"/>
    <circle cx="31" cy="187" r="3" fill="#1a1a2e"/>
    <!-- ear/shoulder light -->
    <ellipse cx="16" cy="150" rx="9" ry="15" fill="#1a1a2e"/>
    <ellipse cx="16" cy="150" rx="6" ry="10" fill="url(#dEarG)"/>
    <ellipse cx="15" cy="146" rx="2.5" ry="4" fill="white" opacity="0.65"/>
  </g>
  <!-- Right arm -->
  <g id="darm-right" style="transform-origin:132px 148px">
    <rect x="124" y="140" width="22" height="48" rx="11" fill="url(#dArmG)"/>
    <rect x="126" y="143" width="8" height="20" rx="4" fill="white" opacity="0.4"/>
    <ellipse cx="135" cy="191" rx="13" ry="13" fill="#1a1a2e"/>
    <ellipse cx="135" cy="191" rx="9" ry="9" fill="#252540"/>
    <circle cx="129" cy="187" r="3" fill="#1a1a2e"/>
    <circle cx="135" cy="185" r="3" fill="#1a1a2e"/>
    <circle cx="141" cy="187" r="3" fill="#1a1a2e"/>
    <ellipse cx="144" cy="150" rx="9" ry="15" fill="#1a1a2e"/>
    <ellipse cx="144" cy="150" rx="6" ry="10" fill="url(#dEarG)"/>
    <ellipse cx="143" cy="146" rx="2.5" ry="4" fill="white" opacity="0.65"/>
  </g>

  <!-- ═══ BODY ═══ -->
  <g filter="url(#dSoftShadow)">
    <!-- Main body — rounded rectangle, wide at top -->
    <rect x="30" y="130" width="100" height="100" rx="22" fill="url(#dBodyG)"/>
    <!-- body side highlight (left) -->
    <rect x="32" y="134" width="16" height="60" rx="8" fill="white" opacity="0.28"/>
  </g>

  <!-- BELT -->
  <rect x="30" y="208" width="100" height="18" rx="6" fill="#12121e"/>
  <!-- belt buckle plate -->
  <rect x="64" y="208" width="32" height="18" rx="4" fill="#2a2a3e"/>
  <!-- buckle centre pin -->
  <rect x="74" y="211" width="12" height="12" rx="2" fill="#555570"/>
  <!-- buckle pin highlight -->
  <rect x="75" y="212" width="5" height="5" rx="1" fill="#888899"/>

  <!-- SHIRT COLLAR - V-shape -->
  <polygon points="68,132 80,158 92,132" fill="white"/>
  <polygon points="68,132 62,158 80,158" fill="#dddde8"/>
  <polygon points="92,132 98,158 80,158" fill="#dddde8"/>
  <!-- collar shadow line -->
  <line x1="80" y1="156" x2="80" y2="132" stroke="#ccccd8" stroke-width="0.8" opacity="0.5"/>

  <!-- TIE -->
  <!-- knot -->
  <rect x="74" y="148" width="12" height="12" rx="3" fill="#1a4fd6"/>
  <!-- body of tie -->
  <polygon points="74,158 86,158 90,208 80,216 70,208" fill="#1a4fd6"/>
  <!-- tie centre shadow crease -->
  <polygon points="79,158 81,158 83,208 80,212 77,208" fill="#0f3ab5" opacity="0.6"/>
  <!-- tie highlight -->
  <ellipse cx="78" cy="180" rx="3" ry="10" fill="white" opacity="0.12"/>

  <!-- CHEST TEXT -->
  <text x="80" y="188" font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="bold" fill="#1a4fd6" text-anchor="middle" letter-spacing="0.5">Dijo</text>
  <text x="80" y="201" font-family="Arial,Helvetica,sans-serif" font-size="6.5" fill="#16a34a" text-anchor="middle" letter-spacing="0.2">ImpactGridGroup</text>

  <!-- ═══ HEAD ═══ -->
  <g filter="url(#dSoftShadow)">
    <!-- Main head oval — big, slightly taller than wide, very round -->
    <ellipse cx="80" cy="82" rx="58" ry="64" fill="url(#dHeadG)"/>
    <!-- Head left highlight (big sheen like the image) -->
    <ellipse cx="55" cy="54" rx="22" ry="28" fill="white" opacity="0.22" transform="rotate(-18,55,54)"/>
    <!-- subtle edge shading right -->
    <ellipse cx="118" cy="88" rx="12" ry="30" fill="#b0b2cc" opacity="0.18"/>
  </g>

  <!-- HEAD EAR PANELS (black side pieces like image) -->
  <!-- left ear -->
  <ellipse cx="24" cy="82" rx="14" ry="24" fill="#12121e"/>
  <ellipse cx="24" cy="82" rx="9" ry="16" fill="url(#dEarG)"/>
  <ellipse cx="23" cy="75" rx="3.5" ry="6" fill="white" opacity="0.6"/>
  <!-- right ear -->
  <ellipse cx="136" cy="82" rx="14" ry="24" fill="#12121e"/>
  <ellipse cx="136" cy="82" rx="9" ry="16" fill="url(#dEarG)"/>
  <ellipse cx="135" cy="75" rx="3.5" ry="6" fill="white" opacity="0.6"/>

  <!-- VISOR — wide rounded rect covering most of the face, very dark -->
  <rect x="30" y="52" width="100" height="68" rx="28" fill="#07070f"/>
  <!-- visor inner subtle rim -->
  <rect x="32" y="54" width="96" height="64" rx="26" fill="none" stroke="#1a1f3a" stroke-width="1.5"/>
  <!-- visor top glare (subtle) -->
  <ellipse cx="80" cy="57" rx="30" ry="5" fill="white" opacity="0.05"/>

  <!-- LEFT EYE -->
  <g id="deye-left" filter="url(#dEyeGlow)">
    <!-- outer dark circle -->
    <circle cx="57" cy="86" r="22" fill="#04040e"/>
    <!-- iris ring 1 -->
    <circle cx="57" cy="86" r="20" fill="none" stroke="#003399" stroke-width="1" opacity="0.5"/>
    <!-- iris ring 2 -->
    <circle cx="57" cy="86" r="16" fill="none" stroke="#0055cc" stroke-width="1.5" opacity="0.6"/>
    <!-- iris fill -->
    <circle cx="57" cy="86" r="13" fill="url(#dEyeG)"/>
    <!-- pupil -->
    <circle cx="57" cy="86" r="6" fill="#001255"/>
    <!-- main catchlight -->
    <circle cx="63" cy="80" r="4.5" fill="white" opacity="0.95"/>
    <!-- secondary catchlight -->
    <circle cx="51" cy="93" r="2" fill="white" opacity="0.45"/>
    <!-- eyelid (animated) -->
    <rect id="dlid-left" x="35" y="64" width="44" height="0" rx="6" fill="#07070f"/>
  </g>

  <!-- RIGHT EYE -->
  <g id="deye-right" filter="url(#dEyeGlow)">
    <circle cx="103" cy="86" r="22" fill="#04040e"/>
    <circle cx="103" cy="86" r="20" fill="none" stroke="#003399" stroke-width="1" opacity="0.5"/>
    <circle cx="103" cy="86" r="16" fill="none" stroke="#0055cc" stroke-width="1.5" opacity="0.6"/>
    <circle cx="103" cy="86" r="13" fill="url(#dEyeG)"/>
    <circle cx="103" cy="86" r="6" fill="#001255"/>
    <circle cx="109" cy="80" r="4.5" fill="white" opacity="0.95"/>
    <circle cx="97" cy="93" r="2" fill="white" opacity="0.45"/>
    <rect id="dlid-right" x="81" y="64" width="44" height="0" rx="6" fill="#07070f"/>
  </g>

  <!-- SMILE / MOUTH -->
  <path id="dijo-mouth" d="M 65 108 Q 80 117 95 108" stroke="#3388ff" stroke-width="2.5" fill="none" stroke-linecap="round"/>

  <!-- ═══ ANTENNA ═══ -->
  <!-- stem -->
  <rect x="76" y="12" width="8" height="30" rx="4" fill="#12121e"/>
  <!-- dome glow ring -->
  <circle id="dantenna-outer" cx="80" cy="12" r="13" fill="#0060ff" opacity="0.25" filter="url(#dAntennaGlow)"/>
  <!-- dome -->
  <circle cx="80" cy="12" r="11" fill="url(#dAntennaG)" filter="url(#dAntennaGlow)"/>
  <!-- dome inner bright -->
  <circle cx="80" cy="12" r="7" fill="#80e8ff"/>
  <!-- dome highlight -->
  <circle cx="76" cy="8" r="3.5" fill="white" opacity="0.75"/>
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
  #dijo-bot:hover { filter: brightness(1.08) drop-shadow(0 4px 18px rgba(0,100,255,0.22)); }

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
  #dijo-bubble.show { opacity: 1; transform: scale(1); }

  /* ── PANEL ── */
  .dijo-panel {
    position: fixed;
    bottom: 220px;
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
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 12px; padding-bottom: 10px;
    border-bottom: 1px solid #1e2535;
  }
  .dijo-panel-title { font-weight: 700; font-size: 15px; color: #60c8ff; }
  .dijo-panel-sub { font-size: 11px; color: #555; }
  .dijo-btn {
    margin-top: 10px; padding: 9px;
    background: #2563eb; border: none; color: white;
    width: 100%; border-radius: 9px; cursor: pointer;
    font-size: 14px; font-weight: 600;
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
    width: 100%; margin-top: 10px; border-radius: 9px;
    padding: 8px; box-sizing: border-box; font-size: 12px;
    background: #1a1f2e; color: #e5e7eb; border: 1px solid #2d3748;
  }
  .dijo-score { font-size: 32px; font-weight: bold; text-align: center; margin: 10px 0; }
  .dijo-reason { font-size: 12px; color: #ccc; margin-bottom: 6px; line-height: 1.5; }
  .dijo-skills-section { margin-top: 8px; font-size: 12px; }
  .dijo-skills-label { font-weight: bold; margin-top: 6px; margin-bottom: 2px; }
  .dijo-chip {
    display: inline-block; padding: 2px 9px;
    border-radius: 20px; margin: 2px; font-size: 11px;
  }
  .dijo-chip.match { background: #166534; color: #bbf7d0; }
  .dijo-chip.miss  { background: #7f1d1d; color: #fecaca; }
  .dijo-output {
    background: #1a1a1a; border-radius: 9px; padding: 10px;
    font-size: 12px; line-height: 1.6; color: #e5e7eb;
    white-space: pre-wrap; word-break: break-word;
    margin-top: 10px; max-height: 300px; overflow-y: auto;
  }
  .dijo-copy-btn {
    margin-top: 8px; padding: 6px; background: #374151;
    border: none; color: #d1d5db; width: 100%;
    border-radius: 7px; cursor: pointer; font-size: 12px;
  }
  .dijo-copy-btn:hover { background: #4b5563; }
  .dijo-divider { border: none; border-top: 1px solid #2d2d2d; margin: 12px 0; }

  /* ── ANIMATIONS ── */
  @keyframes dijoFloat {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    25%      { transform: translateY(-6px) rotate(0.5deg); }
    75%      { transform: translateY(-4px) rotate(-0.5deg); }
  }
  @keyframes dijoDance {
    0%   { transform: rotate(-10deg) translateY(0px) scaleX(1); }
    20%  { transform: rotate(10deg)  translateY(-8px) scaleX(1.03); }
    40%  { transform: rotate(-7deg)  translateY(0px) scaleX(0.97); }
    60%  { transform: rotate(7deg)   translateY(-5px) scaleX(1.02); }
    80%  { transform: rotate(-4deg)  translateY(0px) scaleX(0.99); }
    100% { transform: rotate(-10deg) translateY(0px) scaleX(1); }
  }
`;
document.head.appendChild(style);

/* ── BUILD BOT ─────────────────────────────────────────────── */
const bot = document.createElement("div");
bot.id = "dijo-bot";
bot.innerHTML = DIJO_SVG;
bot.style.animation = "dijoFloat 3.2s ease-in-out infinite";

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
  const lidL = document.getElementById("dlid-left");
  const lidR = document.getElementById("dlid-right");
  if (!lidL || !lidR) return;
  let h = 0;
  const close = setInterval(() => {
    h += 5;
    lidL.setAttribute("height", h);
    lidR.setAttribute("height", h);
    if (h >= 26) { clearInterval(close); openEyes(); }
  }, 14);
}
function openEyes() {
  const lidL = document.getElementById("dlid-left");
  const lidR = document.getElementById("dlid-right");
  if (!lidL || !lidR) return;
  let h = 26;
  const open = setInterval(() => {
    h -= 5;
    lidL.setAttribute("height", Math.max(0, h));
    lidR.setAttribute("height", Math.max(0, h));
    if (h <= 0) clearInterval(open);
  }, 14);
}
function scheduleBlink() {
  const delay = 2500 + Math.random() * 3500;
  setTimeout(() => { blink(); scheduleBlink(); }, delay);
}
scheduleBlink();

/* ── EYE TRACKING ──────────────────────────────────────────── */
document.addEventListener("mousemove", (e) => {
  const svg = document.getElementById("dijo-svg");
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height * 0.33;
  const dx = (e.clientX - cx) / window.innerWidth;
  const dy = (e.clientY - cy) / window.innerHeight;
  const mx = Math.max(-3.5, Math.min(3.5, dx * 7));
  const my = Math.max(-2, Math.min(2, dy * 4));
  const el = document.getElementById("deye-left");
  const er = document.getElementById("deye-right");
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
  setTimeout(() => bubble.classList.remove("show"), 3200);
}

/* ── WALK ANIMATION (natural leg + arm swing) ──────────────── */
let walkAngle = 0;
let walkRAF = null;
let walkX = window.innerWidth - 150;
let walkDir = -1;
let isWalking = false;

function animateWalk() {
  walkAngle += 0.07;
  const legSwing = Math.sin(walkAngle) * 22;
  const armSwing = Math.sin(walkAngle) * 18;

  const legL = document.getElementById("dleg-left");
  const legR = document.getElementById("dleg-right");
  const armL = document.getElementById("darm-left");
  const armR = document.getElementById("darm-right");

  if (legL) legL.style.transform = `rotate(${legSwing}deg)`;
  if (legR) legR.style.transform = `rotate(${-legSwing}deg)`;
  // arms swing opposite to legs for natural gait
  if (armL) armL.style.transform = `rotate(${-armSwing * 0.7}deg)`;
  if (armR) armR.style.transform = `rotate(${armSwing * 0.7}deg)`;

  // slight vertical bob
  const bob = Math.abs(Math.sin(walkAngle)) * 3;
  const svg = document.getElementById("dijo-svg");
  if (svg) svg.style.marginBottom = bob + "px";

  walkX += walkDir * 1.8;
  const maxX = window.innerWidth - 140;
  if (walkX < 10) { walkDir = 1; }
  if (walkX > maxX) { walkDir = -1; }

  // flip horizontally when walking left vs right
  if (svg) svg.style.transform = walkDir < 0 ? "scaleX(-1)" : "scaleX(1)";

  bot.style.left = walkX + "px";
  walkRAF = requestAnimationFrame(animateWalk);
}

function resetLegsArms() {
  ["dleg-left","dleg-right","darm-left","darm-right"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.transform = "";
  });
  const svg = document.getElementById("dijo-svg");
  if (svg) { svg.style.marginBottom = ""; svg.style.transform = ""; }
}

function startWalk() {
  if (isWalking || isDragging || panelOpen) return;
  isWalking = true;
  bot.style.animation = "none";
  bot.style.bottom = "24px";
  bot.style.right = "auto";
  bot.style.left = walkX + "px";
  animateWalk();

  const duration = 5000 + Math.random() * 4000;
  setTimeout(() => {
    stopWalk();
    bot.style.left = "auto";
    bot.style.right = "24px";
    bot.style.animation = "dijoFloat 3.2s ease-in-out infinite";
    resetLegsArms();
  }, duration);
}

function stopWalk() {
  if (walkRAF) cancelAnimationFrame(walkRAF);
  walkRAF = null;
  isWalking = false;
}

// Idle walk every ~20s
setInterval(() => {
  if (!isDragging && !panelOpen && Math.random() > 0.55) startWalk();
}, 20000);

/* ── IDLE DANCE ────────────────────────────────────────────── */
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  if (!isWalking) bot.style.animation = "dijoFloat 3.2s ease-in-out infinite";
  idleTimer = setTimeout(() => {
    if (!isDragging && !panelOpen && !isWalking) {
      bot.style.animation = "dijoDance 0.55s ease-in-out infinite";
      const msgs = ["Bored... entertain me! 😴", "Still here! 👀", "Scan a job? 🚀", "I'm dancing! 💃"];
      showBubble(msgs[Math.floor(Math.random() * msgs.length)]);
      setTimeout(() => {
        if (!isWalking) bot.style.animation = "dijoFloat 3.2s ease-in-out infinite";
      }, 4000);
    }
  }, 15000);
}
document.addEventListener("mousemove", resetIdle);
document.addEventListener("keydown", resetIdle);
resetIdle();

/* ── WAVE ON CLICK ─────────────────────────────────────────── */
function triggerWave() {
  const armR = document.getElementById("darm-right");
  if (!armR) return;
  let angle = 0;
  let waveDir = 1;
  let waveCount = 0;
  const waveRAF = setInterval(() => {
    angle += waveDir * 8;
    armR.style.transform = `rotate(${angle}deg)`;
    if (Math.abs(angle) >= 28) { waveDir *= -1; waveCount++; }
    if (waveCount >= 6) {
      clearInterval(waveRAF);
      armR.style.transform = "";
    }
  }, 30);
  showBubble(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
}

/* ── ANTENNA PULSE ─────────────────────────────────────────── */
function pulseAntenna() {
  const outer = document.getElementById("dantenna-outer");
  if (!outer) return;
  let scale = 1;
  let dir = 1;
  const antennaAnim = setInterval(() => {
    scale += dir * 0.04;
    if (scale > 1.5) dir = -1;
    if (scale < 1) { dir = 1; scale = 1; clearInterval(antennaAnim); return; }
    outer.setAttribute("r", (13 * scale).toString());
    outer.setAttribute("opacity", (0.25 / scale).toString());
  }, 30);
}
setInterval(pulseAntenna, 3500);

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
      if (isWalking) stopWalk();
    }
    if (isDragging) {
      bot.style.left   = `${ev.clientX - offsetX}px`;
      bot.style.top    = `${ev.clientY - offsetY}px`;
      bot.style.bottom = "auto";
      bot.style.right  = "auto";
      panel.style.left   = bot.style.left;
      panel.style.top    = `${ev.clientY - offsetY - 350}px`;
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
setTimeout(() => pulseAntenna(), 3000);
