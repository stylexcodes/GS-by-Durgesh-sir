const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');
const path = require('path');
require('dotenv').config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const filePath = path.join(__dirname, 'src/data', 'articlesData.ts');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Very hacky parser to extract the JSON array from the TS file
  const jsonStart = content.indexOf('[');
  const jsonEnd = content.lastIndexOf(']') + 1;
  const jsonStr = content.slice(jsonStart, jsonEnd);
  
  let articles;
  try {
    articles = eval(`(${jsonStr})`);
  } catch (e) {
    console.error("Failed to parse articles array");
    return;
  }
  
  console.log(`Found ${articles.length} articles. Enhancing important ones...`);
  
  let count = 0;
  for (let art of articles) {
    if (art.isImportant && !art.expertNotes) {
      if (count >= 10) break; // limit to 10 for speed right now, we can do more if it works
      
      console.log(`Generating note for Article ${art.number}...`);
      
      try {
        const promptEn = `You are a constitutional law expert. Provide a clear, detailed, and easy-to-understand explanation of "Article ${art.number}" (${art.title.en}) of the Indian Constitution. Explain its significance and real-world implications in 3-4 bullet points. Keep it plain text, no markdown headers, use bullet points (•).`;
        const promptHi = `आप एक संवैधानिक कानून विशेषज्ञ हैं। भारतीय संविधान के "अनुच्छेद ${art.number}" (${art.title.hi}) का स्पष्ट, विस्तृत और आसानी से समझ में आने वाला स्पष्टीकरण प्रदान करें। 3-4 बुलेट बिंदुओं में इसके महत्व और वास्तविक दुनिया के प्रभावों की व्याख्या करें। सादे पाठ का प्रयोग करें, कोई मार्कडाउन हेडर नहीं, बुलेट पॉइंट (•) का प्रयोग करें।`;
        
        const resEn = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: promptEn });
        const resHi = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: promptHi });
        
        art.expertNotes = {
          en: resEn.text.trim(),
          hi: resHi.text.trim()
        };
        count++;
        // rate limit protection
        await new Promise(r => setTimeout(r, 1000));
      } catch(e) {
        console.error(`Error for article ${art.number}:`, e);
      }
    }
  }
  
  const newJson = JSON.stringify(articles, null, 2);
  const newContent = content.slice(0, jsonStart) + newJson + content.slice(jsonEnd);
  
  fs.writeFileSync(filePath, newContent);
  console.log('Done writing updated articlesData.ts');
}

run();
