const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {

  const { brief } = req.body;

  try {

    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "llama3",
        prompt: brief,
        stream: false
      }
    );

    const text = response.data.response;

    res.json({ text });

  } catch (error) {

    console.error("OLLAMA ERROR:");
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Ollama generation failed"
    });

  }

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("DIJO AI server running on port", PORT);
});
