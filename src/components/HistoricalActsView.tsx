import React, { useState, useMemo } from 'react';
import { HistoricalAct, Language } from '../types';
import { Calendar, ChevronDown, ChevronUp, Sparkles, Target, AlertCircle, BookOpen } from 'lucide-react';

interface HistoricalActsViewProps {
  acts: HistoricalAct[];
  language: Language;
  searchQuery: string;
}

export const HistoricalActsView: React.FC<HistoricalActsViewProps> = ({ acts, language, searchQuery }) => {
  const [expandedActs, setExpandedActs] = useState<Record<string, boolean>>({
    'regulating-act-1773': true,
    'charter-act-1833': true,
    'government-of-india-act-1935': true,
  });

  const filteredActs = useMemo(() => {
    if (!searchQuery) return acts;
    const q = searchQuery.toLowerCase().trim();
    return acts.filter((act) => {
      const matchYear = act.year.toString().includes(q);
      const matchTitleHi = act.title.hi.toLowerCase().includes(q);
      const matchTitleEn = act.title.en.toLowerCase().includes(q);
      const matchBgHi = act.background.hi.toLowerCase().includes(q);
      const matchBgEn = act.background.en.toLowerCase().includes(q);
      const matchProvisions = act.provisions.some(
        (p) => p.hi.toLowerCase().includes(q) || p.en.toLowerCase().includes(q)
      );
      return matchYear || matchTitleHi || matchTitleEn || matchBgHi || matchBgEn || matchProvisions;
    });
  }, [acts, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedActs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-[#111d38] to-[#162747] border border-amber-500/25 rounded-xl p-5 shadow-xl">
        <h2 className="text-lg font-bold text-white font-cinzel flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          {language === 'hi'
            ? 'भारतीय संविधान का ऐतिहासिक विकास (1773 - 1947)'
            : 'Historical Evolution of the Indian Constitution (1773 - 1947)'}
        </h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'ईस्ट इंडिया कंपनी के शासन (1773-1853) से लेकर ब्रिटिश ताज के शासन (1858-1947) तक के सभी 15 प्रमुख संवैधानिक अधिनियम, प्रावधान व परीक्षा उपयोगी ट्रिक्स।'
            : 'All 15 major constitutional milestones from Company Rule (1773-1853) to Crown Rule (1858-1947) with detailed legal provisions and memory mnemonics.'}
        </p>
      </div>

      {/* Acts Timeline List */}
      <div className="space-y-4">
        {filteredActs.map((act) => {
          const isExpanded = expandedActs[act.id] || false;
          return (
            <div
              key={act.id}
              id={`act-card-${act.id}`}
              className="bg-[#111d38]/90 border border-amber-500/25 rounded-xl shadow-lg overflow-hidden transition"
            >
              {/* Card Header */}
              <div
                onClick={() => toggleExpand(act.id)}
                className="p-4 cursor-pointer hover:bg-[#162544] flex items-center justify-between gap-4 border-b border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <Calendar className="w-4 h-4 mb-0.5 text-amber-400" />
                    <span className="text-sm font-bold font-cinzel">{act.year}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {language === 'hi' ? act.title.hi : act.title.en}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {language === 'hi' ? act.background.hi : act.background.en}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-amber-400 font-medium hidden sm:inline">
                    {isExpanded ? (language === 'hi' ? 'संक्षिप्त' : 'Close') : (language === 'hi' ? 'विस्तार' : 'Expand')}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-400" />
                  )}
                </div>
              </div>

              {/* Collapsible Content - forced visible in print */}
              <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block p-5 space-y-4 bg-[#0c162c]/60 print:bg-white`}>
                {/* Background Section */}
                <div className="bg-[#0e1a33] print:bg-gray-50 p-3.5 rounded-lg border border-slate-800 print:border-gray-300">
                  <h4 className="text-xs font-bold text-amber-400 print:text-black uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 no-print" />
                    {language === 'hi' ? 'पृष्ठभूमि एवं संदर्भ:' : 'Historical Background:'}
                  </h4>
                  <p className="text-xs text-slate-200 print:text-black leading-relaxed">
                    {language === 'hi' ? act.background.hi : act.background.en}
                  </p>
                </div>

                {/* Objectives */}
                {act.objectives && act.objectives.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-sky-300 print:text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 no-print" />
                      {language === 'hi' ? 'प्रमुख उद्देश्य:' : 'Core Objectives:'}
                    </h4>
                    <ul className="space-y-1.5 pl-2">
                      {act.objectives.map((obj, idx) => (
                        <li key={idx} className="text-xs text-slate-300 print:text-gray-800 flex items-start gap-2">
                          <span className="text-amber-400 print:text-black font-bold">•</span>
                          <span>{language === 'hi' ? obj.hi : obj.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Provisions */}
                <div>
                  <h4 className="text-xs font-bold text-amber-400 print:text-black uppercase tracking-wider mb-2">
                    {language === 'hi' ? 'अधिनियम के मुख्य प्रावधान (कानूनी बिंदु):' : 'Key Statutory Provisions:'}
                  </h4>
                  <div className="space-y-2">
                    {act.provisions.map((prov, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0e1a33] print:bg-gray-50 p-3 rounded-lg border border-slate-800 print:border-gray-300 text-xs text-slate-200 print:text-black leading-relaxed"
                      >
                        <div className="font-medium text-white print:text-black mb-1">
                          {idx + 1}. {language === 'hi' ? prov.hi : prov.en}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mnemonic Trick if available */}
                {act.trickMnemonic && (
                  <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/15 print:bg-gray-100 border border-amber-500/40 print:border-black p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300 print:text-black mb-1">
                      <Sparkles className="w-4 h-4 text-amber-400 print:text-black no-print" />
                      <span>{language === 'hi' ? 'UPSI याद रखने की ट्रिक (Mnemonic):' : 'Exam Memory Mnemonic:'}</span>
                    </div>
                    <p className="text-xs text-amber-200 print:text-black font-medium">
                      {language === 'hi' ? act.trickMnemonic.hi : act.trickMnemonic.en}
                    </p>
                  </div>
                )}

                {/* Special Historical Notes */}
                {act.notes && act.notes.length > 0 && (
                  <div className="bg-[#0e1a33] print:bg-gray-50 p-3 rounded-lg border border-slate-800 print:border-gray-300 text-xs space-y-1">
                    <span className="font-bold text-amber-400 print:text-black block">
                      {language === 'hi' ? 'विशेष टिप्पणी एवं परीक्षा फैक्ट:' : 'Special Exam Notes:'}
                    </span>
                    {act.notes.map((note, idx) => (
                      <p key={idx} className="text-slate-300 print:text-gray-800 leading-relaxed">
                        {language === 'hi' ? note.hi : note.en}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
