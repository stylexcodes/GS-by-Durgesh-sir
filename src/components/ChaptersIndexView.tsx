import React from 'react';
import { motion } from 'motion/react';
import { ChapterMeta, Language } from '../types';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ChaptersIndexViewProps {
  chapters: ChapterMeta[];
  language: Language;
  onSelectChapter: (chapterId: string) => void;
}

export const ChaptersIndexView: React.FC<ChaptersIndexViewProps> = ({ chapters, language, onSelectChapter }) => {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <ScrollReveal direction="down" delay={0.1}>
        <div className="bg-gradient-to-r from-[#111d38] to-[#162747] border border-amber-500/25 rounded-xl p-5 shadow-xl">
          <h2 className="text-lg font-bold text-white font-cinzel flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            {language === 'hi'
              ? 'UPSI संविधान एवं राजव्यवस्था संपूर्ण विषय-सूची (Table of Contents)'
              : 'Complete Master Table of Contents'}
          </h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {language === 'hi'
              ? 'पीडीएफ के सभी 27 अध्यायों का प्रामाणिक संकलन। किसी भी अध्याय का विवरण देखें या सीधे अध्ययन खंड में जाएं।'
              : 'Authentic index of all 27 comprehensive chapters from the complete PDF compendium.'}
          </p>
        </div>
      </ScrollReveal>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((ch, idx) => {
          const chNum = ch.chapterNumber || ch.number || idx + 1;
          return (
            <ScrollReveal key={ch.id || `ch-${chNum}`} delay={0.05 * (idx % 10)} direction="up">
              <div
                id={`chapter-index-${ch.id || chNum}`}
                className="bg-[#111d38]/90 border border-slate-800 rounded-xl p-4 shadow-lg hover:border-amber-500/40 transition flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold text-xs flex items-center justify-center font-cinzel">
                        {chNum}
                      </span>
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                        {language === 'hi' ? `अध्याय ${chNum}` : `Chapter ${chNum}`}
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

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    {language === 'hi'
                      ? `श्रेणी: ${ch.category || 'संविधान'}`
                      : `Category: ${ch.category || 'Polity'}`}
                  </span>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => onSelectChapter(ch.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>{language === 'hi' ? 'सामग्री देखें' : 'View Content'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

