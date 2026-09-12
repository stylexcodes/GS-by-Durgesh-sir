import React from 'react';
import { Language } from '../types';
import { CHAPTERS_INDEX } from '../data/chaptersIndex';
import { ARTICLES_DATA } from '../data/articlesData';
import { HISTORICAL_ACTS_DATA } from '../data/historicalActsData';
import { SCHEDULES_DATA } from '../data/schedulesData';
import { MAGIC_89_PAIRS } from '../data/magic89Data';
import { JUDICIAL_CASES_DATA } from '../data/judicialCasesData';
import { POLITY_TERMS_DATA } from '../data/polityTermsData';
import { QUESTIONS_BANK } from '../data/questionsBank';

interface FullNotesPrintCompendiumProps {
  language?: Language;
}

export const FullNotesPrintCompendium: React.FC<FullNotesPrintCompendiumProps> = ({ language = 'hi' }) => {
  // Group articles by constitutional part for structured textbook printing
  const articlesByPart = React.useMemo(() => {
    const groups: { partName: string; articles: typeof ARTICLES_DATA }[] = [];
    const partMap = new Map<string, typeof ARTICLES_DATA>();

    ARTICLES_DATA.forEach((art) => {
      const partKey = art.part || 'अन्य अनुच्छेद (Miscellaneous Articles)';
      if (!partMap.has(partKey)) {
        partMap.set(partKey, []);
      }
      partMap.get(partKey)!.push(art);
    });

    partMap.forEach((arts, partName) => {
      groups.push({ partName, articles: arts });
    });

    return groups;
  }, []);

  return (
    <div id="full-notes-print-compendium" className="print-only-compendium master-container bg-[#0a192f] text-white font-sans leading-relaxed">
      {/* WATERMARK ON EVERY PAGE - GS By Durgesh Pandey Sir */}
      <div className="print-watermark" aria-hidden="true">
        <span>GS By Durgesh Pandey Sir</span>
      </div>

      {/* Running Header for every printed page */}
      <div className="print-running-header" aria-hidden="true">
        <span className="print-running-title font-bold text-amber-400">
          GS By Durgesh Pandey Sir - Complete Bilingual Polity Study Notes
        </span>
        <span className="print-running-sub text-xs text-amber-200">
          UPSI Master Compendium • Save Edition
        </span>
      </div>

      {/* Running Footer for every printed page */}
      <div className="print-running-footer" aria-hidden="true">
        <span>Official Classroom Study Notes • GS By Durgesh Pandey Sir</span>
        <span>Complete Bilingual (Hindi & English) Edition</span>
      </div>

      {/* COVER / TITLE BANNER */}
      <div className="print-cover-sheet border-b-4 border-amber-500 pb-6 mb-8 text-center print-page-avoid-break bg-[#0a192f]">
        <div className="inline-block border border-amber-500 px-4 py-1 text-xs font-bold tracking-widest uppercase mb-3 text-amber-400">
          COMPLETE BILINGUAL MASTER STUDY REPOSITORY (SAVE EDITION)
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-amber-400 mb-1">
          GS By Durgesh Pandey Sir - Complete Bilingual Polity Study Notes
        </h1>
        <h2 className="text-base sm:text-lg font-bold text-amber-200 mb-3">
          भारतीय संविधान एवं राजव्यवस्था • सम्पूर्ण पाठ्यक्रम प्रामाणिक नोट्स
        </h2>
        <p className="text-xs text-slate-300 max-w-3xl mx-auto leading-normal">
          विशेष रूप से उत्तर प्रदेश उप-निरीक्षक (UPSI), यूपी पुलिस कांस्टेबल, SSC CGL/CPO, RO/ARO एवं राज्य लोक सेवा आयोग परीक्षाओं हेतु।
          Includes Articles 1-395+, 18 Historical Acts (1773-1947), 12 Schedules, Magic 89/90 Comparative Rules, 45 Landmark Supreme Court Verdicts, Polity Terminology, and 182 Practice Questions.
        </p>
        <div className="mt-4 pt-3 border-t border-slate-700 flex flex-wrap justify-center gap-4 text-xs font-semibold text-amber-300">
          <span>📖 395+ Articles</span>
          <span>•</span>
          <span>🏛️ 18 Historical Acts</span>
          <span>•</span>
          <span>📋 12 Schedules</span>
          <span>•</span>
          <span>⚡ 30 Magic 89 Pairs</span>
          <span>•</span>
          <span>⚖️ 45 Landmark SC Cases</span>
          <span>•</span>
          <span>📝 182 Question Bank</span>
        </div>
      </div>

      {/* SECTION 1: MASTER TABLE OF CONTENTS (27 CHAPTERS • COMPLETE INDEX) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4 flex justify-between items-baseline">
          <h2 className="text-xl font-bold uppercase tracking-wide text-amber-400">
            अध्याय अनुक्रमणिका एवं पृष्ठ विवरण (Table of Contents)
          </h2>
          <span className="text-xs font-bold text-amber-300">
            27 Chapters Complete • पृष्ठ 2 से 228
          </span>
        </div>

        <div className="overflow-x-auto print-page-avoid-break">
          <table className="w-full text-left border-collapse border border-[#1e3a5f] text-xs">
            <thead>
              <tr className="bg-[#0f2744] text-amber-400 border-b border-[#1e3a5f]">
                <th className="p-2 text-center border-r border-[#1e3a5f] w-12 font-bold">क्र.सं.</th>
                <th className="p-2 border-r border-[#1e3a5f] w-1/4 font-bold">अध्याय का नाम (Chapter Title)</th>
                <th className="p-2 border-r border-[#1e3a5f] font-bold">विस्तृत विषय-वस्तु (Coverage & Key Topics)</th>
                <th className="p-2 text-center w-24 font-bold">पृष्ठ संख्या</th>
              </tr>
            </thead>
            <tbody>
              {CHAPTERS_INDEX.map((ch, idx) => {
                const chNum = ch.chapterNumber || ch.number || idx + 1;
                const isEven = idx % 2 === 0;
                return (
                  <tr
                    key={ch.id || idx}
                    className={`border-b border-[#1e3a5f] ${isEven ? 'bg-[#0a192f]' : 'bg-[#0e213d]'}`}
                  >
                    <td className="p-2 text-center font-bold text-amber-400 border-r border-[#1e3a5f] align-top">
                      {chNum}
                    </td>
                    <td className="p-2 border-r border-[#1e3a5f] align-top">
                      <div className="font-bold text-white text-[13px]">{ch.title.hi}</div>
                      <div className="text-[11px] text-slate-300 font-medium">{ch.title.en}</div>
                    </td>
                    <td className="p-2 border-r border-[#1e3a5f] text-slate-200 text-[11.5px] leading-relaxed align-top">
                      {ch.description.hi}
                    </td>
                    <td className="p-2 text-center font-mono font-bold text-amber-300 border-r-0 align-top whitespace-nowrap text-[12px]">
                      {ch.pageRange}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2: CONSTITUTIONAL ARTICLES (PART 1 TO 22) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>भारतीय संविधान के अनुच्छेद (Articles 1 - 395)</span>
            <span className="text-xs font-normal text-gray-700">Parts 1 to 22 • Complete Legal Text & Notes</span>
          </h2>
        </div>

        <div className="space-y-6">
          {articlesByPart.map((group, groupIdx) => (
            <div key={groupIdx} className="print-part-group">
              <div className="print-part-header bg-gray-100 border-l-4 border-black p-2 mb-3 text-sm font-bold text-black">
                {group.partName}
              </div>

              <div className="space-y-3">
                {group.articles.map((art, artIdx) => {
                  const artNum = art.articleNumber || art.number || `${artIdx + 1}`;
                  const descHi = art.description?.hi || (art as any).content?.hi || (typeof art.description === 'string' ? art.description : '');
                  const descEn = art.description?.en || (art as any).content?.en || '';
                  return (
                    <div
                      key={art.id || `art-${artNum}-${artIdx}`}
                      className="print-page-avoid-break border border-gray-300 p-3 rounded bg-white text-xs space-y-1.5"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="font-bold text-sm text-black">
                          <span className="border border-black px-1.5 py-0.5 rounded text-xs bg-gray-50 mr-2 font-mono">
                            अनुच्छेद {artNum}
                          </span>
                          <span>{art.title?.hi || ''}</span>
                          <span className="text-xs font-normal text-gray-700 block sm:inline sm:ml-2">
                            ({art.title?.en || ''})
                          </span>
                        </div>
                        {art.isImportant && (
                          <span className="border border-black px-1.5 py-0.5 text-[10px] font-bold uppercase shrink-0 bg-gray-100">
                            ★ High-Yield
                          </span>
                        )}
                      </div>

                      {/* Full Hindi Text */}
                      <div className="text-gray-900 leading-relaxed pt-1">
                        <span className="font-bold text-black">हिन्दी व्याख्या: </span>
                        {descHi}
                      </div>

                      {/* English Translation */}
                      {descEn && (
                        <div className="text-gray-700 leading-relaxed text-[11px] pt-0.5 border-t border-gray-100">
                          <span className="font-semibold text-black">English Text: </span>
                          {descEn}
                        </div>
                      )}

                      {/* Key clauses if any */}
                      {art.clauseDetails && art.clauseDetails.length > 0 && (
                        <div className="mt-1.5 pt-1 border-t border-gray-200 space-y-1">
                          <span className="font-bold text-[11px] text-black">उप-खंड (Key Clauses):</span>
                          {art.clauseDetails.map((clause, cIdx) => (
                            <div key={cIdx} className="pl-2 border-l-2 border-gray-400 text-[11px] text-gray-800">
                              <div>• {clause.hi}</div>
                              {clause.en && <div className="text-[10px] text-gray-600 pl-2">{clause.en}</div>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: HISTORICAL EVOLUTION OF CONSTITUTION (1773 - 1947) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>भारत का संवैधानिक विकास (1773 - 1947)</span>
            <span className="text-xs font-normal text-gray-700">15 Major Historical Acts & Charters</span>
          </h2>
        </div>

        <div className="space-y-4">
          {HISTORICAL_ACTS_DATA.map((act) => (
            <div
              key={act.id}
              className="print-page-avoid-break border border-gray-400 p-3.5 rounded bg-white text-xs space-y-2"
            >
              <div className="flex justify-between items-center border-b border-gray-300 pb-1.5">
                <h3 className="font-bold text-sm text-black">
                  <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-mono mr-2">
                    {act.year}
                  </span>
                  {act.title.hi} ({act.title.en})
                </h3>
              </div>

              {/* Background */}
              <div className="text-gray-900 leading-relaxed">
                <span className="font-bold text-black">ऐतिहासिक पृष्ठभूमि (Context): </span>
                {act.background.hi}
                <div className="text-[11px] text-gray-700 mt-0.5 italic">{act.background.en}</div>
              </div>

              {/* Provisions */}
              <div className="pt-1.5 border-t border-gray-200">
                <span className="font-bold text-black block mb-1">प्रमुख संवैधानिक प्रावधान (Key Provisions):</span>
                <ul className="list-disc list-inside space-y-1 pl-1 text-gray-900">
                  {act.provisions.map((prov, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      <span className="font-medium">{prov.hi}</span>
                      {prov.en && (
                        <div className="text-[10px] text-gray-600 pl-4 font-normal">{prov.en}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Objectives & Exam Notes */}
              {act.objectives && act.objectives.length > 0 && (
                <div className="pt-1.5 border-t border-gray-200">
                  <span className="font-bold text-black block mb-1">उद्देश्य एवं परीक्षा बिंदु (Objectives & Facts):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-gray-800">
                    {act.objectives.map((obj, oIdx) => (
                      <div key={oIdx} className="bg-gray-50 border border-gray-200 p-1.5 rounded">
                        ✓ {obj.hi}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trick / Mnemonic */}
              {act.trickMnemonic && (
                <div className="bg-gray-100 border border-black p-2 rounded text-[11px] text-black">
                  <span className="font-bold">⚡ याद रखने की जादुई ट्रिक (Mnemonic Trick): </span>
                  <span>{act.trickMnemonic.hi}</span>
                  {act.trickMnemonic.en && (
                    <div className="text-[10px] text-gray-700 italic mt-0.5">{act.trickMnemonic.en}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: 12 SCHEDULES OF CONSTITUTION */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>संविधान की सभी 12 अनुसूचियां (Schedules 1 - 12)</span>
            <span className="text-xs font-normal text-gray-700">Complete Subject Lists & Amendment Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 text-xs">
          {SCHEDULES_DATA.map((sch) => (
            <div
              key={sch.number}
              className="print-page-avoid-break border border-gray-300 p-3 rounded bg-white space-y-2"
            >
              <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                <h3 className="font-bold text-sm text-black flex items-center gap-2">
                  <span className="bg-black text-white px-2 py-0.5 rounded font-mono text-xs">
                    अनुसूची {sch.number}
                  </span>
                  <span>{sch.title.hi}</span>
                  <span className="text-xs font-normal text-gray-600">({sch.title.en})</span>
                </h3>
                {sch.relatedArticles && sch.relatedArticles.length > 0 && (
                  <span className="text-[11px] font-mono text-gray-700 border border-gray-300 px-1.5 py-0.5 rounded bg-gray-50">
                    Art. {sch.relatedArticles.join(', ')}
                  </span>
                )}
              </div>

              <div className="text-gray-900 leading-relaxed">
                <span className="font-semibold text-black">विवरण (Description): </span>
                {sch.description.hi}
                <div className="text-[11px] text-gray-600 mt-0.5">{sch.description.en}</div>
              </div>

              {sch.details && sch.details.length > 0 && (
                <div className="border-t border-gray-200 pt-1.5">
                  <span className="font-bold text-black block mb-1">विशेष प्रावधान (Key Provisions & Categories):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {sch.details.map((det, dIdx) => (
                      <div key={dIdx} className="bg-gray-50 border border-gray-200 p-1.5 rounded text-[11px] text-gray-800">
                        • {det.hi}
                        {det.en && <div className="text-[10px] text-gray-600">{det.en}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: MAGIC 89 & 90 RULES (UNION VS STATE) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>जादुई ट्रिक: 89 एवं 90 का नियम (Center vs State Articles)</span>
            <span className="text-xs font-normal text-gray-700">Magic Number Memory Formula for 30 Pairs</span>
          </h2>
        </div>

        <div className="border border-black p-3 rounded mb-4 bg-gray-50 text-xs">
          <h4 className="font-bold text-sm text-black mb-1">⚡ जादुई नियम का सिद्धांत (Mathematical Logic):</h4>
          <p className="text-gray-800 leading-relaxed">
            <strong>+89 का नियम:</strong> केंद्र के अनुच्छेद 72 से 111 तक के अनुच्छेदों में 89 जोड़ने पर संबंधित राज्य (राज्यपाल/विधानमंडल) का अनुच्छेद प्राप्त होता है (उदा. Art 72 क्षमादान + 89 = Art 161 राज्यपाल क्षमादान)।<br/>
            <strong>+90 का नियम:</strong> केंद्र के अनुच्छेद 112 से 124 तक के अनुच्छेदों में 90 जोड़ने पर संबंधित राज्य का अनुच्छेद प्राप्त होता है (उदा. Art 112 केंद्रीय बजट + 90 = Art 202 राज्य बजट)।
          </p>
        </div>

        <div className="overflow-x-auto text-xs">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200 text-black text-left">
                <th className="border border-gray-400 p-1.5">केंद्र अनुच्छेद</th>
                <th className="border border-gray-400 p-1.5">केंद्रीय विषय (Union)</th>
                <th className="border border-gray-400 p-1.5 text-center">जोड़ें</th>
                <th className="border border-gray-400 p-1.5">राज्य अनुच्छेद</th>
                <th className="border border-gray-400 p-1.5">राज्यीय विषय (State Equivalent)</th>
              </tr>
            </thead>
            <tbody>
              {MAGIC_89_PAIRS.map((pair) => {
                const diff = pair.stateArticle - pair.centerArticle;
                return (
                  <tr key={pair.id} className="border border-gray-300 even:bg-gray-50">
                    <td className="border border-gray-300 p-1.5 font-bold font-mono text-center bg-gray-100">
                      Art. {pair.centerArticle}
                    </td>
                    <td className="border border-gray-300 p-1.5 font-medium text-black">
                      {pair.centerSubject.hi}
                      <div className="text-[10px] text-gray-600">{pair.centerSubject.en}</div>
                    </td>
                    <td className="border border-gray-300 p-1.5 text-center font-bold font-mono text-black">
                      +{diff}
                    </td>
                    <td className="border border-gray-300 p-1.5 font-bold font-mono text-center bg-gray-100">
                      Art. {pair.stateArticle}
                    </td>
                    <td className="border border-gray-300 p-1.5 font-medium text-black">
                      {pair.stateSubject.hi}
                      <div className="text-[10px] text-gray-600">{pair.stateSubject.en}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: LANDMARK JUDICIAL CASES */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>सर्वोच्च न्यायालय के ऐतिहासिक वाद (Landmark Judgments)</span>
            <span className="text-xs font-normal text-gray-700">Supreme Court Rulings & Basic Structure</span>
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          {JUDICIAL_CASES_DATA.map((cs) => (
            <div
              key={cs.id}
              className="print-page-avoid-break border border-gray-300 p-3 rounded bg-white space-y-1.5"
            >
              <div className="flex justify-between items-center border-b border-gray-200 pb-1">
                <h3 className="font-bold text-sm text-black">
                  {cs.caseName} ({cs.year})
                </h3>
                <span className="font-mono text-[11px] text-gray-700 bg-gray-100 px-2 py-0.5 rounded border border-gray-300">
                  {cs.court} {cs.benchOrJudge ? `• ${cs.benchOrJudge}` : ''}
                </span>
              </div>

              <div className="text-gray-900">
                <span className="font-bold text-black">विषय (Subject): </span>
                {cs.subject.hi} <span className="text-gray-600 text-[11px]">({cs.subject.en})</span>
              </div>

              <div className="text-gray-900 leading-relaxed bg-gray-50 border-l-2 border-black p-2">
                <span className="font-bold text-black">न्यायालय का ऐतिहासिक निर्णय (Ruling Summary): </span>
                {cs.rulingSummary.hi}
                <div className="text-[11px] text-gray-600 mt-0.5">{cs.rulingSummary.en}</div>
              </div>

              {cs.constitutionalArticles && cs.constitutionalArticles.length > 0 && (
                <div className="text-[11px] text-gray-700 pt-1">
                  <span className="font-semibold text-black">संबद्ध अनुच्छेद: </span>
                  <span className="font-mono">{cs.constitutionalArticles.join(', ')}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: POLITY TERMINOLOGY & PARLIAMENTARY TERMS */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>संवैधानिक एवं संसदीय शब्दावली (Polity Terminology)</span>
            <span className="text-xs font-normal text-gray-700">Writs, Parliamentary Procedures & Technical Terms</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {POLITY_TERMS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="print-page-avoid-break border border-gray-300 p-2.5 rounded bg-white space-y-1"
            >
              <div className="font-bold text-sm text-black border-b border-gray-200 pb-1 flex justify-between">
                <span>{t.hindiTerm}</span>
                <span className="text-xs font-normal font-mono text-gray-600">{t.term}</span>
              </div>
              <div className="text-gray-900 leading-relaxed">
                <span className="font-semibold text-black">परिभाषा: </span>
                {t.definition.hi}
              </div>
              <div className="text-gray-600 text-[11px]">
                {t.definition.en}
              </div>
              {t.context && (
                <div className="text-[10px] text-gray-700 bg-gray-50 p-1 rounded border border-gray-200">
                  <strong>संवैधानिक संदर्भ: </strong>{t.context.hi}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: PRACTICE QUESTION BANK WITH DETAILED SOLUTIONS */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black flex justify-between items-baseline">
            <span>UPSI विगत वर्षों के प्रश्न बैंक (Practice Questions with Detailed Solutions)</span>
            <span className="text-xs font-normal text-gray-700">UPSI, CPO, SSC & Police Exam Questions</span>
          </h2>
        </div>

        <div className="space-y-4 text-xs">
          {QUESTIONS_BANK.map((q, idx) => {
            const qNum = q.questionNumber || idx + 1;
            return (
              <div
                key={q.id}
                className="print-page-avoid-break border border-gray-400 p-3 rounded bg-white space-y-2"
              >
                <div className="flex justify-between items-start gap-2 border-b border-gray-300 pb-1.5">
                  <div className="font-bold text-sm text-black">
                    <span className="bg-black text-white px-1.5 py-0.5 rounded text-xs font-mono mr-2">
                      Q{qNum}
                    </span>
                    <span>{q.question.hi}</span>
                    <div className="text-xs font-normal text-gray-600 mt-0.5">
                      {q.question.en}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-gray-700 border border-gray-400 px-1.5 py-0.5 rounded bg-gray-100 shrink-0">
                    {q.examTag}
                  </span>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                  {(['a', 'b', 'c', 'd'] as const).map((optKey) => {
                    const isCorrect = q.correctAnswer === optKey;
                    const opt = q.options[optKey];
                    return (
                      <div
                        key={optKey}
                        className={`p-1.5 rounded border text-[11px] flex items-start gap-1.5 ${
                          isCorrect
                            ? 'bg-gray-100 border-black font-bold text-black'
                            : 'bg-white border-gray-200 text-gray-800'
                        }`}
                      >
                        <span className="font-mono uppercase font-black shrink-0">
                          ({optKey})
                        </span>
                        <div>
                          <span>{opt.hi}</span>
                          {opt.en && <span className="text-[10px] text-gray-600 block">{opt.en}</span>}
                        </div>
                        {isCorrect && (
                          <span className="ml-auto text-[10px] uppercase font-bold text-black border border-black px-1 rounded bg-white shrink-0">
                            ✓ सही उत्तर
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Bilingual Explanation */}
                <div className="bg-gray-50 border-l-2 border-black p-2 rounded text-[11px] text-gray-900 mt-1">
                  <span className="font-bold text-black">व्याख्या एवं विश्लेषण (Explanation): </span>
                  <div>{q.explanation.hi}</div>
                  {q.explanation.en && (
                    <div className="text-[10px] text-gray-600 italic mt-0.5">{q.explanation.en}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL BACKPAGE / END NOTE */}
      <div className="border-t-2 border-black pt-4 text-center text-xs text-gray-700 print-page-avoid-break">
        <p className="font-bold text-black">
          GS By Durgesh Pandey Sir • Complete Bilingual Polity Master Notes
        </p>
        <p className="text-[11px] text-gray-600">
          सफलता का एकमात्र सूत्र: निरंतर अभ्यास एवं प्रामाणिक अध्ययन। सभी छात्रों के उज्ज्वल भविष्य की शुभकामनाएं!
        </p>
      </div>
    </div>
  );
};
