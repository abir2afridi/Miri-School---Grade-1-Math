import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMathQuiz = async (): Promise<QuizQuestion[]> => {
  if (!apiKey) {
    console.warn("No API Key provided, returning mock data.");
    return [
      {
        id: 'mock1',
        question: "5 + 3 = ?",
        options: ["7", "8", "9"],
        correctAnswerIndex: 1
      },
      {
        id: 'mock2',
        question: "Which equals 10?",
        options: ["5 + 5", "4 + 4", "3 + 6"],
        correctAnswerIndex: 0
      }
    ];
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate 2 fun math addition multiple choice questions for a 1st grader. Use emojis in the question string to represent numbers if possible (e.g. '🍎🍎 + 🍎 = ?' or '2 🐶 + 3 🐶 = ?'). One should be visual counting, one simple number addition.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswerIndex: { type: Type.INTEGER }
            },
            required: ["id", "question", "options", "correctAnswerIndex"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as QuizQuestion[];
    }
    return [];
  } catch (error) {
    console.error("Failed to generate quiz:", error);
    return [];
  }
};