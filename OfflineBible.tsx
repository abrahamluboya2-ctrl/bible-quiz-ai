
import React, { useState } from 'react';
import { OFFLINE_BIBLE_FR, OFFLINE_BIBLE_EN } from '../data/bibleData';
import { Language } from '../types';
import { Book, ChevronRight, Search } from 'lucide-react';

interface OfflineBibleProps {
  lang: Language;
}

const OfflineBible: React.FC<OfflineBibleProps> = ({ lang }) => {
  const bible = lang === 'fr' ? OFFLINE_BIBLE_FR : OFFLINE_BIBLE_EN;
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  if (!selectedBook) {
    return (
      <div className="space-y-6 fade-up">
        <h2 className="font-plume text-4xl italic text-gray-800 dark:text-softBg mb-8">
          {lang === 'fr' ? 'Sainte Bible' : 'Holy Bible'}
        </h2>
        <div className="grid gap-4">
          {Object.keys(bible).map(bookName => (
            <button
              key={bookName}
              onClick={() => setSelectedBook(bookName)}
              className="flex items-center justify-between p-6 bg-white dark:bg-darkBubble rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600">
                  <Book className="w-5 h-5" />
                </div>
                <span className="font-bold uppercase tracking-widest text-sm text-gray-700 dark:text-softBg">{bookName}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  const chapters = bible[selectedBook].chapters;

  if (!selectedChapter) {
    return (
      <div className="space-y-6 fade-up">
        <button onClick={() => setSelectedBook(null)} className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mb-4 block">
          ← {lang === 'fr' ? 'RETOUR AUX LIVRES' : 'BACK TO BOOKS'}
        </button>
        <h3 className="font-plume text-3xl italic text-gray-800 dark:text-softBg mb-6">{selectedBook}</h3>
        <div className="grid grid-cols-4 gap-3">
          {Object.keys(chapters).map(num => (
            <button
              key={num}
              onClick={() => setSelectedChapter(parseInt(num))}
              className="aspect-square flex items-center justify-center bg-white dark:bg-darkBubble rounded-2xl border border-gray-100 dark:border-white/5 font-bold text-gray-700 dark:text-softBg hover:bg-emerald-500 hover:text-white transition-colors"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 fade-up pb-20">
      <button onClick={() => setSelectedChapter(null)} className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mb-4 block">
        ← {lang === 'fr' ? 'RETOUR AUX CHAPITRES' : 'BACK TO CHAPTERS'}
      </button>
      <div className="space-y-6">
        <h3 className="font-plume text-3xl italic text-gray-800 dark:text-softBg">
          {selectedBook} {selectedChapter}
        </h3>
        <div className="space-y-6">
          {chapters[selectedChapter].map(verse => (
            <div key={verse.verse} className="flex gap-4 group">
              <span className="text-[10px] font-bold text-emerald-500/50 mt-1">{verse.verse}</span>
              <p className="font-plume text-xl text-gray-700 dark:text-softBg leading-relaxed italic">
                {verse.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfflineBible;
