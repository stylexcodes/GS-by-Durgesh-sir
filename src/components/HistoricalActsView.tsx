import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { HistoricalAct, Language } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Target, 
  AlertCircle, 
  BookOpen, 
  Table as TableIcon, 
  LayoutGrid, 
  Maximize2, 
  X, 
  Copy, 
  Check 
} from 'lucide-react';

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
  const [viewMode, setViewMode] = useState<'timeline' | 'subtable'>('timeline');
  const [selectedActModal, setSelectedActModal] = useState<HistoricalAct | null>(null);
  const [copiedActId, setCopiedActId] = useState<string | null>(null);

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

  const handleCopyAct = (act: HistoricalAct, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `📜 ${act.year} - ${act.title.hi} (${act.title.en})\n[Background]: ${act.background.hi}\n[Provisions]:\n${act.provisions.map((p, i) => `${i + 1}. ${p.hi}`).join('\n')}${
      act.trickMnemonic ? `\n[Exam Trick]: ${act.trickMnemonic.hi}` : ''
    }`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedActId(act.id);
      setTimeout(() => setCopiedActId(null), 2000);
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
                ? 'भारतीय संविधान का ऐतिहासिक विकास (1773 - 1947)'
                : 'Historical Evolution of the Indian Constitution (1773 - 1947)'}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
              {language === 'hi'
                ? 'ईस्ट इंडिया कंपनी के शासन (1773-1853) से लेकर ब्रिटिश ताज के शासन (1858-1947) तक के सभी 15 प्रमुख संवैधानिक अधिनियम, प्रावधान व परीक्षा उपयोगी ट्रिक्स।'
                : 'All 15 major constitutional milestones from Company Rule (1773-1853) to Crown Rule (1858-1947) with detailed legal provisions and memory mnemonics.'}
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-[#081022] p-1 rounded-xl border border-slate-700/80 shrink-0 no-print">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'timeline'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'टाइमलाइन व्यू' : 'Timeline'}</span>
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
              <span>{language === 'hi' ? 'कालक्रम तालिका' : 'Chronology Sub-Table'}</span>
            </motion.button>
          </div>
        </div>
      </ScrollReveal>

      {/* CHRONOLOGY MASTER SUB-TABLE VIEW */}
      {viewMode === 'subtable' && (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#0d172e] border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl animate-subTableSlide">
          <div className="bg-[#12203d] px-5 py-3.5 border-b border-[#1b3460] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-xs sm:text-sm">
                {language === 'hi' ? 'ऐतिहासिक अधिनियमों की संपूर्ण कालक्रम तालिका (1773-1947)' : 'All Historical Acts Chronological Master Matrix'}
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
                  <th className="p-3.5 w-24 text-center font-bold border-r border-[#1b3460]">वर्ष (Year)</th>
                  <th className="p-3.5 w-56 font-bold border-r border-[#1b3460]">अधिनियम (Act)</th>
                  <th className="p-3.5 w-32 font-bold border-r border-[#1b3460]">शासन काल (Era)</th>
                  <th className="p-3.5 font-bold border-r border-[#1b3460]">प्रमुख प्रावधान (Core Provisions)</th>
                  <th className="p-3.5 w-20 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredActs.map((act, idx) => {
                  const isCompany = act.year <= 1853;
                  return (
                    <tr
                      key={act.id}
                      onClick={() => setSelectedActModal(act)}
                      className={`border-b border-[#132545] transition-colors cursor-pointer ${
                        idx % 2 === 0 ? 'bg-[#0b1428]' : 'bg-[#070e1d]'
                      } hover:bg-[#14264d]`}
                    >
                      <td className="p-3.5 text-center font-mono font-bold text-amber-400 border-r border-[#1b3460] text-sm">
                        <span className="px-2 py-1 rounded bg-amber-500/15 border border-amber-500/30">
                          {act.year}
                        </span>
                      </td>
                      <td className="p-3.5 font-semibold text-white border-r border-[#1b3460]">
                        <div>{language === 'hi' ? act.title.hi : act.title.en}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {language === 'hi' ? act.title.en : act.title.hi}
                        </div>
                      </td>
                      <td className="p-3.5 border-r border-[#1b3460]">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          isCompany
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        }`}>
                          {isCompany ? (language === 'hi' ? 'कंपनी शासन' : 'Company Rule') : (language === 'hi' ? 'ताज का शासन' : 'Crown Rule')}
                        </span>
                      </td>
                      <td className="p-3.5 border-r border-[#1b3460] text-slate-200 leading-relaxed reading-content-hindi">
                        <ul className="space-y-1">
                          {act.provisions.slice(0, 2).map((prov, pIdx) => (
                            <li key={pIdx} className="text-xs">
                              • {language === 'hi' ? prov.hi : prov.en}
                            </li>
                          ))}
                          {act.provisions.length > 2 && (
                            <li className="text-[11px] text-amber-400 font-semibold">
                              + {act.provisions.length - 2} और प्रावधान...
                            </li>
                          )}
                        </ul>
                      </td>
                      <td className="p-3.5 text-center">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedActModal(act);
                          }}
                          className="p-1.5 rounded-lg bg-[#14264a] text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition"
                          title="Open Act Details"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </motion.button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        </ScrollReveal>
      )}

      {/* TIMELINE VIEW */}
      {viewMode === 'timeline' && (
        <div className="space-y-4">
          {filteredActs.map((act, index) => {
            const isExpanded = expandedActs[act.id] || false;
            const isCopied = copiedActId === act.id;

            return (
              <ScrollReveal key={act.id} delay={0.05 * (index % 10)} direction="up">
                <div
                  id={`act-card-${act.id}`}
                  className="bg-[#0d172e] border border-amber-500/25 rounded-2xl shadow-xl overflow-hidden transition-all hover:border-amber-500/40"
                >
                {/* Card Header */}
                <div
                  onClick={() => toggleExpand(act.id)}
                  className="p-4 sm:p-5 cursor-pointer hover:bg-[#122244] flex items-center justify-between gap-3 border-b border-slate-800 transition"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="px-3 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 flex flex-col items-center justify-center font-bold text-amber-400 font-mono text-base sm:text-lg shrink-0 shadow-inner">
                      <span className="text-[10px] text-slate-400 uppercase font-sans">YEAR</span>
                      <span>{act.year}</span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {language === 'hi' ? act.title.hi : act.title.en}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {language === 'hi' ? act.background.hi : act.background.en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedActModal(act);
                      }}
                      className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1c3260] border border-slate-700 text-amber-300 hover:text-white transition flex items-center gap-1 text-xs"
                      title="Open Pop-up"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">{language === 'hi' ? 'पॉप-अप' : 'Pop-up'}</span>
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleCopyAct(act, e)}
                      className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1c3260] border border-slate-700 text-slate-300 hover:text-white transition"
                      title="Copy act summary"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-amber-400 hover:text-amber-300 p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </div>

                {/* Details Section */}
                <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block p-5 bg-[#091224]/80 print:bg-white space-y-4`}>
                  {/* Background Box */}
                  <div className="bg-[#0e1a33] print:bg-gray-50 p-4 rounded-xl border border-slate-800 print:border-gray-300 text-xs sm:text-[13.5px]">
                    <span className="font-bold text-amber-400 print:text-black block mb-1">
                      {language === 'hi' ? 'ऐतिहासिक पृष्ठभूमि (Historical Background):' : 'Historical Background:'}
                    </span>
                    <p className="reading-content-hindi text-slate-100 print:text-black leading-relaxed">
                      {language === 'hi' ? act.background.hi : act.background.en}
                    </p>
                  </div>

                  {/* Key Legal Provisions */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400 print:text-black uppercase tracking-wider block">
                      {language === 'hi' ? 'प्रमुख संवैधानिक प्रावधान (Key Provisions):' : 'Key Provisions:'}
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {act.provisions.map((prov, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-[#0e1a33] print:bg-gray-50 p-3.5 rounded-xl border border-slate-800 print:border-gray-300 flex items-start gap-3 text-xs sm:text-[13px] text-slate-200 print:text-black"
                        >
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                            {pIdx + 1}
                          </span>
                          <div className="space-y-1">
                            <div className="reading-content-hindi leading-relaxed">{language === 'hi' ? prov.hi : prov.en}</div>
                            <div className="text-[11.5px] text-slate-400 print:text-gray-700 border-t border-slate-800/80 pt-1">
                              {language === 'hi' ? prov.en : prov.hi}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exam Trick / Mnemonic */}
                  {act.trickMnemonic && (
                    <div className="bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-transparent p-4 rounded-xl border border-amber-500/35 flex items-start gap-3 text-xs sm:text-[13px]">
                      <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-400 block mb-1">
                          {language === 'hi' ? '💡 परीक्षा स्मरण ट्रिक (Exam Trick):' : '💡 Exam Mnemonic:'}
                        </span>
                        <p className="reading-content-hindi text-slate-100">{language === 'hi' ? act.trickMnemonic.hi : act.trickMnemonic.en}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      )}

      {/* ACT DETAIL POP-UP MODAL */}
      {selectedActModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedActModal(null)}
        >
          <div
            className="bg-[#0d172e] border border-amber-500/40 rounded-2xl w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden animate-modalPopUp"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#142347] to-[#0c162e] border-b border-amber-500/25 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold font-mono text-base sm:text-lg">
                  {selectedActModal.year}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                    {language === 'hi' ? selectedActModal.title.hi : selectedActModal.title.en}
                  </h3>
                  <div className="text-xs text-amber-400">
                    {language === 'hi' ? selectedActModal.title.en : selectedActModal.title.hi}
                  </div>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedActModal(null)}
                className="p-1.5 rounded-lg bg-[#18294d] hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 subtable-scrollbar text-xs sm:text-sm">
              <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-xs block">
                  {language === 'hi' ? 'पृष्ठभूमि एवं ऐतिहासिक संदर्भ:' : 'Background & Context:'}
                </span>
                <p className="text-slate-100 reading-content-hindi leading-relaxed text-sm sm:text-[15px]">
                  {selectedActModal.background.hi}
                </p>
                <p className="text-slate-400 reading-content-english leading-relaxed border-t border-slate-800/80 pt-2 text-xs sm:text-sm">
                  {selectedActModal.background.en}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-xs block">
                  {language === 'hi' ? 'संवैधानिक प्रावधान (Detailed Provisions):' : 'Detailed Provisions:'}
                </span>
                <div className="space-y-2">
                  {selectedActModal.provisions.map((prov, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-[#09142b] p-3.5 rounded-xl border border-slate-800 flex items-start gap-3"
                    >
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <div className="space-y-1 text-slate-200">
                        <p className="reading-content-hindi font-medium text-white">{prov.hi}</p>
                        <p className="text-slate-400 text-xs reading-content-english">{prov.en}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedActModal.trickMnemonic && (
                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 p-4 rounded-xl border border-amber-500/40 text-xs sm:text-sm space-y-1">
                  <span className="font-bold text-amber-300 block">
                    {language === 'hi' ? '🎯 परीक्षा विशेष ट्रिक:' : '🎯 Exam Focus Trick:'}
                  </span>
                  <p className="text-white reading-content-hindi">{selectedActModal.trickMnemonic.hi}</p>
                  <p className="text-slate-300 text-xs">{selectedActModal.trickMnemonic.en}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-end shrink-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedActModal(null)}
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
