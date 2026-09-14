import React, { useState } from 'react';
import { MagicNumberPair, Language } from '../types';
import { Sparkles, Calculator, ArrowRight, BookOpen } from 'lucide-react';

interface Magic89ViewProps {
  pairs: MagicNumberPair[];
  language: Language;
}

export const Magic89View: React.FC<Magic89ViewProps> = ({ pairs, language }) => {
  const [inputArt, setInputArt] = useState<string>('72');

  const parsedArt = parseInt(inputArt, 10);
  const calculatedStateArt = !isNaN(parsedArt) ? parsedArt + 89 : null;

  const matchedPair = pairs.find((p) => p.centerArticle === parsedArt);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#111d38] to-[#162747] border border-amber-500/30 rounded-xl p-5 shadow-xl">
        <div className="flex items-center gap-2.5 text-amber-400 mb-1">
          <Sparkles className="w-5 h-5" />
          <h2 className="text-lg font-bold text-white font-cinzel">
            {language === 'hi' ? 'जादुई संख्या 89 (Magic Number 89 Trick)' : 'The Magic Number 89 Mnemonics Rule'}
          </h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mt-1">
          {language === 'hi'
            ? 'संविधान में केंद्र सरकार (राष्ट्रपति, मंत्रिपरिषद, संसद, महान्यायवादी) के अनुच्छेदों (Art 72 से 111) में 89 जोड़ने पर सीधे राज्य सरकार (राज्यपाल, मुख्यमंत्री, विधानमंडल, महाधिवक्ता) का समतुल्य अनुच्छेद प्राप्त हो जाता है!'
            : 'Adding 89 to a Union/Parliament article (from Art 72 to Art 111) yields the exact corresponding State Government / Legislature article! (e.g. Art 72 President Pardon + 89 = Art 161 Governor Pardon).'}
        </p>
      </div>

      {/* Interactive 89 Calculator */}
      <div className="bg-[#111d38]/90 border border-amber-500/25 rounded-xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            {language === 'hi' ? 'इंटरएक्टिव 89 कैलकुलेटर' : 'Interactive 89 Calculator'}
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0c162c] p-4 rounded-xl border border-slate-800">
          <div className="w-full sm:w-auto">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'hi' ? 'संघ/केंद्र का अनुच्छेद दर्ज करें:' : 'Enter Union Article:'}
            </label>
            <input
              type="number"
              value={inputArt}
              onChange={(e) => setInputArt(e.target.value)}
              placeholder="उदा. 72, 74, 76, 79..."
              className="w-full sm:w-36 px-3 py-2 rounded-lg bg-[#0e1a33] border border-amber-500/40 text-amber-300 font-mono font-bold text-lg focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="text-amber-400 text-xl font-bold flex items-center gap-2">
            <span>+ 89 =</span>
          </div>

          <div className="w-full sm:w-auto">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'hi' ? 'राज्य का समतुल्य अनुच्छेद:' : 'State Equivalent Article:'}
            </label>
            <div className="px-4 py-2 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono font-bold text-xl inline-block min-w-[5rem] text-center">
              {calculatedStateArt !== null ? (language === 'hi' ? `अनुच्छेद ${calculatedStateArt}` : `Article ${calculatedStateArt}`) : '—'}
            </div>
          </div>

          {matchedPair && (
            <div className="sm:ml-auto w-full sm:w-auto p-3 bg-[#162747] rounded-lg border border-amber-500/20 text-xs">
              <span className="font-bold text-amber-400 block mb-0.5">
                {language === 'hi' ? 'विषय तुलना:' : 'Subject Comparison:'}
              </span>
              <p className="text-slate-200">
                <strong className="text-amber-300">केंद्र (Art {matchedPair.centerArticle}):</strong>{' '}
                {language === 'hi' ? matchedPair.centerSubject.hi : matchedPair.centerSubject.en}
              </p>
              <p className="text-slate-200 mt-1">
                <strong className="text-sky-400">राज्य (Art {matchedPair.stateArticle}):</strong>{' '}
                {language === 'hi' ? matchedPair.stateSubject.hi : matchedPair.stateSubject.en}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Complete Magic 89 Mapping Grid */}
      <div className="bg-[#111d38]/90 border border-amber-500/25 rounded-xl p-5 shadow-lg space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          {language === 'hi'
            ? 'संपूर्ण केंद्र-राज्य 89 समानता सूची (30 महत्वपूर्ण जोड़े)'
            : 'Complete Union-State Magic 89 Matrix (30 High-Yield Pairs)'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pairs.map((pair) => (
            <div
              key={pair.id}
              className="bg-[#0e1a33] p-3.5 rounded-lg border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-mono font-bold text-xs border border-amber-500/30">
                  Art {pair.centerArticle}
                </span>
                <span className="text-[11px] text-amber-300/80 font-bold">+ 89 =</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 font-mono font-bold text-xs border border-sky-500/30">
                  Art {pair.stateArticle}
                </span>
              </div>

              <div className="mt-2 space-y-1.5 text-xs">
                <div>
                  <span className="font-semibold text-amber-400 text-[11px] block">
                    {language === 'hi' ? 'संघ (केंद्रीय विषय):' : 'Union Subject:'}
                  </span>
                  <p className="text-slate-200">{language === 'hi' ? pair.centerSubject.hi : pair.centerSubject.en}</p>
                </div>
                <div className="pt-1 border-t border-slate-800">
                  <span className="font-semibold text-sky-300 text-[11px] block">
                    {language === 'hi' ? 'राज्य (राज्यीय विषय):' : 'State Equivalent:'}
                  </span>
                  <p className="text-slate-300">{language === 'hi' ? pair.stateSubject.hi : pair.stateSubject.en}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
