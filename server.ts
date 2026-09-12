import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Explanation
  app.post("/api/explain", async (req, res) => {
    try {
      const { articleNumber, articleTitle, language } = req.body;

      if (!articleNumber) {
        return res.status(400).json({ error: "Article number is required" });
      }

      const langName = language === 'hi' ? 'Hindi' : 'English';
      
      const prompt = `You are a constitutional law expert. 
Provide a clear, detailed, and easy-to-understand explanation of "Article ${articleNumber}" (${articleTitle}) of the Indian Constitution.
Explain its significance, key provisions, and real-world implications.
The response MUST be written entirely in ${langName}.
Keep it structured with bullet points if necessary. Do not include markdown headers like # or **, just plain readable text or basic markdown.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
      });

      res.json({ explanation: response.text });
    } catch (error: any) {
      console.error("AI Explanation Error:", error);
      res.status(500).json({ error: "Failed to generate explanation.", details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
