import React from 'react';
import { ChapterMeta, Language } from '../types';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';

interface ChaptersIndexViewProps {
  chapters: ChapterMeta[];
  language: Language;
  onSelectChapter: (chapterId: string) => void;
}

export const ChaptersIndexView: React.FC<ChaptersIndexViewProps> = ({ chapters, language, onSelectChapter }) => {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#ffffff] to-[#12365e] border border-slate-300 rounded-xl p-5 shadow-xl">
        <h2 className="text-lg font-bold text-slate-900 font-cinzel flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-900" />
          {language === 'hi'
            ? 'UPSI संविधान एवं राजव्यवस्था संपूर्ण विषय-सूची (Table of Contents)'
            : 'Complete Master Table of Contents'}
        </h2>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'पीडीएफ के सभी 27 अध्यायों का प्रामाणिक संकलन। किसी भी अध्याय का विवरण देखें या सीधे अध्ययन खंड में जाएं।'
            : 'Authentic index of all 27 comprehensive chapters from the complete PDF compendium.'}
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((ch, idx) => {
          const chNum = ch.chapterNumber || ch.number || idx + 1;
          return (
            <div
              key={ch.id || `ch-${chNum}`}
              id={`chapter-index-${ch.id || chNum}`}
              className="bg-[#ffffff]/90 border border-amber-500/20 rounded-xl p-4 shadow-lg hover:border-amber-500/40 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-slate-300 text-blue-900 font-bold text-xs flex items-center justify-center font-cinzel">
                      {chNum}
                    </span>
                    <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
                      {language === 'hi' ? `अध्याय ${chNum}` : `Chapter ${chNum}`}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-2 leading-snug">
                  {language === 'hi' ? ch.title.hi : ch.title.en}
                </h3>

                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                  {language === 'hi' ? ch.description.hi : ch.description.en}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-600">
                  {language === 'hi'
                    ? `श्रेणी: ${ch.category || 'संविधान'}`
                    : `Category: ${ch.category || 'Polity'}`}
                </span>
                <button
                  onClick={() => onSelectChapter(ch.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-900 hover:text-blue-900 transition"
                >
                  <span>{language === 'hi' ? 'सामग्री देखें' : 'View Content'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
