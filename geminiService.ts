
import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPerfumeRecommendation = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for a perfume with these preferences: "${userInput}". 
      Analyze their needs and provide a professional recommendation including scent profile, occasion, and why it fits. 
      Keep it concise and helpful for a marketplace buyer.`,
      config: {
        temperature: 0.7,
        // Removed maxOutputTokens to follow guidelines and avoid potential blocked responses
      }
    });
    // Return text content directly from the response object's text property
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, asisten AI kami sedang istirahat. Silakan coba lagi nanti.";
  }
};
