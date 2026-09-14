import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { PolityTrick, Language } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  Lightbulb, 
  Search, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Award, 
  Maximize2, 
  X,
  Table as TableIcon
} from 'lucide-react';

interface PolityTricksViewProps {
  tricks: PolityTrick[];
  language: Language;
  searchQuery: string;
}

export const PolityTricksView: React.FC<PolityTricksViewProps> = ({
  tricks,
  language,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [trickMode, setTrickMode] = useState<'both' | 'hi' | 'en'>('both');
  const [selectedTrickModal, setSelectedTrickModal] = useState<PolityTrick | null>(null);

  const categories = [
    { id: 'all', label: { hi: 'सभी ट्रिक्स (All 18)', en: 'All 18 Tricks' } },
    { id: 'sources', label: { hi: 'विदेशी स्रोत (Sources)', en: 'Foreign Sources' } },
    { id: 'preamble', label: { hi: 'प्रस्तावना (Preamble)', en: 'Preamble' } },
    { id: 'names', label: { hi: 'प्राचीन नाम (Ancient Names)', en: 'Ancient Names' } },
    { id: 'states', label: { hi: 'राज्यों का गठन (States)', en: 'State Formation' } },
    { id: 'citizenship', label: { hi: 'नागरिकता (Citizenship)', en: 'Citizenship' } },
    { id: 'rights', label: { hi: 'मूल अधिकार (Art 19/FR)', en: 'Fundamental Rights' } },
    { id: 'president', label: { hi: 'राष्ट्रपति (Art 52-61)', en: 'President' } },
    { id: 'vice_president', label: { hi: 'उपराष्ट्रपति (Art 63-70)', en: 'Vice-President' } },
    { id: 'prime_minister', label: { hi: 'प्रधानमंत्री (PMs)', en: 'Prime Ministers' } },
    { id: 'judiciary', label: { hi: 'न्यायपालिका (SC/HC)', en: 'Judiciary' } },
    { id: 'governor', label: { hi: 'राज्यपाल (Art 153-159)', en: 'Governor' } },
  ];

  const handleCopy = (trick: PolityTrick, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const lines = [
      `🎯 ${trick.title[language]}`,
      `🇮🇳 हिंदी ट्रिक: "${trick.hindiTrick}"`,
      `🇬🇧 English Trick: "${trick.englishTrick}"`,
      '',
      '📌 व्याख्या व ब्रेकडाउन:',
      ...(language === 'hi'
        ? trick.breakdownHindi.map((b) => `• ${b.letter}: ${b.word} -> ${b.meaning}`)
        : trick.breakdownEnglish.map((b) => `• ${b.letter}: ${b.word} -> ${b.meaning}`)),
    ];

    if (trick.specificProvisions && trick.specificProvisions.length > 0) {
      lines.push('');
      lines.push('🏛️ विशिष्ट प्रावधान (Specific Provisions):');
      trick.specificProvisions.forEach((sp) => {
        lines.push(`• [${sp.entity}] ${sp.hindiTrick} / ${sp.englishTrick}`);
        lines.push(`  ${sp.provision[language]}`);
      });
    }

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopiedId(trick.id);
      setTimeout(() => setCopiedId(null), 2200);
    });
  };

  const filteredTricks = tricks.filter((trick) => {
    const matchesCat =
      selectedCategory === 'all' ||
      trick.category === selectedCategory ||
      (selectedCategory === 'preamble' && (trick.category === 'preamble' || trick.category === 'names'));

    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesCat;

    const inTitle =
      trick.title.hi.toLowerCase().includes(q) ||
      trick.title.en.toLowerCase().includes(q);
    const inMnemonic =
      trick.hindiTrick.toLowerCase().includes(q) ||
      trick.englishTrick.toLowerCase().includes(q);
    const inTopic =
      trick.targetTopic.hi.toLowerCase().includes(q) ||
      trick.targetTopic.en.toLowerCase().includes(q);
    const inTags = trick.tags.some((t) => t.toLowerCase().includes(q));
    const inBreakdown =
      trick.breakdownHindi.some(
        (b) =>
          b.word.toLowerCase().includes(q) ||
          b.meaning.toLowerCase().includes(q) ||
          b.letter.toLowerCase().includes(q)
      ) ||
      trick.breakdownEnglish.some(
        (b) =>
          b.word.toLowerCase().includes(q) ||
          b.meaning.toLowerCase().includes(q) ||
          b.letter.toLowerCase().includes(q)
      );
    const inProvisions = trick.specificProvisions?.some(
      (sp) =>
        sp.entity.toLowerCase().includes(q) ||
        sp.hindiTrick.toLowerCase().includes(q) ||
        sp.englishTrick.toLowerCase().includes(q) ||
        sp.provision.hi.toLowerCase().includes(q) ||
        sp.provision.en.toLowerCase().includes(q)
    );

    return matchesCat && (inTitle || inMnemonic || inTopic || inTags || inBreakdown || inProvisions);
  });

  return (
    <div className="space-y-6">
      {/* Banner / Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#122144] via-[#0d162d] to-[#0a1122] border border-amber-500/30 p-5 sm:p-7 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'hi' ? 'स्मार्ट याद रखने की ट्रिक्स' : 'Polity Memory Tricks & Hacks'}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-100 font-cinzel tracking-wide">
              {language === 'hi' ? 'संविधान स्मरण सूत्र एवं ट्रिक्स बैंक' : 'Constitutional Mnemonics & Tricks Bank'}
            </h1>
            <p className="text-xs sm:text-[13px] text-slate-300 max-w-3xl leading-relaxed">
              {language === 'hi'
                ? 'विदेशी स्रोत, 3SDR प्रस्तावना, BIHAR का T, वर्ष 2000 के राज्य, पकानि कोका दुयो दशम, उसरा निकास शनि, समस्त शोध संस्कृति का उपचार, -निस 19(1), HCL, त्रि-मे-म, रकानि कायोश सहित सभी 18 प्रमाणित फॉर्मूले।'
                : 'Master all 18 core constitutional mnemonics: Foreign Sources, 3SDR Preamble, BIHAR-T, Nov 2000 States, President Articles 52-61, Vice-President Articles 63-70, Article 19 Freedoms, Governor 153-159, and Judiciary.'}
            </p>
          </div>

          {/* Quick Language View Toggle for Tricks */}
          <div className="flex items-center gap-1.5 bg-[#0c152a] p-1.5 rounded-xl border border-slate-700/60 self-start md:self-auto shrink-0">
            <span className="text-xs text-slate-400 px-2 font-medium">
              {language === 'hi' ? 'ट्रिक भाषा:' : 'Trick Lang:'}
            </span>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setTrickMode('both')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                trickMode === 'both'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {language === 'hi' ? 'दोनों (Both)' : 'Both'}
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setTrickMode('hi')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                trickMode === 'hi'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिंदी
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setTrickMode('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                trickMode === 'en'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Eng
            </motion.button>
          </div>
        </div>

        {/* Horizontal Category Scroller */}
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 subtable-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition font-medium shrink-0 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-[#0a1224] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat.label[language]}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count Strip */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {language === 'hi'
            ? `कुल ट्रिक्स: ${filteredTricks.length} / ${tricks.length}`
            : `Showing: ${filteredTricks.length} of ${tricks.length} Tricks`}
        </span>
        {searchQuery && (
          <span className="text-amber-400 font-medium">
            {language === 'hi' ? `खोज परिणाम: "${searchQuery}"` : `Filtered by: "${searchQuery}"`}
          </span>
        )}
      </div>

      {/* Tricks Cards Grid */}
      <div className="space-y-6">
        {filteredTricks.map((trick, index) => {
          const isCopied = copiedId === trick.id;

          return (
            <ScrollReveal key={trick.id} delay={0.05 * (index % 10)} direction="up">
              <div
                id={trick.id}
                className="rounded-2xl bg-[#0d172e] border border-slate-800 hover:border-amber-400/40 transition-all duration-200 overflow-hidden shadow-xl"
              >
                {/* Card Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-gradient-to-r from-[#142345] to-[#101b34] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm flex items-center justify-center font-cinzel">
                    {trick.sectionNumber}
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-100 font-cinzel">
                      {trick.title[language]}
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {trick.targetTopic[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTrickModal(trick)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0d162c] border border-slate-700 text-amber-400 hover:text-white hover:border-amber-400/50 transition"
                    title="Open Full Pop-up"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'विस्तृत पॉप-अप' : 'Pop-up'}</span>
                  </motion.button>

                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleCopy(trick, e)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                      isCopied
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-[#0d162c] border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{language === 'hi' ? 'कॉपी हो गया!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-400" />
                        <span>{language === 'hi' ? 'ट्रिक कॉपी' : 'Copy'}</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Mnemonic Display Badges */}
              <div className="p-5 sm:p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(trickMode === 'both' || trickMode === 'hi') && (
                    <div className="p-4 rounded-xl bg-[#081122] border border-amber-500/20 space-y-2">
                      <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          {language === 'hi' ? 'हिंदी स्मरण सूत्र (Hindi Trick)' : 'Hindi Mnemonic'}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-mono">
                          HINDI
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-amber-300 font-sans tracking-wide leading-relaxed bg-[#0e1a34] p-3 rounded-lg border border-slate-800">
                        "{trick.hindiTrick}"
                      </div>
                    </div>
                  )}

                  {(trickMode === 'both' || trickMode === 'en') && (
                    <div className="p-4 rounded-xl bg-[#081122] border border-cyan-500/20 space-y-2">
                      <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {language === 'hi' ? 'अंग्रेजी सूत्र (English Trick)' : 'English Mnemonic'}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono">
                          ENGLISH
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-cyan-200 font-sans tracking-wide leading-relaxed bg-[#0e1a34] p-3 rounded-lg border border-slate-800">
                        "{trick.englishTrick}"
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-Table Breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>
                      {language === 'hi'
                        ? 'अक्षरवार विस्तार एवं अर्थ (Detailed Breakdown Sub-Table):'
                        : 'Letter-by-Letter Detailed Breakdown Sub-Table:'}
                    </span>
                  </div>

                  {/* Responsive Sub-table */}
                  <div className="bg-[#070e1c] border border-slate-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto subtable-scrollbar">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead className="bg-[#0c1833] text-amber-300 border-b border-slate-800">
                          <tr>
                            <th className="p-2.5 w-16 text-center font-bold border-r border-slate-800">अक्षर / Key</th>
                            <th className="p-2.5 w-40 font-bold border-r border-slate-800">स्मरण शब्द (Word)</th>
                            <th className="p-2.5 font-bold">संवैधानिक अर्थ / प्रावधान (Constitutional Meaning)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(language === 'hi' ? trick.breakdownHindi : trick.breakdownEnglish).map(
                            (item, idx) => (
                              <tr
                                key={idx}
                                className={`border-b border-slate-800/60 ${
                                  idx % 2 === 0 ? 'bg-[#081122]' : 'bg-[#050b16]'
                                } hover:bg-[#112140] transition-colors`}
                              >
                                <td className="p-2.5 text-center font-mono font-bold text-amber-400 border-r border-slate-800">
                                  <span className="px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/25">
                                    {item.letter}
                                  </span>
                                </td>
                                <td className="p-2.5 font-semibold text-slate-100 border-r border-slate-800">
                                  {item.word}
                                </td>
                                <td className="p-2.5 text-slate-200 reading-content-hindi leading-relaxed">
                                  {item.meaning}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Specific Borrowed Provisions (e.g. for Foreign Sources) */}
                {trick.specificProvisions && trick.specificProvisions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>
                        {language === 'hi'
                          ? 'B. विशिष्ट देशों से लिए गए विशेष प्रावधान एवं ट्रिक्स:'
                          : 'B. Specific Borrowed Provisions & Sub-Tricks:'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {trick.specificProvisions.map((sp, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-xl bg-[#091224] border border-slate-800 space-y-2 hover:border-slate-700 transition"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              {sp.entity}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                              PROVISION
                            </span>
                          </div>

                          <div className="text-xs font-semibold text-cyan-200 bg-[#060c18] p-2 rounded-lg border border-slate-800/80">
                            🇮🇳 हिंदी: <span className="text-amber-200">"{sp.hindiTrick}"</span>
                            <br />
                            🇬🇧 Eng: <span className="text-cyan-300">"{sp.englishTrick}"</span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed reading-content-hindi">
                            {sp.provision[language]}
                          </p>

                          {sp.breakdown && (
                            <div className="space-y-1 pt-1 border-t border-slate-800/80">
                              {sp.breakdown.map((bLine, bIdx) => (
                                <div
                                  key={bIdx}
                                  className="text-[11px] text-slate-400 font-mono flex items-start gap-1"
                                >
                                  <span className="text-amber-400">•</span>
                                  <span>{bLine}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Explanation & Constitutional Significance */}
                {trick.explanation && (
                  <div className="p-3.5 rounded-xl bg-[#081224] border border-slate-800 text-xs text-slate-300 space-y-1">
                    <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'hi' ? 'परीक्षा उपयोगी तथ्य (Exam Note):' : 'Exam Significance:'}</span>
                    </div>
                    <p className="leading-relaxed reading-content-hindi">{trick.explanation[language]}</p>
                  </div>
                )}

                {/* Tags & Related Articles */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/70">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {trick.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[#081022] text-slate-400 text-[10px] border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {trick.relatedArticles && trick.relatedArticles.length > 0 && (
                    <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold font-mono">
                      <span>संबंधित:</span>
                      {trick.relatedArticles.map((art, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
      </div>

      {/* TRICK DETAIL MODAL POP-UP */}
      {selectedTrickModal && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedTrickModal(null)}
        >
          <div
            className="bg-[#0d172e] border border-amber-500/40 rounded-2xl w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden animate-modalPopUp"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-gradient-to-r from-[#142347] to-[#0c162e] border-b border-amber-500/25 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold font-cinzel text-base flex items-center justify-center">
                  {selectedTrickModal.sectionNumber}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                    {selectedTrickModal.title[language]}
                  </h3>
                  <div className="text-xs text-amber-400">
                    {selectedTrickModal.targetTopic[language]}
                  </div>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrickModal(null)}
                className="p-1.5 rounded-lg bg-[#18294d] hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 subtable-scrollbar text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#081224] p-3.5 rounded-xl border border-amber-500/30">
                  <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">हिंदी ट्रिक (Hindi Formula)</span>
                  <p className="text-amber-200 font-bold text-sm">"{selectedTrickModal.hindiTrick}"</p>
                </div>
                <div className="bg-[#081224] p-3.5 rounded-xl border border-sky-500/30">
                  <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1">English Formula</span>
                  <p className="text-sky-200 font-bold text-sm">"{selectedTrickModal.englishTrick}"</p>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-xs block">
                  अक्षरवार संपूर्ण व्याख्या तालिका (Full Breakdown Sub-Table):
                </span>
                <div className="bg-[#070e1c] border border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-[#0c1833] text-amber-300 border-b border-slate-800">
                      <tr>
                        <th className="p-2.5 w-16 text-center font-bold border-r border-slate-800">अक्षर</th>
                        <th className="p-2.5 w-36 font-bold border-r border-slate-800">शब्द (Word)</th>
                        <th className="p-2.5 font-bold">संवैधानिक अर्थ / प्रावधान</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(language === 'hi' ? selectedTrickModal.breakdownHindi : selectedTrickModal.breakdownEnglish).map(
                        (item, idx) => (
                          <tr key={idx} className="border-b border-slate-800/60 bg-[#081122]">
                            <td className="p-2.5 text-center font-mono font-bold text-amber-400 border-r border-slate-800">
                              {item.letter}
                            </td>
                            <td className="p-2.5 font-semibold text-white border-r border-slate-800">
                              {item.word}
                            </td>
                            <td className="p-2.5 text-slate-200 reading-content-hindi">
                              {item.meaning}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {selectedTrickModal.explanation && (
                <div className="bg-[#081224] p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="font-bold text-amber-400 text-xs uppercase block">परीक्षा उपयोगी संदर्भ:</span>
                  <p className="text-slate-200 reading-content-hindi leading-relaxed">{selectedTrickModal.explanation[language]}</p>
                </div>
              )}
            </div>

            <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-end shrink-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrickModal(null)}
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
