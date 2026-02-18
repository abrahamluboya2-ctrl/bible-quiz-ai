
import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty, Language } from "../types";
import { OFFLINE_QUESTIONS, OFFLINE_QUESTIONS_EN } from "../data/offlineQuestions";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Mélange un tableau de questions (Fisher-Yates)
 */
const shuffle = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateQuestions = async (categoryName: string, categoryId: string, difficulty: Difficulty, lang: Language = 'fr', count: number = 5): Promise<Question[]> => {
  
  // Si hors-ligne, on pioche dans la base locale immédiatement
  if (!navigator.onLine) {
    console.log("Mode hors-ligne détecté, utilisation des données locales.");
    const source = lang === 'fr' ? OFFLINE_QUESTIONS : OFFLINE_QUESTIONS_EN;
    const questions = source[categoryId] || source['old-testament']; // Fallback si catégorie non trouvée
    return shuffle(questions).slice(0, count);
  }

  const diffMap = {
    EASY: lang === 'fr' ? 'Facile' : 'Easy',
    MEDIUM: lang === 'fr' ? 'Moyen' : 'Medium',
    HARD: lang === 'fr' ? 'Difficile' : 'Hard'
  };

  const prompt = `Generate a bible quiz of ${count} questions about the theme "${categoryName}" with a difficulty level "${diffMap[difficulty]}".
  Output the result in ${lang === 'fr' ? 'French' : 'English'}.
  For each question, provide: statement, 4 options, exact correct answer from options, detailed pedagogical explanation, and precise biblical reference.
  Ensure historical and theological accuracy.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
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
              correctAnswer: { type: Type.STRING },
              explanation: { type: Type.STRING },
              reference: { type: Type.STRING }
            },
            required: ["id", "question", "options", "correctAnswer", "explanation", "reference"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("IA Response is empty");
    return JSON.parse(text);
  } catch (error) {
    console.warn("Erreur IA, repli sur les données locales:", error);
    const source = lang === 'fr' ? OFFLINE_QUESTIONS : OFFLINE_QUESTIONS_EN;
    const questions = source[categoryId] || source['old-testament'];
    return shuffle(questions).slice(0, count);
  }
};
