import React, { useMemo } from 'react';
import { PolityTerm, Language } from '../types';
import { BookOpen, ShieldAlert, Sparkles } from 'lucide-react';

interface PolityTermsViewProps {
  terms: PolityTerm[];
  language: Language;
  searchQuery: string;
}

export const PolityTermsView: React.FC<PolityTermsViewProps> = ({ terms, language, searchQuery }) => {
  const filteredTerms = useMemo(() => {
    if (!searchQuery) return terms;
    const q = searchQuery.toLowerCase().trim();
    return terms.filter((item) => {
      const matchTerm = item.term.toLowerCase().includes(q);
      const matchHindi = item.hindiTerm.toLowerCase().includes(q);
      const matchDefHi = item.definition.hi.toLowerCase().includes(q);
      const matchDefEn = item.definition.en.toLowerCase().includes(q);
      return matchTerm || matchHindi || matchDefHi || matchDefEn;
    });
  }, [terms, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-[#ffffff] to-[#12365e] border border-slate-300 rounded-xl p-5 shadow-xl">
        <h2 className="text-lg font-bold text-slate-900 font-cinzel flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-900" />
          {language === 'hi'
            ? 'प्रमुख राजनीतिक एवं संवैधानिक शब्दावली (40+ Key Polity Concepts)'
            : 'Key Political & Constitutional Terminologies'}
        </h2>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'अराजकतावाद, निरंकुशतंत्र, साम्यवाद, फांसीवाद, बफर राज्य, नौकरशाही, प्रदत्त विधायन, फिलिबस्टर, इच्छामृत्यु तथा उत्तर प्रदेश नकल विरोधी अध्यादेश 2024 की सटीक परिभाषाएं।'
            : 'Definitive dictionary of key political terms, constitutional concepts, and the latest UP Public Examination (Prevention of Unfair Means) Ordinance 2024.'}
        </p>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((termItem, idx) => {
          const isSpecialAct = termItem.term.includes('Anti-Cheating');
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isSpecialAct
                  ? 'col-span-1 md:col-span-2 bg-gradient-to-br from-amber-950/40 via-[#ffffff] to-[#162942] border-blue-900 shadow-lg shadow-amber-950/30'
                  : 'bg-[#ffffff]/90 border-amber-500/20 hover:border-amber-500/40'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-slate-200">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      {isSpecialAct && <ShieldAlert className="w-4 h-4 text-blue-900 shrink-0" />}
                      <span>{termItem.hindiTerm}</span>
                    </h3>
                    <span className="text-xs text-blue-900 font-mono block mt-0.5">{termItem.term}</span>
                  </div>
                  {isSpecialAct && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-900 border border-amber-500/40 uppercase">
                      New 2024 Ordinance
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs mt-2">
                  <div className="text-slate-800 leading-relaxed">
                    <strong className="text-blue-900 block mb-0.5">
                      {language === 'hi' ? 'संवैधानिक / राजनीतिक परिभाषा:' : 'Definition:'}
                    </strong>
                    <p>{language === 'hi' ? termItem.definition.hi : termItem.definition.en}</p>
                  </div>
                </div>
              </div>

              {termItem.context && (
                <div className="mt-3 pt-2 border-t border-slate-200/80 text-[11px] text-blue-900/90 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-900 shrink-0" />
                  <span>{language === 'hi' ? termItem.context.hi : termItem.context.en}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
