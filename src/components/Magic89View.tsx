import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MagicNumberPair, Language } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  Sparkles, 
  Calculator, 
  ArrowRight, 
  BookOpen, 
  Table as TableIcon, 
  LayoutGrid, 
  Search, 
  Maximize2, 
  X, 
  Copy, 
  Check 
} from 'lucide-react';

interface Magic89ViewProps {
  pairs: MagicNumberPair[];
  language: Language;
}

export const Magic89View: React.FC<Magic89ViewProps> = ({ pairs, language }) => {
  const [inputArt, setInputArt] = useState<string>('72');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'subtable' | 'cards'>('subtable');
  const [selectedPairModal, setSelectedPairModal] = useState<MagicNumberPair | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const parsedArt = parseInt(inputArt, 10);
  const calculatedStateArt = !isNaN(parsedArt) ? parsedArt + 89 : null;

  const matchedPair = pairs.find((p) => p.centerArticle === parsedArt);

  const quickPresets = [72, 74, 76, 79, 85, 100, 105, 110];

  const filteredPairs = useMemo(() => {
    if (!searchQuery) return pairs;
    const q = searchQuery.toLowerCase().trim();
    return pairs.filter((p) => {
      const artCenter = p.centerArticle.toString();
      const artState = p.stateArticle.toString();
      const subHiC = p.centerSubject.hi.toLowerCase();
      const subEnC = p.centerSubject.en.toLowerCase();
      const subHiS = p.stateSubject.hi.toLowerCase();
      const subEnS = p.stateSubject.en.toLowerCase();
      return (
        artCenter.includes(q) ||
        artState.includes(q) ||
        subHiC.includes(q) ||
        subEnC.includes(q) ||
        subHiS.includes(q) ||
        subEnS.includes(q)
      );
    });
  }, [pairs, searchQuery]);

  const handleCopyPair = (pair: MagicNumberPair, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `⚡ Magic 89 Formula:\nUnion Art ${pair.centerArticle}: ${pair.centerSubject.hi} (${pair.centerSubject.en})\n+ 89 =\nState Art ${pair.stateArticle}: ${pair.stateSubject.hi} (${pair.stateSubject.en})`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(pair.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <ScrollReveal direction="down" delay={0.1}>
        <div className="bg-gradient-to-r from-[#111d38] via-[#152549] to-[#0f1b34] border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2.5 text-amber-400 mb-1">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white font-cinzel">
              {language === 'hi' ? 'जादुई संख्या 89 (Magic Number 89 Mnemonics Rule)' : 'The Magic Number 89 Mnemonics Rule'}
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mt-1.5 max-w-4xl">
            {language === 'hi'
              ? 'संविधान में केंद्र सरकार (राष्ट्रपति, मंत्रिपरिषद, संसद, महान्यायवादी) के अनुच्छेदों (Art 72 से 111) में 89 जोड़ने पर सीधे राज्य सरकार (राज्यपाल, मुख्यमंत्री, विधानमंडल, महाधिवक्ता) का समतुल्य अनुच्छेद प्राप्त हो जाता है!'
              : 'Adding 89 to a Union/Parliament article (from Art 72 to Art 111) yields the exact corresponding State Government / Legislature article! (e.g. Art 72 President Pardon + 89 = Art 161 Governor Pardon).'}
          </p>
        </div>
      </ScrollReveal>

      {/* Interactive 89 Calculator */}
      <ScrollReveal direction="down" delay={0.2}>
        <div className="bg-[#0e172e] border border-amber-500/25 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                {language === 'hi' ? 'इंटरएक्टिव 89 लाइव कैलकुलेटर' : 'Interactive 89 Live Calculator'}
              </h3>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Center Article + 89 = State Article
            </span>
          </div>

        {/* Input & Output Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 bg-[#081022] p-4 sm:p-5 rounded-xl border border-slate-800">
          <div className="w-full md:w-auto">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'hi' ? 'संघ/केंद्र का अनुच्छेद दर्ज करें:' : 'Enter Union Article:'}
            </label>
            <input
              type="number"
              value={inputArt}
              onChange={(e) => setInputArt(e.target.value)}
              placeholder="72, 74, 76..."
              className="w-full md:w-36 px-3.5 py-2.5 rounded-xl bg-[#0f1b34] border border-amber-500/50 text-amber-300 font-mono font-black text-xl focus:outline-none focus:border-amber-400 shadow-inner"
            />
          </div>

          <div className="text-amber-400 text-2xl font-black flex items-center justify-center md:justify-start">
            <span>+ 89 =</span>
          </div>

          <div className="w-full md:w-auto">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'hi' ? 'राज्य का समतुल्य अनुच्छेद:' : 'State Equivalent Article:'}
            </label>
            <div className="px-5 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 font-mono font-black text-xl inline-block min-w-[7rem] text-center shadow-inner">
              {calculatedStateArt !== null ? (language === 'hi' ? `अनुच्छेद ${calculatedStateArt}` : `Article ${calculatedStateArt}`) : '—'}
            </div>
          </div>

          {matchedPair ? (
            <div className="md:ml-auto w-full md:w-auto p-3.5 bg-[#122244] rounded-xl border border-amber-500/30 text-xs sm:text-[13px] space-y-1">
              <span className="font-bold text-amber-400 block text-[11px] uppercase tracking-wider">
                {language === 'hi' ? '✨ स्वचालित विषय मिलान:' : '✨ Subject Match Found:'}
              </span>
              <p className="text-slate-100">
                <strong className="text-amber-300">केंद्र (Art {matchedPair.centerArticle}):</strong>{' '}
                {language === 'hi' ? matchedPair.centerSubject.hi : matchedPair.centerSubject.en}
              </p>
              <p className="text-slate-200 border-t border-slate-700/80 pt-1">
                <strong className="text-sky-400">राज्य (Art {matchedPair.stateArticle}):</strong>{' '}
                {language === 'hi' ? matchedPair.stateSubject.hi : matchedPair.stateSubject.en}
              </p>
            </div>
          ) : (
            <div className="md:ml-auto text-xs text-slate-400 italic">
              {language === 'hi' ? 'अनुच्छेद 72 से 111 तक के अनुच्छेदों पर यह ट्रिक लागू होती है।' : 'Applies to Union Articles 72 to 111.'}
            </div>
          )}
        </div>

        {/* Quick Clickable Presets */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <span className="text-[11px] text-slate-400 font-medium">
            {language === 'hi' ? 'त्वरित प्रयास करें:' : 'Quick Presets:'}
          </span>
          {quickPresets.map((art) => (
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              key={art}
              onClick={() => setInputArt(art.toString())}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition ${
                inputArt === art.toString()
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'bg-[#12203d] text-slate-300 hover:text-white border border-slate-700 hover:border-amber-500/40'
              }`}
            >
              Art {art}
            </motion.button>
          ))}
        </div>
      </div>
      </ScrollReveal>

      {/* MATRIX CONTROLS: SEARCH & VIEW TOGGLE */}
      <ScrollReveal direction="up" delay={0.3}>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#0e172e] p-4 rounded-2xl border border-amber-500/25 shadow-lg">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'अनुच्छेद नंबर या विषय खोजें (उदा. 72, क्षमादान, संसद)...'
                : 'Search article or subject (e.g. 72, pardon, parliament)...'
            }
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl bg-[#081022] border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {language === 'hi' ? `कुल ${filteredPairs.length} जोड़े` : `${filteredPairs.length} Pairs`}
          </span>

          <div className="flex items-center gap-1 bg-[#081022] p-1 rounded-xl border border-slate-700">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('subtable')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'subtable'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'तुलनात्मक तालिका' : 'Matrix Sub-Table'}</span>
            </motion.button>
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
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* MASTER MATRIX SUB-TABLE */}
      {viewMode === 'subtable' && (
        <ScrollReveal direction="up" delay={0.4}>
          <div className="bg-[#0d172e] border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl animate-subTableSlide">
          <div className="overflow-x-auto subtable-scrollbar">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
              <thead className="bg-[#091224] text-amber-300 border-b border-[#1b3460] sticky top-0 z-10">
                <tr>
                  <th className="p-3.5 w-28 font-bold border-r border-[#1b3460] text-center">
                    {language === 'hi' ? 'संघ (Art)' : 'Union Art'}
                  </th>
                  <th className="p-3.5 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'केंद्रीय संवैधानिक विषय' : 'Union Subject'}
                  </th>
                  <th className="p-3.5 w-20 text-center font-bold border-r border-[#1b3460] text-amber-400">
                    + 89
                  </th>
                  <th className="p-3.5 w-28 font-bold border-r border-[#1b3460] text-center text-sky-400">
                    {language === 'hi' ? 'राज्य (Art)' : 'State Art'}
                  </th>
                  <th className="p-3.5 font-bold border-r border-[#1b3460]">
                    {language === 'hi' ? 'समतुल्य राज्यीय विषय' : 'State Equivalent Subject'}
                  </th>
                  <th className="p-3.5 w-24 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPairs.map((pair, idx) => (
                  <tr
                    key={pair.id}
                    onClick={() => setSelectedPairModal(pair)}
                    className={`border-b border-[#132545] transition-colors cursor-pointer ${
                      idx % 2 === 0 ? 'bg-[#0b1428]' : 'bg-[#070e1d]'
                    } hover:bg-[#14264d]`}
                  >
                    <td className="p-3.5 text-center font-mono font-bold text-amber-400 border-r border-[#1b3460] text-sm">
                      <span className="px-2 py-1 rounded bg-amber-500/15 border border-amber-500/30">
                        Art {pair.centerArticle}
                      </span>
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] text-slate-100 font-medium reading-content-hindi">
                      <div>{language === 'hi' ? pair.centerSubject.hi : pair.centerSubject.en}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'hi' ? pair.centerSubject.en : pair.centerSubject.hi}
                      </div>
                    </td>
                    <td className="p-3.5 text-center font-bold text-amber-400 border-r border-[#1b3460] font-mono">
                      +89
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-sky-400 border-r border-[#1b3460] text-sm">
                      <span className="px-2 py-1 rounded bg-sky-500/15 border border-sky-500/30">
                        Art {pair.stateArticle}
                      </span>
                    </td>
                    <td className="p-3.5 border-r border-[#1b3460] text-slate-200 font-medium reading-content-hindi">
                      <div>{language === 'hi' ? pair.stateSubject.hi : pair.stateSubject.en}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'hi' ? pair.stateSubject.en : pair.stateSubject.hi}
                      </div>
                    </td>
                    <td className="p-3.5 text-center">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPairModal(pair);
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

      {/* CARD VIEW */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPairs.map((pair, index) => {
            const isCopied = copiedId === pair.id;
            return (
              <ScrollReveal key={pair.id} delay={0.05 * (index % 10)} direction="up">
                <div
                  onClick={() => setSelectedPairModal(pair)}
                  className="bg-[#0d172e] p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-amber-500/45 transition-all shadow-lg flex flex-col justify-between cursor-pointer group"
                >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-400 font-mono font-bold text-xs sm:text-sm border border-amber-500/30">
                        Art {pair.centerArticle}
                      </span>
                      <span className="text-xs text-amber-400 font-black">+ 89 =</span>
                      <span className="px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-300 font-mono font-bold text-xs sm:text-sm border border-sky-500/30">
                        Art {pair.stateArticle}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleCopyPair(pair, e)}
                        className="p-1.5 rounded text-slate-400 hover:text-amber-400 hover:bg-[#142345] transition"
                        title="Copy pair"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPairModal(pair);
                        }}
                        className="p-1.5 rounded text-slate-400 hover:text-amber-400 hover:bg-[#142345] transition"
                        title="Open Details Pop-up"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2.5 text-xs sm:text-[13px]">
                    <div>
                      <span className="font-bold text-amber-400 text-xs block mb-0.5">
                        {language === 'hi' ? '🏛️ संघ (केंद्रीय विषय):' : '🏛️ Union Subject:'}
                      </span>
                      <p className="text-slate-100 font-medium reading-content-hindi">{language === 'hi' ? pair.centerSubject.hi : pair.centerSubject.en}</p>
                      <p className="text-[11.5px] text-slate-400 mt-0.5">{language === 'hi' ? pair.centerSubject.en : pair.centerSubject.hi}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                      <span className="font-bold text-sky-300 text-xs block mb-0.5">
                        {language === 'hi' ? '🏢 राज्य (राज्यीय समतुल्य विषय):' : '🏢 State Equivalent:'}
                      </span>
                      <p className="text-slate-200 font-medium reading-content-hindi">{language === 'hi' ? pair.stateSubject.hi : pair.stateSubject.en}</p>
                      <p className="text-[11.5px] text-slate-400 mt-0.5">{language === 'hi' ? pair.stateSubject.en : pair.stateSubject.hi}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Magic 89 Pair #{pair.id.replace('m89-', '')}</span>
                  <span className="text-amber-400 font-semibold group-hover:underline">विस्तृत देखें →</span>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      )}

      {/* DETAIL POP-UP MODAL */}
      {selectedPairModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPairModal(null)}
        >
          <div
            className="bg-[#0d172e] border border-amber-500/40 rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden animate-modalPopUp"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-gradient-to-r from-[#142347] to-[#0c162e] border-b border-amber-500/25 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                  {language === 'hi' ? 'जादुई 89 जोड़ा विश्लेषण' : 'Magic 89 Pair Deep Dive'}
                </h3>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPairModal(null)}
                className="p-1.5 rounded-lg bg-[#18294d] hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-center gap-3 p-4 bg-[#081022] rounded-xl border border-slate-800">
                <div className="text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Union / संघ</div>
                  <div className="text-lg sm:text-xl font-mono font-black text-amber-400">Art {selectedPairModal.centerArticle}</div>
                </div>
                <div className="text-xl font-bold text-amber-400">+ 89 =</div>
                <div className="text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">State / राज्य</div>
                  <div className="text-lg sm:text-xl font-mono font-black text-sky-400">Art {selectedPairModal.stateArticle}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-[#09142b] p-4 rounded-xl border border-amber-500/30 space-y-1">
                  <span className="font-bold text-amber-400 block text-xs uppercase">
                    {language === 'hi' ? 'केंद्रीय संवैधानिक विषय:' : 'Union Subject:'}
                  </span>
                  <p className="text-white font-semibold reading-content-hindi">{selectedPairModal.centerSubject.hi}</p>
                  <p className="text-slate-300 text-xs reading-content-english">{selectedPairModal.centerSubject.en}</p>
                </div>

                <div className="bg-[#09142b] p-4 rounded-xl border border-sky-500/30 space-y-1">
                  <span className="font-bold text-sky-400 block text-xs uppercase">
                    {language === 'hi' ? 'राज्यीय समतुल्य विषय:' : 'State Equivalent Subject:'}
                  </span>
                  <p className="text-white font-semibold reading-content-hindi">{selectedPairModal.stateSubject.hi}</p>
                  <p className="text-slate-300 text-xs reading-content-english">{selectedPairModal.stateSubject.en}</p>
                </div>
              </div>

              <div className="bg-[#081224] p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-400 block mb-1">
                  {language === 'hi' ? 'परीक्षा हेतु स्मरण सूत्र:' : 'Exam Recall Tip:'}
                </strong>
                {language === 'hi'
                  ? `यदि आपको केंद्र का अनुच्छेद ${selectedPairModal.centerArticle} याद है, तो सीधे +89 जोड़कर राज्य का अनुच्छेद ${selectedPairModal.stateArticle} लिख सकते हैं।`
                  : `If you remember Union Art ${selectedPairModal.centerArticle}, simply add 89 to get the State counterpart Art ${selectedPairModal.stateArticle}.`}
              </div>
            </div>

            <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-end">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPairModal(null)}
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
