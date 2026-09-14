import React, { useState } from 'react';
import { PolityTrick, Language } from '../types';
import { Lightbulb, Search, Copy, Check, Sparkles, BookOpen, Layers, Award } from 'lucide-react';

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

  const handleCopy = (trick: PolityTrick) => {
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
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Banner / Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#122144] via-[#0d162d] to-[#0a1122] border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'hi' ? 'स्मार्ट याद रखने की ट्रिक्स' : 'Polity Memory Tricks & Hacks'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-cinzel tracking-wide">
              {language === 'hi' ? 'संविधान स्मरण सूत्र एवं ट्रिक्स' : 'Constitutional Mnemonics & Tricks Bank'}
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {language === 'hi'
                ? 'विदेशी स्रोत, 3SDR प्रस्तावना, BIHAR का T, वर्ष 2000 के राज्य, पकानि कोका दुयो दशम, उसरा निकास शनि, समस्त शोध संस्कृति का उपचार, -निस 19(1), HCL, त्रि-मे-म, रकानि कायोश सहित सभी 18 प्रमाणित फॉर्मूले।'
                : 'Master all 18 core constitutional mnemonics: Foreign Sources, 3SDR Preamble, BIHAR-T, Nov 2000 States, President Articles 52-61, Vice-President Articles 63-70, Article 19 Freedoms, Governor 153-159, and Judiciary.'}
            </p>
          </div>

          {/* Quick Language View Toggle for Tricks */}
          <div className="flex items-center gap-2 bg-[#0c152a] p-1.5 rounded-xl border border-slate-700/60 self-start md:self-auto">
            <span className="text-xs text-slate-400 px-2 font-medium">
              {language === 'hi' ? 'ट्रिक भाषा:' : 'Trick Lang:'}
            </span>
            <button
              onClick={() => setTrickMode('both')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                trickMode === 'both'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {language === 'hi' ? 'दोनों (Both)' : 'Both'}
            </button>
            <button
              onClick={() => setTrickMode('hi')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                trickMode === 'hi'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setTrickMode('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                trickMode === 'en'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-950/50'
                  : 'bg-[#111d38] text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat.label[language]}
            </button>
          );
        })}
      </div>

      {/* Counter & Search Summary */}
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
        {filteredTricks.map((trick) => {
          const isCopied = copiedId === trick.id;

          return (
            <div
              key={trick.id}
              id={trick.id}
              className="rounded-2xl bg-[#111d38]/95 border border-slate-800 hover:border-amber-400/40 transition-all duration-200 overflow-hidden shadow-xl"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 border-b border-slate-800/80 bg-gradient-to-r from-[#142345] to-[#101b34] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm flex items-center justify-center font-cinzel">
                    {trick.sectionNumber}
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-100 font-cinzel">
                      {trick.title[language]}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      {trick.targetTopic[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => handleCopy(trick)}
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
                        <span>{language === 'hi' ? 'ट्रिक कॉपी करें' : 'Copy Trick'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mnemonic Display Badges */}
              <div className="p-5 sm:p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(trickMode === 'both' || trickMode === 'hi') && (
                    <div className="p-4 rounded-xl bg-[#0b1326] border border-amber-500/20 space-y-2">
                      <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          {language === 'hi' ? 'हिंदी स्मरण सूत्र (Hindi Trick)' : 'Hindi Mnemonic'}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-mono">
                          HINDI
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-amber-300 font-sans tracking-wide leading-relaxed bg-[#111e3b]/80 p-3 rounded-lg border border-slate-800">
                        "{trick.hindiTrick}"
                      </div>
                    </div>
                  )}

                  {(trickMode === 'both' || trickMode === 'en') && (
                    <div className="p-4 rounded-xl bg-[#0b1326] border border-cyan-500/20 space-y-2">
                      <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {language === 'hi' ? 'अंग्रेजी सूत्र (English Trick)' : 'English Mnemonic'}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono">
                          ENGLISH
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-cyan-200 font-sans tracking-wide leading-relaxed bg-[#111e3b]/80 p-3 rounded-lg border border-slate-800">
                        "{trick.englishTrick}"
                      </div>
                    </div>
                  )}
                </div>

                {/* Breakdown Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>
                      {language === 'hi'
                        ? 'अक्षरवार विस्तार एवं अर्थ (Detailed Breakdown):'
                        : 'Letter-by-Letter Detailed Breakdown:'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {(language === 'hi' ? trick.breakdownHindi : trick.breakdownEnglish).map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-[#0d162c] border border-slate-800 hover:border-slate-700 transition"
                        >
                          <span className="flex-shrink-0 px-2 py-1 rounded-md bg-amber-400/15 text-amber-300 font-mono font-bold text-xs border border-amber-400/25">
                            {item.letter}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-slate-100 truncate">
                              {item.word}
                            </div>
                            <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                              {item.meaning}
                            </div>
                          </div>
                        </div>
                      )
                    )}
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
                          className="p-4 rounded-xl bg-[#0e172e] border border-slate-800 space-y-2 hover:border-slate-700 transition"
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

                          <div className="text-xs font-semibold text-cyan-200 bg-[#091021] p-2 rounded-lg border border-slate-800/80">
                            🇮🇳 हिंदी: <span className="text-amber-200">"{sp.hindiTrick}"</span>
                            <br />
                            🇬🇧 Eng: <span className="text-cyan-300">"{sp.englishTrick}"</span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed">
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
                  <div className="p-3.5 rounded-xl bg-[#0d162a]/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'hi' ? 'परीक्षा उपयोगी तथ्य (Exam Note):' : 'Exam Significance:'}</span>
                    </div>
                    <p className="leading-relaxed">{trick.explanation[language]}</p>
                  </div>
                )}

                {/* Tags & Related Articles */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/70">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {trick.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[#0a1122] text-slate-400 text-[10px] border border-slate-800"
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
          );
        })}
      </div>

      {filteredTricks.length === 0 && (
        <div className="text-center py-16 bg-[#111d38]/60 rounded-2xl border border-slate-800 space-y-3">
          <Lightbulb className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-200">
            {language === 'hi' ? 'कोई ट्रिक नहीं मिली' : 'No Tricks Found'}
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {language === 'hi'
              ? 'कृपया किसी अन्य शब्द या श्रेणी का चयन करें।'
              : 'Try clearing your search query or choosing another category.'}
          </p>
        </div>
      )}
    </div>
  );
};
