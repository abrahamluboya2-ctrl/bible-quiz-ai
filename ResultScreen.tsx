
import React from 'react';
import { Trophy, RefreshCw, Home, Zap, Share2, Target } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onGoHome: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRestart, onGoHome }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let title = "Sagesse acquise";
  let message = "Votre résonance spirituelle est en accord avec les textes.";
  let Icon = Target;

  if (percentage === 100) {
    title = "Sagesse absolue";
    message = "Synchronisation totale. Vous avez transcendé les limites de la connaissance.";
    Icon = Trophy;
  } else if (percentage >= 70) {
    title = "Grande affinité";
    message = "Votre compréhension des anciens protocoles est remarquable.";
    Icon = Zap;
  }

  return (
    <div className="max-w-xl mx-auto text-center px-4 animate-in zoom-in duration-500">
      <div className="bg-white dark:bg-darkBubble rounded-[3rem] p-12 border border-gray-100 dark:border-white/5 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-userBubble dark:via-softBg to-transparent opacity-20"></div>
        
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-gray-50 dark:border-white/5 flex items-center justify-center text-userBubble dark:text-softBg">
              <Icon className="w-16 h-16 opacity-80" />
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray={2 * Math.PI * 60}
                  strokeDashoffset={2 * Math.PI * 60 * (1 - percentage / 100)}
                  className="text-userBubble dark:text-softBg transition-all duration-1000 ease-out opacity-20"
                />
              </svg>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-userBubble dark:bg-white text-white dark:text-userBubble px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              {percentage}%
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-plume italic font-bold text-gray-800 dark:text-softBg mb-4 tracking-tight">{title}</h2>
        <p className="text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">{message}</p>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-white/5 rounded-[2rem] p-8 border border-gray-100 dark:border-white/5">
            <div className="text-4xl font-sans font-bold text-gray-800 dark:text-softBg">{score}</div>
            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2">Correctes</div>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 rounded-[2rem] p-8 border border-gray-100 dark:border-white/5">
            <div className="text-4xl font-sans font-bold text-gray-800 dark:text-softBg">{totalQuestions}</div>
            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2">Questions</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={onRestart}
            className="w-full bg-userBubble dark:bg-white py-6 rounded-[2.5rem] text-white dark:text-userBubble font-bold text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-3"
          >
            <RefreshCw className="w-5 h-5" /> Recommencer
          </button>
          <div className="flex gap-4">
            <button 
              onClick={onGoHome}
              className="flex-1 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 py-6 rounded-[2.5rem] text-gray-600 dark:text-softBg font-bold text-sm uppercase tracking-widest shadow-sm flex items-center justify-center gap-3"
            >
              <Home className="w-5 h-5" /> Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
