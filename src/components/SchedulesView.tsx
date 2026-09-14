import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScheduleItem, Language } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Maximize2, 
  X, 
  Table as TableIcon, 
  LayoutGrid, 
  Copy, 
  Check, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface SchedulesViewProps {
  schedules: ScheduleItem[];
  language: Language;
}

export const SchedulesView: React.FC<SchedulesViewProps> = ({ schedules, language }) => {
  const [expandedSchedules, setExpandedSchedules] = useState<Record<number, boolean>>({
    2: true,
    7: true,
    8: true,
    10: true,
  });
  const [selectedScheduleModal, setSelectedScheduleModal] = useState<ScheduleItem | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'subtable'>('cards');
  const [copiedNum, setCopiedNum] = useState<number | null>(null);

  const toggleExpand = (num: number) => {
    setExpandedSchedules((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  const handleCopySchedule = (sch: ScheduleItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `📋 भारतीय संविधान - अनुसूची ${sch.number} (${sch.title.hi} / ${sch.title.en})\n${sch.description.hi}\n\nEnglish: ${sch.description.en}${
      sch.relatedArticles?.length ? `\nसंबंधित अनुच्छेद: ${sch.relatedArticles.join(', ')}` : ''
    }`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNum(sch.number);
      setTimeout(() => setCopiedNum(null), 2000);
    });
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <ScrollReveal direction="down" delay={0.1}>
        <div className="bg-gradient-to-r from-[#111d38] via-[#142345] to-[#0f1b34] border border-amber-500/25 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white font-cinzel flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              {language === 'hi'
                ? 'भारतीय संविधान की सभी 12 अनुसूचियां (Schedules 1 - 12)'
                : 'All 12 Schedules of the Indian Constitution'}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
              {language === 'hi'
                ? 'मूल संविधान में 8 अनुसूचियां थीं; वर्तमान में 12 अनुसूचियां हैं। वेतन, शपथ, राज्यसभा सीटें, 3 सूचियां, 22 भाषाएं, दल-बदल व स्थानीय स्वशासन का संपूर्ण तुलनात्मक विवरण।'
                : 'Originally 8 schedules; now 12 schedules covering territorial jurisdiction, salaries, oaths, Rajya Sabha seat matrix, 3 lists, 22 scheduled languages, anti-defection, and local governance.'}
            </p>
          </div>

          {/* View Mode Toggle: Cards vs Master Sub-Table */}
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
              <span>{language === 'hi' ? 'कार्ड व्यू' : 'Cards View'}</span>
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
              <span>{language === 'hi' ? 'तुलनात्मक तालिका' : 'Master Sub-Table'}</span>
            </motion.button>
          </div>
        </div>
      </ScrollReveal>

      {/* MASTER COMPARATIVE SUB-TABLE VIEW */}
      {viewMode === 'subtable' && (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#0d172e] border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl animate-subTableSlide">
          <div className="bg-[#12203d] px-5 py-3.5 border-b border-[#1b3460] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-xs sm:text-sm">
                {language === 'hi' ? '12 अनुसूचियों की विस्तृत तुलनात्मक तालिका' : '12 Schedules Complete Comparative Matrix'}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Scroll horizontally →
            </span>
          </div>

          <div className="overflow-x-auto subtable-scrollbar">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
              <thead className="bg-[#091224] text-amber-300 border-b border-[#1b3460] sticky top-0">
                <tr>
                  <th className="p-3.5 w-16 text-center font-bold border-r border-[#1b3460]">#</th>
                  <th className="p-3.5 w-52 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'अनुसूची शीर्षक' : 'Schedule Title'}
                  </th>
                  <th className="p-3.5 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'संवैधानिक प्रावधान एवं मुख्य विवरण' : 'Provisions & Core Details'}
                  </th>
                  <th className="p-3.5 w-40 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'संबंधित अनुच्छेद' : 'Related Articles'}
                  </th>
                  <th className="p-3.5 w-24 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((sch, idx) => (
                  <tr
                    key={sch.number}
                    className={`border-b border-[#132545] transition-colors ${
                      idx % 2 === 0 ? 'bg-[#0b1428]' : 'bg-[#070e1d]'
                    } hover:bg-[#14264d] cursor-pointer`}
                    onClick={() => setSelectedScheduleModal(sch)}
                  >
                    <td className="p-3.5 text-center font-bold text-amber-400 border-r border-[#1b3460] font-cinzel text-sm">
                      {sch.number}
                    </td>
                    <td className="p-3.5 font-semibold text-white border-r border-[#1b3460]">
                      <div>{language === 'hi' ? sch.title.hi : sch.title.en}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'hi' ? sch.title.en : sch.title.hi}
                      </div>
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] text-slate-200 leading-relaxed reading-content-hindi">
                      <p>{language === 'hi' ? sch.description.hi : sch.description.en}</p>
                      {sch.details && sch.details.length > 0 && (
                        <div className="mt-1.5 text-[11.5px] text-amber-300/90 line-clamp-2">
                          • {language === 'hi' ? sch.details[0].hi : sch.details[0].en}
                        </div>
                      )}
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] font-mono text-amber-400 text-xs">
                      {sch.relatedArticles && sch.relatedArticles.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {sch.relatedArticles.map((art, aIdx) => (
                            <span key={aIdx} className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-[11px]">
                              {art}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                    <td className="p-3.5 text-center">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedScheduleModal(sch);
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

      {/* Schedules Cards List */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 gap-4">
          {schedules.map((sch, index) => {
            const isExpanded = expandedSchedules[sch.number] || false;
            const isCopied = copiedNum === sch.number;

            return (
              <ScrollReveal key={sch.number} delay={0.05 * (index % 10)} direction="up">
                <div
                  id={`schedule-card-${sch.number}`}
                  className="bg-[#0d172e] border border-amber-500/25 rounded-2xl shadow-xl overflow-hidden transition-all hover:border-amber-500/40"
                >
                {/* Header */}
                <div
                  onClick={() => toggleExpand(sch.number)}
                  className="p-4 sm:p-5 cursor-pointer hover:bg-[#122244] flex items-center justify-between gap-3 border-b border-slate-800 transition"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 font-cinzel text-lg shadow-inner shrink-0">
                      {sch.number}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {language === 'hi' ? sch.title.hi : sch.title.en}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-300 line-clamp-1 mt-0.5 leading-relaxed">
                        {language === 'hi' ? sch.description.hi : sch.description.en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Pop-up Button */}
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedScheduleModal(sch);
                      }}
                      className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1c3260] border border-slate-700 text-amber-300 hover:text-white transition flex items-center gap-1 text-xs"
                      title={language === 'hi' ? 'पॉप-अप में पूरा देखें' : 'Open in Pop-up Modal'}
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">{language === 'hi' ? 'पॉप-अप' : 'Pop-up'}</span>
                    </motion.button>

                    {/* Copy Button */}
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleCopySchedule(sch, e)}
                      className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1c3260] border border-slate-700 text-slate-300 hover:text-white transition"
                      title="Copy schedule summary"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </motion.button>

                    {/* Accordion Toggle */}
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-amber-400 hover:text-amber-300 p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </div>

                {/* Details Drawer */}
                <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block p-5 bg-[#091224]/80 print:bg-white space-y-4`}>
                  {/* Summary Box */}
                  <div className="text-xs sm:text-[13.5px] text-slate-100 print:text-black leading-relaxed bg-[#0e1a33] print:bg-gray-50 p-4 rounded-xl border border-slate-800 print:border-gray-300">
                    <span className="font-bold text-amber-400 print:text-black block mb-1">
                      {language === 'hi' ? 'अनुसूची का सार:' : 'Schedule Summary:'}
                    </span>
                    <p className="reading-content-hindi">{language === 'hi' ? sch.description.hi : sch.description.en}</p>
                    <p className="text-xs text-slate-400 mt-1.5 border-t border-slate-800/80 pt-1.5">
                      {language === 'hi' ? sch.description.en : sch.description.hi}
                    </p>
                  </div>

                  {/* Constitutional Details & Data */}
                  {sch.details && sch.details.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-amber-400 print:text-black uppercase tracking-wider block">
                        {language === 'hi' ? 'महत्वपूर्ण संवैधानिक बिंदु एवं आंकड़े:' : 'Constitutional Details & Data:'}
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {sch.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="bg-[#0e1a33] print:bg-gray-50 p-3.5 rounded-xl border border-slate-800 print:border-gray-300 flex items-start gap-3 text-xs sm:text-[13px] text-slate-200 print:text-black"
                          >
                            <CheckCircle className="w-4 h-4 text-amber-400 print:text-black shrink-0 mt-0.5 no-print" />
                            <div className="space-y-1">
                              <div className="reading-content-hindi leading-relaxed">{language === 'hi' ? detail.hi : detail.en}</div>
                              <div className="text-[11.5px] text-slate-400 print:text-gray-700 font-sans border-t border-slate-800/80 print:border-gray-300 pt-1">
                                {language === 'hi' ? detail.en : detail.hi}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Articles */}
                  {sch.relatedArticles && sch.relatedArticles.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800 print:border-gray-300">
                      <span className="text-xs font-semibold text-slate-400 print:text-gray-700">
                        {language === 'hi' ? 'संबंधित अनुच्छेद:' : 'Related Articles:'}
                      </span>
                      {sch.relatedArticles.map((art, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-amber-500/15 print:bg-gray-100 border border-amber-500/30 print:border-black text-amber-400 print:text-black text-xs font-mono font-bold"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      )}

      {/* SCHEDULE DETAIL POP-UP MODAL */}
      {selectedScheduleModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedScheduleModal(null)}
        >
          <div 
            className="bg-[#0d172e] border border-amber-500/40 rounded-2xl w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden animate-modalPopUp"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#142347] to-[#0c162e] border-b border-amber-500/25 px-5 py-4 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold font-cinzel text-lg flex items-center justify-center shadow-inner">
                  {selectedScheduleModal.number}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                    {language === 'hi' ? selectedScheduleModal.title.hi : selectedScheduleModal.title.en}
                  </h3>
                  <div className="text-xs text-amber-400">
                    {language === 'hi' ? selectedScheduleModal.title.en : selectedScheduleModal.title.hi}
                  </div>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedScheduleModal(null)}
                className="p-1.5 rounded-lg bg-[#18294d] hover:bg-red-950/60 border border-slate-700 hover:border-red-500 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 subtable-scrollbar text-xs sm:text-sm">
              <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-xs block">
                  {language === 'hi' ? 'अनुसूची का पूर्ण विवरण (Bilingual Summary):' : 'Bilingual Overview:'}
                </span>
                <p className="text-slate-100 reading-content-hindi leading-relaxed text-sm sm:text-[15px]">
                  {selectedScheduleModal.description.hi}
                </p>
                <p className="text-slate-300 reading-content-english leading-relaxed border-t border-slate-800/80 pt-2 text-xs sm:text-sm">
                  {selectedScheduleModal.description.en}
                </p>
              </div>

              {selectedScheduleModal.details && selectedScheduleModal.details.length > 0 && (
                <div className="space-y-2">
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-xs block">
                    {language === 'hi' ? 'संवैधानिक प्रावधान तालिका (Clause Details):' : 'Key Constitutional Provisions:'}
                  </span>
                  <div className="space-y-2">
                    {selectedScheduleModal.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="bg-[#09142b] p-3.5 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="reading-content-hindi font-medium text-white">{detail.hi}</p>
                          <p className="text-slate-400 text-xs reading-content-english">{detail.en}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedScheduleModal.relatedArticles && (
                <div className="bg-[#081022] p-3.5 rounded-xl border border-slate-800 flex items-center gap-2 text-xs">
                  <span className="font-bold text-slate-300">
                    {language === 'hi' ? 'संबद्ध अनुच्छेद:' : 'Related Articles:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedScheduleModal.relatedArticles.map((art, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono font-bold">
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-end shrink-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedScheduleModal(null)}
                className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                {language === 'hi' ? 'समझ गए / बंद करें' : 'Close'}
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
