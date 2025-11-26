import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "請配置 API Key 以啟用 AI 助手功能。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "抱歉，我現在無法回答，請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "發生錯誤，請檢查網路連線或 API Key。";
  }
};