import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PolityTerm, Language } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  BookOpen, 
  ShieldAlert, 
  Sparkles, 
  Table as TableIcon, 
  LayoutGrid, 
  Maximize2, 
  X, 
  Copy, 
  Check 
} from 'lucide-react';

interface PolityTermsViewProps {
  terms: PolityTerm[];
  language: Language;
  searchQuery: string;
}

export const PolityTermsView: React.FC<PolityTermsViewProps> = ({ terms, language, searchQuery }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'subtable'>('cards');
  const [selectedTermModal, setSelectedTermModal] = useState<PolityTerm | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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

  const handleCopyTerm = (item: PolityTerm, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `📖 ${item.hindiTerm} (${item.term})\n[हिंदी परिभाषा]: ${item.definition.hi}\n[English Definition]: ${item.definition.en}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <ScrollReveal direction="down" delay={0.1}>
        <div className="bg-gradient-to-r from-[#111d38] via-[#152549] to-[#0f1b34] border border-amber-500/25 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white font-cinzel flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              {language === 'hi'
                ? 'प्रमुख राजनीतिक एवं संवैधानिक शब्दावली कोश (40+ Key Polity Concepts)'
                : 'Key Political & Constitutional Terminologies'}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
              {language === 'hi'
                ? 'अराजकतावाद, निरंकुशतंत्र, साम्यवाद, फांसीवाद, बफर राज्य, नौकरशाही, प्रदत्त विधायन, फिलिबस्टर, इच्छामृत्यु तथा उत्तर प्रदेश नकल विरोधी अध्यादेश 2024 की सटीक परिभाषाएं।'
                : 'Definitive dictionary of key political terms, constitutional concepts, and the latest UP Public Examination (Prevention of Unfair Means) Ordinance 2024.'}
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1.5 bg-[#081022] p-1 rounded-xl border border-slate-700/80 shrink-0 no-print">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'cards'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'कार्ड व्यू' : 'Cards'}</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('subtable')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'subtable'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'शब्दावली तालिका' : 'Glossary Table'}</span>
            </motion.button>
          </div>
        </div>
      </ScrollReveal>

      {/* MASTER GLOSSARY SUB-TABLE */}
      {viewMode === 'subtable' && (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#0d172e] border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl animate-subTableSlide">
          <div className="bg-[#12203d] px-5 py-3.5 border-b border-[#1b3460] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-xs sm:text-sm">
                {language === 'hi' ? 'संवैधानिक शब्दावली की सम्पूर्ण तालिका' : 'Complete Political Concepts Matrix'}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Scroll horizontally →
            </span>
          </div>

          <div className="overflow-x-auto subtable-scrollbar">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
              <thead className="bg-[#091224] text-amber-300 border-b border-[#1b3460] sticky top-0 z-10">
                <tr>
                  <th className="p-3.5 w-14 text-center font-bold border-r border-[#1b3460]">#</th>
                  <th className="p-3.5 w-48 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'हिंदी शब्दावली' : 'Hindi Term'}
                  </th>
                  <th className="p-3.5 w-48 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'English Concept' : 'English Concept'}
                  </th>
                  <th className="p-3.5 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'सटीक संवैधानिक परिभाषा' : 'Constitutional Definition'}
                  </th>
                  <th className="p-3.5 w-20 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTerms.map((termItem, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedTermModal(termItem)}
                    className={`border-b border-[#132545] transition-colors cursor-pointer ${
                      idx % 2 === 0 ? 'bg-[#0b1428]' : 'bg-[#070e1d]'
                    } hover:bg-[#14264d]`}
                  >
                    <td className="p-3.5 text-center font-mono font-bold text-amber-400 border-r border-[#1b3460] text-xs">
                      {idx + 1}
                    </td>
                    <td className="p-3.5 font-bold text-white border-r border-[#1b3460]">
                      {termItem.hindiTerm}
                    </td>
                    <td className="p-3.5 font-mono text-xs text-sky-300 border-r border-[#1b3460]">
                      {termItem.term}
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] text-slate-200 leading-relaxed reading-content-hindi">
                      <p>{language === 'hi' ? termItem.definition.hi : termItem.definition.en}</p>
                    </td>
                    <td className="p-3.5 text-center">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTermModal(termItem);
                        }}
                        className="p-1.5 rounded-lg bg-[#14264a] text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition"
                        title="Open Details Pop-up"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </ScrollReveal>
      )}

      {/* TERMS GRID VIEW */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((termItem, idx) => {
            const isSpecialAct = termItem.term.includes('Anti-Cheating');
            const isCopied = copiedIndex === idx;

            return (
              <ScrollReveal key={idx} delay={0.05 * (idx % 10)} direction="up">
                <div
                  onClick={() => setSelectedTermModal(termItem)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-lg cursor-pointer ${
                    isSpecialAct
                      ? 'col-span-1 md:col-span-2 bg-gradient-to-br from-[#16294d] via-[#111d38] to-[#0e1933] border-amber-500/50 shadow-black/40'
                      : 'bg-[#0d172e] border-slate-800 hover:border-amber-500/40'
                  }`}
                >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2 pb-2.5 border-b border-slate-800">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 leading-snug">
                        {isSpecialAct && <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />}
                        <span>{termItem.hindiTerm}</span>
                      </h3>
                      <div className="text-xs text-sky-400 font-mono mt-0.5">{termItem.term}</div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleCopyTerm(termItem, idx, e)}
                        className="p-1.5 rounded text-slate-400 hover:text-amber-400 hover:bg-[#142345] transition"
                        title="Copy term definition"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </motion.button>

                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTermModal(termItem);
                        }}
                        className="p-1.5 rounded text-slate-400 hover:text-amber-400 hover:bg-[#142345] transition"
                        title="Open Details Pop-up"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-200 reading-content-hindi leading-relaxed mt-2">
                    {language === 'hi' ? termItem.definition.hi : termItem.definition.en}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{language === 'hi' ? termItem.definition.en.slice(0, 45) + '...' : termItem.definition.hi.slice(0, 45) + '...'}</span>
                  <span className="text-amber-400 font-semibold">पॉप-अप में पढ़ें →</span>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      )}

      {/* TERM DETAIL POP-UP MODAL */}
      {selectedTermModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedTermModal(null)}
        >
          <div
            className="bg-[#0d172e] border border-amber-500/40 rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden animate-modalPopUp"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-gradient-to-r from-[#142347] to-[#0c162e] border-b border-amber-500/25 px-5 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                  {selectedTermModal.hindiTerm}
                </h3>
                <div className="text-xs font-mono text-sky-400">
                  {selectedTermModal.term}
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTermModal(null)}
                className="p-1.5 rounded-lg bg-[#18294d] hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
              <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-amber-400 text-xs uppercase block">
                  🇮🇳 प्रामाणिक हिंदी परिभाषा (Hindi Definition):
                </span>
                <p className="text-slate-100 reading-content-hindi leading-relaxed text-sm sm:text-[15px]">
                  {selectedTermModal.definition.hi}
                </p>
              </div>

              <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-sky-400 text-xs uppercase block">
                  🇬🇧 English Definition & Concepts:
                </span>
                <p className="text-slate-300 reading-content-english leading-relaxed text-xs sm:text-sm">
                  {selectedTermModal.definition.en}
                </p>
              </div>
            </div>

            <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-end">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTermModal(null)}
                className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                {language === 'hi' ? 'बंद करें' : 'Close'}
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
