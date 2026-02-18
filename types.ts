
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  reference: string;
}

export interface QuizCategory {
  id: string;
  name: { fr: string, en: string };
  icon: string;
  description: { fr: string, en: string };
  color: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  isFinished: boolean;
  userAnswers: string[];
  loading: boolean;
  error: string | null;
}

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BibleBook {
  name: string;
  chapters: Record<number, BibleVerse[]>;
}

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
}

export type Language = 'fr' | 'en';
export type AppView = 'chat' | 'quiz' | 'bible';
