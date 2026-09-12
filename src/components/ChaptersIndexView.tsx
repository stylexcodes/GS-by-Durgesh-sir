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
      <div className="bg-gradient-to-r from-[#0f2744] to-[#12365e] border border-amber-500/30 rounded-xl p-5 shadow-xl">
        <h2 className="text-lg font-bold text-white font-cinzel flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          {language === 'hi'
            ? 'UPSI संविधान एवं राजव्यवस्था संपूर्ण 228 पृष्ठों की विषय-सूची (Table of Contents)'
            : 'Complete 228-Page Master Table of Contents'}
        </h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'पीडीएफ के सभी 23 अध्यायों का प्रामाणिक पृष्ठ-वार संकलन। किसी भी अध्याय का विवरण देखें या सीधे अध्ययन खंड में जाएं।'
            : 'Authentic page-by-page index of all 23 comprehensive chapters from the 228-page PDF compendium.'}
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
              className="bg-[#0f2744]/90 border border-amber-500/20 rounded-xl p-4 shadow-lg hover:border-amber-500/40 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs flex items-center justify-center font-cinzel">
                      {chNum}
                    </span>
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                      {language === 'hi' ? `अध्याय ${chNum}` : `Chapter ${chNum}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0a192f] border border-slate-800 text-[11px] text-slate-300 font-mono">
                    <FileText className="w-3 h-3 text-amber-400" />
                    <span>
                      {language === 'hi'
                        ? `पृष्ठ ${ch.pageRange}`
                        : `Pp. ${ch.pageRange}`}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mt-2 leading-snug">
                  {language === 'hi' ? ch.title.hi : ch.title.en}
                </h3>

                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-3">
                  {language === 'hi' ? ch.description.hi : ch.description.en}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {language === 'hi'
                    ? `श्रेणी: ${ch.category || 'संविधान'}`
                    : `Category: ${ch.category || 'Polity'}`}
                </span>
                <button
                  onClick={() => onSelectChapter(ch.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
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
