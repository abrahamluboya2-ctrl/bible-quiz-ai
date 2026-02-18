
import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, BookOpen, Volume2, VolumeX } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  isLast: boolean;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  onAnswer, 
  onNext, 
  isLast,
  questionNumber,
  totalQuestions
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Reset speaker on new question
  useEffect(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [question.id]);

  const handleOptionSelect = (option: string) => {
    if (hasConfirmed) return;
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    setHasConfirmed(true);
    onAnswer(selectedOption);
    // On peut auto-jouer l'explication si souhaité
    speakExplanation();
  };

  const speakExplanation = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(question.explanation);
    utterance.lang = 'fr-FR'; // Adaptable selon lang
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="w-full flex flex-col space-y-10 pb-20">
      
      {/* Question Header */}
      <div className="flex flex-col items-start fade-up">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300 dark:text-gray-600">VOIX</span>
          <Volume2 className="w-3 h-3 text-gray-200 dark:text-gray-700" />
        </div>
        <div className="bg-aiBubble dark:bg-darkBubble p-8 px-10 rounded-[2.5rem] rounded-tl-none bubble-shadow w-full border border-gray-50/50 dark:border-white/5">
          <p className="font-plume text-2xl sm:text-3xl leading-snug text-gray-800 dark:text-softBg italic">
            "{question.question}"
          </p>
          <div className="mt-4 text-[9px] font-bold tracking-widest text-gray-300 dark:text-gray-700 uppercase">
            QUESTION {questionNumber} SUR {totalQuestions}
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="grid gap-3 fade-up" style={{ animationDelay: '0.1s' }}>
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isThisCorrect = option === question.correctAnswer;
          
          let optionStyles = "flex items-center p-6 px-8 rounded-[2rem] transition-all duration-300 cursor-pointer ";
          
          if (!hasConfirmed) {
            optionStyles += isSelected 
              ? "bg-userBubble dark:bg-white text-white dark:text-userBubble shadow-lg scale-[1.02]" 
              : "bg-white dark:bg-darkBubble border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:border-gray-200 dark:hover:border-white/10";
          } else {
            if (isThisCorrect) {
              optionStyles += "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50";
            } else if (isSelected && !isCorrect) {
              optionStyles += "bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50";
            } else {
              optionStyles += "bg-white dark:bg-darkBubble opacity-40 border border-transparent";
            }
          }

          return (
            <div 
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={optionStyles}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-5 text-[11px] font-bold border transition-all ${
                isSelected ? 'bg-white/10 dark:bg-black/10 border-white/20' : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="flex-1 text-base font-semibold">{option}</span>
              {hasConfirmed && isThisCorrect && <CheckCircle2 className="w-5 h-5" />}
              {hasConfirmed && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
            </div>
          );
        })}
      </div>

      {/* Confirmation & Feedback */}
      <div className="fade-up" style={{ animationDelay: '0.2s' }}>
        {!hasConfirmed ? (
          <button 
            onClick={handleConfirm}
            disabled={!selectedOption}
            className="w-full bg-userBubble dark:bg-white py-6 rounded-[2.5rem] text-white dark:text-userBubble font-bold text-sm uppercase tracking-widest disabled:opacity-20 transition-all shadow-xl"
          >
            Confirmer ma réponse
          </button>
        ) : (
          <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
             <div className="bg-white dark:bg-darkBubble p-8 px-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 bubble-shadow relative">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400'}`}>
                      {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                   </div>
                   <span className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-600 uppercase">EXPLICATION</span>
                 </div>
                 <button 
                  onClick={speakExplanation}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isSpeaking ? 'bg-emerald-500 text-white animate-pulse' : 'bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-emerald-500'}`}
                 >
                   {isSpeaking ? <Volume2 className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                 </button>
               </div>
               <p className="font-plume text-xl text-gray-600 dark:text-gray-400 leading-relaxed italic mb-6">
                 {question.explanation}
               </p>
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-white/5 rounded-full text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border border-gray-100 dark:border-white/5">
                 <BookOpen className="w-3 h-3" />
                 Source : {question.reference}
               </div>
             </div>

             <button 
              onClick={() => {
                window.speechSynthesis.cancel();
                onNext();
              }}
              className="w-full bg-userBubble dark:bg-white py-6 rounded-[2.5rem] text-white dark:text-userBubble font-bold text-sm uppercase tracking-widest transition-all shadow-xl"
            >
              {isLast ? 'Terminer le flux' : 'Continuer'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
