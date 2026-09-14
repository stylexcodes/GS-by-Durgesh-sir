import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { JudicialVerdict, Language } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  Scale, 
  Calendar, 
  Bookmark, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Table as TableIcon, 
  LayoutGrid, 
  Maximize2, 
  X, 
  Copy, 
  Check 
} from 'lucide-react';

interface JudicialCasesViewProps {
  cases: JudicialVerdict[];
  language: Language;
  searchQuery: string;
}

export const JudicialCasesView: React.FC<JudicialCasesViewProps> = ({ cases, language, searchQuery }) => {
  const [expandedCases, setExpandedCases] = useState<Record<string, boolean>>({
    'case-3': true, // Kesavananda Bharati
    'case-4': true, // Maneka Gandhi
    'case-9': true, // Puttaswamy (Privacy)
  });
  const [viewMode, setViewMode] = useState<'cards' | 'subtable'>('cards');
  const [selectedCaseModal, setSelectedCaseModal] = useState<JudicialVerdict | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCases = useMemo(() => {
    if (!searchQuery) return cases;
    const q = searchQuery.toLowerCase().trim();
    return cases.filter((c) => {
      const matchName = c.caseName.toLowerCase().includes(q);
      const matchYear = c.year.toString().includes(q);
      const matchSubHi = c.subject.hi.toLowerCase().includes(q);
      const matchSubEn = c.subject.en.toLowerCase().includes(q);
      const matchRulingHi = c.rulingSummary.hi.toLowerCase().includes(q);
      const matchRulingEn = c.rulingSummary.en.toLowerCase().includes(q);
      const matchArticles = c.constitutionalArticles.some((art) => art.toLowerCase().includes(q));

      return matchName || matchYear || matchSubHi || matchSubEn || matchRulingHi || matchRulingEn || matchArticles;
    });
  }, [cases, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedCases((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyCase = (cs: JudicialVerdict, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `⚖️ ${cs.caseName} (${cs.year})\n[Subject]: ${cs.subject.hi} / ${cs.subject.en}\n[Articles]: ${cs.constitutionalArticles.join(', ')}\n[Ruling]: ${cs.rulingSummary.hi}\n${cs.rulingSummary.en}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(cs.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <ScrollReveal direction="down" delay={0.1}>
        <div className="bg-gradient-to-r from-[#111d38] via-[#152549] to-[#0f1b34] border border-amber-500/25 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white font-cinzel flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              {language === 'hi'
                ? 'उच्चतम न्यायालय के ऐतिहासिक निर्णय एवं संवैधानिक वाद (Landmark Judgments)'
                : 'Landmark Supreme Court Judgments & Constitutional Jurisprudence'}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
              {language === 'hi'
                ? 'संविधान का मूल ढांचा (केशवानंद भारती), निजता का अधिकार (पुट्टास्वामी), तीन तलाक (शायरा बानो), धारा 377 (नवतेज जोहर), त्वरित विचारण (हुस्नआरा खातून), कार्यस्थल उत्पीड़न (विशाखा) सहित सभी महत्वपूर्ण वाद।'
                : 'Core constitutional cases defining Basic Structure, Right to Privacy, speedy trial, decriminalization of Section 377, invalidation of triple talaq, and fundamental rights jurisprudence.'}
            </p>
          </div>

          {/* View Switcher */}
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
              <span>{language === 'hi' ? 'वाद कार्ड' : 'Cards'}</span>
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
              <span>{language === 'hi' ? 'निर्णय तालिका' : 'Judgments Table'}</span>
            </motion.button>
          </div>
        </div>
      </ScrollReveal>

      {/* MASTER JUDGMENTS SUB-TABLE */}
      {viewMode === 'subtable' && (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#0d172e] border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl animate-subTableSlide">
          <div className="bg-[#12203d] px-5 py-3.5 border-b border-[#1b3460] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-xs sm:text-sm">
                {language === 'hi' ? 'ऐतिहासिक न्यायिक निर्णयों की तुलनात्मक तालिका' : 'Constitutional Case Law Master Matrix'}
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
                  <th className="p-3.5 w-20 text-center font-bold border-r border-[#1b3460]">वर्ष</th>
                  <th className="p-3.5 w-60 font-bold border-r border-[#1b3460]">वाद का नाम (Case Name)</th>
                  <th className="p-3.5 w-40 font-bold border-r border-[#1b3460]">संबंधित अनुच्छेद</th>
                  <th className="p-3.5 font-bold border-r border-[#1b3460]">संवैधानिक सिद्धांत व निर्णय का सार</th>
                  <th className="p-3.5 w-20 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((cs, idx) => (
                  <tr
                    key={cs.id}
                    onClick={() => setSelectedCaseModal(cs)}
                    className={`border-b border-[#132545] transition-colors cursor-pointer ${
                      idx % 2 === 0 ? 'bg-[#0b1428]' : 'bg-[#070e1d]'
                    } hover:bg-[#14264d]`}
                  >
                    <td className="p-3.5 text-center font-mono font-bold text-amber-400 border-r border-[#1b3460] text-sm">
                      <span className="px-2 py-1 rounded bg-amber-500/15 border border-amber-500/30">
                        {cs.year}
                      </span>
                    </td>
                    <td className="p-3.5 font-semibold text-white border-r border-[#1b3460]">
                      <div>{cs.caseName}</div>
                      <div className="text-[11px] text-amber-300/80 mt-0.5 font-normal">
                        {language === 'hi' ? cs.subject.hi : cs.subject.en}
                      </div>
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] font-mono text-xs">
                      <div className="flex flex-wrap gap-1">
                        {cs.constitutionalArticles.map((art, aIdx) => (
                          <span key={aIdx} className="px-1.5 py-0.5 rounded bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[11px]">
                            {art}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] text-slate-200 leading-relaxed reading-content-hindi">
                      <p>{language === 'hi' ? cs.rulingSummary.hi : cs.rulingSummary.en}</p>
                    </td>
                    <td className="p-3.5 text-center">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCaseModal(cs);
                        }}
                        className="p-1.5 rounded-lg bg-[#14264a] text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition"
                        title="Open Case Details"
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

      {/* CASES CARDS VIEW */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 gap-4">
          {filteredCases.map((cs, index) => {
            const isExpanded = expandedCases[cs.id] || false;
            const isCopied = copiedId === cs.id;

            return (
              <ScrollReveal key={cs.id} delay={0.05 * (index % 10)} direction="up">
                <div
                  id={`case-card-${cs.id}`}
                  className="bg-[#0d172e] border border-amber-500/25 rounded-2xl shadow-xl overflow-hidden transition-all hover:border-amber-500/40"
                >
                {/* Header */}
                <div
                  onClick={() => toggleExpand(cs.id)}
                  className="p-4 sm:p-5 cursor-pointer hover:bg-[#122244] flex items-center justify-between gap-3 border-b border-slate-800 transition"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="px-3 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 flex flex-col items-center justify-center font-bold text-amber-400 font-mono text-base shrink-0 shadow-inner">
                      <span className="text-[10px] text-slate-400 font-sans">YEAR</span>
                      <span>{cs.year}</span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {cs.caseName}
                      </h3>
                      <p className="text-xs text-amber-300 font-medium mt-0.5">
                        {language === 'hi' ? cs.subject.hi : cs.subject.en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCaseModal(cs);
                      }}
                      className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1c3260] border border-slate-700 text-amber-300 hover:text-white transition flex items-center gap-1 text-xs"
                      title="Open Details Pop-up"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">{language === 'hi' ? 'पॉप-अप' : 'Pop-up'}</span>
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleCopyCase(cs, e)}
                      className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1c3260] border border-slate-700 text-slate-300 hover:text-white transition"
                      title="Copy case summary"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-amber-400 hover:text-amber-300 p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </div>

                {/* Details Accordion */}
                <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block p-5 bg-[#091224]/80 print:bg-white space-y-4`}>
                  {/* Ruling Summary Box */}
                  <div className="bg-[#0e1a33] print:bg-gray-50 p-4 rounded-xl border border-slate-800 print:border-gray-300 text-xs sm:text-[13.5px] space-y-2">
                    <span className="font-bold text-amber-400 print:text-black block">
                      {language === 'hi' ? '⚖️ ऐतिहासिक निर्णय एवं संवैधानिक सिद्धांत:' : '⚖️ Landmark Ruling & Legal Principles:'}
                    </span>
                    <p className="reading-content-hindi text-slate-100 print:text-black leading-relaxed">
                      {language === 'hi' ? cs.rulingSummary.hi : cs.rulingSummary.en}
                    </p>
                    <p className="text-xs text-slate-400 print:text-gray-700 border-t border-slate-800/80 print:border-gray-300 pt-2">
                      {language === 'hi' ? cs.rulingSummary.en : cs.rulingSummary.hi}
                    </p>
                  </div>

                  {/* Constitutional Articles Linked */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800 print:border-gray-300">
                    <span className="text-xs font-semibold text-slate-400 print:text-gray-700">
                      {language === 'hi' ? 'संबंधित संवैधानिक अनुच्छेद:' : 'Constitutional Articles:'}
                    </span>
                    {cs.constitutionalArticles.map((art, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2 py-0.5 rounded bg-amber-500/15 print:bg-gray-100 border border-amber-500/30 print:border-black text-amber-400 print:text-black text-xs font-mono font-bold"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      )}

      {/* CASE DETAIL POP-UP MODAL */}
      {selectedCaseModal && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCaseModal(null)}
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
                  {selectedCaseModal.year}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                    {selectedCaseModal.caseName}
                  </h3>
                  <div className="text-xs text-amber-400">
                    {language === 'hi' ? selectedCaseModal.subject.hi : selectedCaseModal.subject.en}
                  </div>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCaseModal(null)}
                className="p-1.5 rounded-lg bg-[#18294d] hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 subtable-scrollbar text-xs sm:text-sm">
              <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-xs block">
                  {language === 'hi' ? 'उच्चतम न्यायालय का ऐतिहासिक निर्णय (Hindi Summary):' : 'Supreme Court Ruling (Hindi Summary):'}
                </span>
                <p className="text-slate-100 reading-content-hindi leading-relaxed text-sm sm:text-[15px]">
                  {selectedCaseModal.rulingSummary.hi}
                </p>
              </div>

              <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-sky-400 uppercase tracking-wider text-xs block">
                  {language === 'hi' ? 'अंग्रेजी विधिक निर्णय (English Ruling):' : 'English Judicial Ruling:'}
                </span>
                <p className="text-slate-300 reading-content-english leading-relaxed text-xs sm:text-sm">
                  {selectedCaseModal.rulingSummary.en}
                </p>
              </div>

              <div className="bg-[#09142b] p-3.5 rounded-xl border border-slate-800 flex items-center gap-2 text-xs">
                <span className="font-bold text-amber-400">
                  {language === 'hi' ? 'संबद्ध संविधान के अनुच्छेद:' : 'Associated Articles:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCaseModal.constitutionalArticles.map((art, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold">
                      {art}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-end shrink-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCaseModal(null)}
                className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                {language === 'hi' ? 'बंद करें' : 'Close'}
              </motion.button>
            </div>
          </div>
        </div>
      , document.body)}
    </div>
  );
};
