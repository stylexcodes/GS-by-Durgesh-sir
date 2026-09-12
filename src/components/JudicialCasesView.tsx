import React, { useState, useMemo } from 'react';
import { JudicialVerdict, Language } from '../types';
import { Scale, Calendar, Bookmark, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

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

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#ffffff] to-[#12365e] border border-slate-300 rounded-xl p-5 shadow-xl">
        <h2 className="text-lg font-bold text-slate-900 font-cinzel flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-900" />
          {language === 'hi'
            ? 'उच्चतम न्यायालय के ऐतिहासिक निर्णय एवं संवैधानिक वाद (Landmark Judgments)'
            : 'Landmark Supreme Court Judgments & Constitutional Jurisprudence'}
        </h2>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'संविधान का मूल ढांचा (केशवानंद भारती), निजता का अधिकार (पुट्टास्वामी), तीन तलाक (शायरा बानो), धारा 377 (नवतेज जोहर), त्वरित विचारण (हुस्नआरा खातून), कार्यस्थल उत्पीड़न (विशाखा) सहित सभी महत्वपूर्ण वाद।'
            : 'Core constitutional cases defining Basic Structure, Right to Privacy, speedy trial, decriminilization of Section 377, invalidation of triple talaq, and fundamental rights jurisprudence.'}
        </p>
      </div>

      {/* Cases Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredCases.map((cs) => {
          const isExpanded = expandedCases[cs.id] || false;
          return (
            <div
              key={cs.id}
              id={`case-card-${cs.id}`}
              className="bg-[#ffffff]/90 border border-amber-500/25 rounded-xl shadow-lg overflow-hidden transition"
            >
              {/* Header */}
              <div
                onClick={() => toggleExpand(cs.id)}
                className="p-4 cursor-pointer hover:bg-slate-100/50 flex items-center justify-between gap-4 border-b border-slate-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-slate-300 flex flex-col items-center justify-center text-blue-900 shrink-0">
                    <Scale className="w-4 h-4 text-blue-900" />
                    <span className="text-[10px] font-bold font-mono mt-0.5">{cs.year}</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{cs.caseName}</h3>
                    <p className="text-xs text-blue-900/90 font-medium mt-0.5">
                      {language === 'hi' ? cs.subject.hi : cs.subject.en}
                    </p>
                    {cs.benchOrJudge && (
                      <span className="text-[11px] text-slate-600 block mt-0.5">
                        {language === 'hi' ? `पीठ / न्यायाधीश: ${cs.benchOrJudge}` : `Bench: ${cs.benchOrJudge}`}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-blue-900 hidden sm:inline">
                    {isExpanded ? (language === 'hi' ? 'संक्षिप्त' : 'Close') : (language === 'hi' ? 'फैसला देखें' : 'View Ruling')}
                  </span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-blue-900" /> : <ChevronDown className="w-5 h-5 text-blue-900" />}
                </div>
              </div>

              {/* Ruling Details - forced visible in print */}
              <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block p-5 bg-[#f8fafc]/60 print:bg-white space-y-3 text-xs`}>
                <div className="bg-[#f8fafc] print:bg-gray-50 p-3.5 rounded-lg border border-slate-200 print:border-gray-300 space-y-1">
                  <span className="font-bold text-blue-900 print:text-black block">
                    {language === 'hi' ? 'अदालत का ऐतिहासिक फैसला एवं सिद्धांत (हिन्दी):' : 'Supreme Court Ruling & Legal Principle:'}
                  </span>
                  <p className="text-slate-800 print:text-black leading-relaxed">{cs.rulingSummary.hi}</p>
                </div>

                <div className="bg-[#f8fafc] print:bg-gray-50 p-3 rounded-lg border border-slate-200 print:border-gray-300 space-y-1">
                  <span className="font-bold text-sky-400 print:text-gray-700 block">English Summary & Context:</span>
                  <p className="text-slate-600 print:text-gray-800 leading-relaxed font-sans">{cs.rulingSummary.en}</p>
                </div>

                {/* Constitutional Articles Linked */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200 print:border-gray-300">
                  <span className="text-[11px] font-semibold text-slate-600 print:text-gray-700">
                    {language === 'hi' ? 'संबंधित अनुच्छेद:' : 'Related Articles:'}
                  </span>
                  {cs.constitutionalArticles.map((art, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-amber-500/10 print:bg-gray-100 border border-slate-300 print:border-black text-blue-900 print:text-black text-[11px] font-mono"
                    >
                      {art}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
