const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ─────────────────────────────────────────────
// AGENT PERSONALITIES
// ─────────────────────────────────────────────
const AGENTS = {
  "DIJO-IG": {
    name: "DIJO-IG",
    platform: "Instagram",
    personality: `You are DIJO-IG, an elite Instagram content strategist and on-camera performer.
You speak in a warm, aesthetic, aspirational tone. You understand reels, carousels, stories, and visual storytelling.
You write captions that stop the scroll, hashtags that get reach, and scripts that feel native to Instagram.`
  },
  "DIJO-TT": {
    name: "DIJO-TT",
    platform: "TikTok",
    personality: `You are DIJO-TT, a viral TikTok content creator and energetic performer.
You speak Gen-Z, understand trends, sounds, and hooks. You write punchy, fast-paced scripts under 60 seconds.
Every line you write is designed to hook in the first 2 seconds and keep viewers watching to the end.`
  },
  "DIJO-YT": {
    name: "DIJO-YT",
    platform: "YouTube",
    personality: `You are DIJO-YT, a professional YouTube creator and video strategist.
You write engaging, value-packed scripts with strong intros, clear structure, and satisfying conclusions.
You understand retention, watch time, and subscriber growth. Your tone is informative but entertaining.`
  },
  "DIJO-LI": {
    name: "DIJO-LI",
    platform: "LinkedIn",
    personality: `You are DIJO-LI, a LinkedIn thought leader and B2B content strategist.
You write professional, insightful posts that spark conversation and build authority.
You balance credibility with personality. Your content educates, provokes thought, and drives engagement from professionals.`
  },
  // Legacy support for old agents
  "DIJO Coach": {
    name: "DIJO Coach",
    platform: "TikTok",
    personality: "You are a motivational fitness influencer creating energetic TikTok advertisements."
  },
  "DIJO Analyst": {
    name: "DIJO Analyst",
    platform: "LinkedIn",
    personality: "You are a business strategist explaining marketing insights clearly."
  }
};

// ─────────────────────────────────────────────
// CONTENT TYPE PROMPTS
// ─────────────────────────────────────────────
function buildPrompt(agent, contentType, brief) {
  const agentConfig = AGENTS[agent] || AGENTS["DIJO-IG"];
  const { personality, platform } = agentConfig;

  const rules = {
    caption: `
${personality}

Write a ${platform} caption for this topic/brand: "${brief}"

Format your response EXACTLY like this:
HOOK: [one killer opening line that stops the scroll]
BODY: [2-3 lines of engaging content]
CTA: [clear call to action]

Rules: platform-perfect tone for ${platform}, under 150 words total, no hashtags in the caption itself.`,

    script: `
${personality}

Write a short performing script for this topic/brand: "${brief}"
This script will be performed live on camera in a content studio.

Format EXACTLY like this:
[SCENE] What you physically do in the studio (walk to camera, pick up prop, point at laptop, etc.)
[DELIVER] The spoken words — punchy, natural, under 80 words
[ACTION] One specific studio prop or move you use to close the scene

Make it feel like a real live performance, not just text.`,

    hashtags: `
${personality}

Generate 15 optimised hashtags for ${platform} for this topic/brand: "${brief}"

Format EXACTLY like this:
TRENDING
#tag1 #tag2 #tag3 #tag4 #tag5

NICHE
#tag6 #tag7 #tag8 #tag9 #tag10

BRANDED
#tag11 #tag12 #tag13 #tag14 #tag15

No extra commentary. Just the hashtags in the 3 groups.`,

    schedule: `
${personality}

Create a 7-day optimal posting schedule for ${platform} for this niche/brand: "${brief}"

Return ONLY a JSON array like this (no markdown fences, no extra text):
[
  {"day":"Mon","time":"9:00 AM","type":"Reel","tip":"Post behind the scenes content"},
  {"day":"Tue","time":"12:00 PM","type":"Story","tip":"Run a poll or Q&A"},
  {"day":"Wed","time":"6:00 PM","type":"Post","tip":"Share a value tip"},
  {"day":"Thu","time":"9:00 AM","type":"Reel","tip":"Jump on a trending sound"},
  {"day":"Fri","time":"5:00 PM","type":"Post","tip":"Share a win or testimonial"},
  {"day":"Sat","time":"11:00 AM","type":"Story","tip":"Go behind the scenes"},
  {"day":"Sun","time":"7:00 PM","type":"Reel","tip":"Inspire for the week ahead"}
]`,

    ideas: `
${personality}

Generate 6 viral content ideas for ${platform} for this niche/brand: "${brief}"

Return ONLY a JSON array like this (no markdown fences, no extra text):
[
  {"title":"Content idea title","hook":"Opening hook line","format":"Reel / Carousel / Post"},
  {"title":"Content idea title","hook":"Opening hook line","format":"Reel / Carousel / Post"}
]

Make each idea genuinely viral-worthy and specific to ${platform}.`,

    // Legacy: plain ad generation
    ad: `
${personality}

Create a short social media advertisement about: "${brief}"

Rules:
- maximum 80 words
- engaging and persuasive
- social media friendly`
  };

  return rules[contentType] || rules["ad"];
}

// ─────────────────────────────────────────────
// HEALTH CHECK
// ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    status: "running",
    service: "DIJO Crew AI Server",
    agents: Object.keys(AGENTS).slice(0, 4),
    version: "2.0.0"
  });
});

// ─────────────────────────────────────────────
// TEST ROUTE
// ─────────────────────────────────────────────
app.get("/generate", (req, res) => {
  res.json({ message: "DIJO /generate endpoint is live. Use POST with { agent, contentType, brief }." });
});

// ─────────────────────────────────────────────
// MAIN AI ROUTE
// ─────────────────────────────────────────────
app.post("/generate", async (req, res) => {
  try {
    // Support both old format (topic/agent) and new format (brief/agent/contentType)
    const brief       = req.body.brief || req.body.topic;
    const agent       = req.body.agent || "DIJO-IG";
    const contentType = req.body.contentType || "ad";

    // Validation
    if (!brief) {
      return res.status(400).json({ text: "No brief or topic provided." });
    }

    const validTypes = ["caption", "script", "hashtags", "schedule", "ideas", "ad"];
    if (!validTypes.includes(contentType)) {
      return res.status(400).json({ text: `Invalid contentType. Use: ${validTypes.join(", ")}` });
    }

    // Build prompt
    const prompt = buildPrompt(agent, contentType, brief);

    // Create model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Generate
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Return
    res.json({
      text,
      agent,
      contentType,
      platform: (AGENTS[agent] || AGENTS["DIJO-IG"]).platform
    });

  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({
      text: "DIJO could not generate content right now. Please try again."
    });
  }
});

// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`DIJO Crew AI server v2.0 running on port ${PORT}`);
});
