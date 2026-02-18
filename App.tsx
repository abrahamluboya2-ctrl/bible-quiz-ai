
import React, { useState, useEffect, useRef } from 'react';
import { CATEGORIES, ICON_MAP } from './constants';
import { Question, QuizState, Difficulty, QuizCategory, Language, AppView } from './types';
import { generateQuestions } from './services/geminiService';
import QuizCard from './components/QuizCard';
import ResultScreen from './components/ResultScreen';
import OfflineBible from './components/OfflineBible';
import { 
  Menu, 
  Moon, 
  Sun, 
  Edit3, 
  ArrowUpDown,
  Volume2, 
  X, 
  ChevronLeft,
  WifiOff,
  Book,
  MessageCircle
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'voix' | 'disciple';
  text: string;
}

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [currentView, setCurrentView] = useState<AppView>('chat');
  
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setMessages([
      {
        id: '1',
        sender: 'voix',
        text: lang === 'fr' 
          ? "Shalom. Quiz Biblique. Je suis à votre écoute pour explorer les profondeurs infinies du texte sacré."
          : "Shalom. Bible Quiz. I am here to listen and explore the infinite depths of the sacred text."
      }
    ]);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [lang]);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    questions: [],
    isFinished: false,
    userAnswers: [],
    loading: false,
    error: null,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const startQuiz = async (cat: QuizCategory) => {
    setIsMenuOpen(false);
    setCurrentView('quiz');
    setQuizState(prev => ({ 
      ...prev, 
      loading: true, 
      error: null, 
      currentQuestionIndex: 0, 
      score: 0, 
      isFinished: false, 
      questions: [], 
      userAnswers: [] 
    }));
    
    try {
      const questions = await generateQuestions(cat.name[lang], cat.id, Difficulty.MEDIUM, lang, 5);
      setQuizState(prev => ({ ...prev, questions, loading: false }));
    } catch (error) {
      setQuizState(prev => ({ ...prev, loading: false, error: "Transmission error." }));
    }
  };

  const resetToChat = () => {
    setCurrentView('chat');
    setQuizState(prev => ({ ...prev, questions: [], isFinished: false, error: null }));
  };

  const openBible = () => {
    setCurrentView('bible');
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 bg-softBg dark:bg-darkBg text-userBubble dark:text-softBg`}>
      
      {/* Header UI */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-softBg/80 dark:bg-darkBg/80 backdrop-blur-md">
        
        {/* Flèches avec Lumière de Soleil Verte */}
        <div className="relative flex items-center justify-center">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-darkBubble border border-emerald-500/20 dark:border-emerald-500/40 shadow-sm text-emerald-600 dark:text-emerald-400 overflow-visible relative sun-glow-emerald">
            <ArrowUpDown className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full"></div>
          </button>
        </div>

        {/* Le Noyau (Bouton Menu Central) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center bg-white dark:bg-darkBubble border border-gray-100 dark:border-white/5 shadow-md text-gray-700 dark:text-softBg transition-all duration-500 transform ${isMenuOpen ? 'rotate-180 scale-110 opacity-0 pointer-events-none' : 'hover:scale-105 active:scale-95'}`}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="flex items-center gap-2">
          {!isOnline && <WifiOff className="w-5 h-5 text-rose-500 animate-pulse mr-2" />}
          <div className="flex bg-white dark:bg-darkBubble rounded-full p-1 border border-gray-100 dark:border-white/5 shadow-sm">
            <button className="p-2 text-gray-400"><Edit3 className="w-4 h-4" /></button>
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="p-1 px-2 text-[11px] font-bold text-gray-700 dark:text-gray-300 flex items-center"
            >
              {lang === 'fr' ? '🇫🇷' : '🇺🇸'}
            </button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-400 dark:text-yellow-400"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-32 pb-40 px-6 max-w-2xl mx-auto w-full">
        {quizState.error && (
          <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-2xl flex items-center gap-3 text-rose-600 dark:text-rose-400 text-sm font-medium animate-in fade-in slide-in-from-top-4">
            <WifiOff className="w-4 h-4" />
            {quizState.error}
            <button onClick={() => setQuizState(p => ({...p, error: null}))} className="ml-auto text-rose-400 hover:text-rose-600"><X className="w-4 h-4" /></button>
          </div>
        )}

        {currentView === 'bible' && (
          <div className="fade-up">
             <button 
              onClick={resetToChat}
              className="mb-8 flex items-center text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase hover:text-gray-600 dark:hover:text-gray-300"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> {lang === 'fr' ? 'RETOUR AU CHAT' : 'BACK TO CHAT'}
            </button>
            <OfflineBible lang={lang} />
          </div>
        )}

        {currentView === 'quiz' && (
          <>
            {quizState.loading ? (
              <div className="flex-1 flex flex-col items-center justify-center fade-up">
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">VOIX</div>
                <div className="bg-white dark:bg-darkBubble p-8 rounded-[2rem] bubble-shadow max-w-[85%] border dark:border-white/5">
                  <p className="font-plume text-xl italic text-gray-400 animate-pulse">...</p>
                </div>
              </div>
            ) : quizState.isFinished ? (
              <ResultScreen 
                score={quizState.score} 
                totalQuestions={quizState.questions.length} 
                onRestart={() => startQuiz(CATEGORIES.find(c => c.id === quizState.questions[0]?.id.split('0')[0]) || CATEGORIES[0])} 
                onGoHome={resetToChat} 
              />
            ) : quizState.questions.length > 0 ? (
              <div className="fade-up w-full">
                <button 
                  onClick={resetToChat}
                  className="mb-8 flex items-center text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> {lang === 'fr' ? 'RETOUR AU CHAT' : 'BACK TO CHAT'}
                </button>
                <QuizCard 
                  question={quizState.questions[quizState.currentQuestionIndex]}
                  questionNumber={quizState.currentQuestionIndex + 1}
                  totalQuestions={quizState.questions.length}
                  onAnswer={(a) => {
                    const correct = a === quizState.questions[quizState.currentQuestionIndex].correctAnswer;
                    setQuizState(prev => ({ ...prev, score: correct ? prev.score + 1 : prev.score, userAnswers: [...prev.userAnswers, a] }));
                  }}
                  onNext={() => {
                    if (quizState.currentQuestionIndex + 1 < quizState.questions.length) {
                      setQuizState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
                    } else {
                      setQuizState(prev => ({ ...prev, isFinished: true }));
                    }
                  }}
                  isLast={quizState.currentQuestionIndex === quizState.questions.length - 1}
                />
              </div>
            ) : null}
          </>
        )}

        {currentView === 'chat' && (
          <div ref={scrollRef} className="flex-1 space-y-12 overflow-y-auto no-scrollbar pb-10">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'disciple' ? 'items-end' : 'items-start'} fade-up`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300 dark:text-gray-600">
                    {msg.sender === 'voix' ? (lang === 'fr' ? 'VOIX' : 'VOICE') : 'DISCIPLE'}
                  </span>
                  {msg.sender === 'voix' && <Volume2 className="w-3 h-3 text-gray-200 dark:text-gray-700" />}
                </div>
                <div className={`
                  p-8 px-10 rounded-[2.5rem] max-w-[90%] font-plume text-xl sm:text-2xl leading-relaxed
                  ${msg.sender === 'voix' 
                    ? 'bg-aiBubble dark:bg-darkBubble border border-gray-50/50 dark:border-white/5 bubble-shadow text-gray-800 dark:text-softBg rounded-tl-none' 
                    : 'bg-userBubble dark:bg-white text-white dark:text-userBubble rounded-tr-none'
                  }
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Status & Version */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 pb-10 bg-gradient-to-t from-softBg dark:from-darkBg via-softBg/50 dark:via-darkBg/50 to-transparent z-40">
        <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
          <div className="flex-1"></div>
          
          {/* Version Center */}
          <div className="flex-1 flex justify-center">
            <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 dark:text-gray-600 uppercase">VERSION ABL</span>
          </div>

          {/* Status Right */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-statusBlue shadow-[0_0_8px_#60a5fa]' : 'bg-rose-500 shadow-[0_0_8px_#f43f5e]'} animate-pulse`}></div>
            <span className="text-[9px] font-bold tracking-[0.2em] text-gray-300 dark:text-gray-700 uppercase">
              {isOnline ? 'ONLINE' : 'OFFLINE'}
            </span>
          </div>
        </div>
      </footer>

      {/* Menu Overlay : L'Expansion du Noyau */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-softBg/95 dark:bg-darkBg/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8 nucleus-expand overflow-y-auto">
          
          {/* Bouton Retour / Fermer */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 left-8 flex items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-white dark:bg-darkBubble border border-gray-100 dark:border-white/5 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-emerald-500 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 group-hover:text-gray-600 dark:group-hover:text-softBg transition-colors">
              {lang === 'fr' ? 'Retour' : 'Back'}
            </span>
          </button>

          {/* Sélecteur de Navigation Globale */}
          <div className="flex gap-4 mb-12">
            <button 
              onClick={resetToChat}
              className={`p-6 rounded-[2rem] flex flex-col items-center gap-3 transition-all ${currentView === 'chat' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-white dark:bg-darkBubble border border-gray-100 dark:border-white/5 text-gray-400'}`}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Chat</span>
            </button>
            <button 
              onClick={openBible}
              className={`p-6 rounded-[2rem] flex flex-col items-center gap-3 transition-all ${currentView === 'bible' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-white dark:bg-darkBubble border border-gray-100 dark:border-white/5 text-gray-400'}`}
            >
              <Book className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Bible</span>
            </button>
          </div>
          
          <div className="text-center mb-12 transform transition-all duration-700">
            <h2 className="font-plume italic text-6xl mb-4 text-gray-800 dark:text-softBg tracking-tight">
              {lang === 'fr' ? 'Quizz Biblique' : 'Bible Quizzes'}
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          </div>
          
          {/* Grille de catégories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl px-4">
            {CATEGORIES.map((cat, index) => (
              <button 
                key={cat.id}
                onClick={() => startQuiz(cat)}
                className="p-7 rounded-[2.5rem] bg-white dark:bg-darkBubble border border-gray-100 dark:border-white/5 shadow-lg flex items-center gap-6 text-left hover:scale-[1.03] hover:border-emerald-500/30 transition-all duration-300 group magnetic-item"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`p-4 rounded-3xl bg-gray-50 dark:bg-white/5 text-gray-400 group-hover:bg-userBubble group-hover:text-white dark:group-hover:bg-softBg dark:group-hover:text-userBubble transition-all duration-500 shadow-sm`}>
                  {ICON_MAP[cat.icon]}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-800 dark:text-softBg uppercase tracking-widest">{cat.name[lang]}</div>
                  <div className="text-[11px] text-gray-400 dark:text-gray-500 font-medium leading-tight mt-1">{cat.description[lang]}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 flex gap-10 opacity-70">
             <button onClick={() => setLang('fr')} className={`text-[10px] font-bold tracking-[0.3em] transition-all ${lang === 'fr' ? 'text-emerald-500 border-b border-emerald-500 pb-1' : 'text-gray-400 hover:text-gray-600'}`}>FRANÇAIS</button>
             <button onClick={() => setLang('en')} className={`text-[10px] font-bold tracking-[0.3em] transition-all ${lang === 'en' ? 'text-emerald-500 border-b border-emerald-500 pb-1' : 'text-gray-400 hover:text-gray-600'}`}>ENGLISH</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
