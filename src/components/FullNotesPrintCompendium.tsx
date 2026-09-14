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
import { POLITY_TRICKS_DATA } from '../data/tricksData';

interface FullNotesPrintCompendiumProps {
  language?: Language;
}

export const FullNotesPrintCompendium: React.FC<FullNotesPrintCompendiumProps> = () => {
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
    <div id="full-notes-print-compendium" className="print-only-compendium master-container bg-[#060c18] text-[#f8fafc] font-sans leading-relaxed">
      {/* WATERMARK ON EVERY PAGE - GS By Durgesh Pandey Sir */}
      <div className="print-watermark" aria-hidden="true">
        <div className="print-watermark-content">
          <div className="print-watermark-title">GS By Durgesh Pandey Sir</div>
          <div className="print-watermark-sub">Indian Polity & Constitution Master Compendium</div>
        </div>
      </div>

      {/* Running Header for every printed page */}
      <div className="print-running-header" aria-hidden="true">
        <span className="print-running-title font-bold text-[#fbbf24]">
          GS By Durgesh Pandey Sir • Complete Bilingual Polity Compendium (Dark Edition)
        </span>
        <span className="print-running-sub text-xs text-amber-200">
          UPSI Master Compendium • Save Edition
        </span>
      </div>

      {/* Running Footer for every printed page */}
      <div className="print-running-footer" aria-hidden="true">
        <span>Official Classroom Study Notes • GS By Durgesh Pandey Sir</span>
        <span>Complete Bilingual (Hindi & English) Master Repository</span>
      </div>

      {/* COVER / TITLE BANNER (BILINGUAL) */}
      <div className="print-cover-sheet border-b-4 border-amber-500 pb-6 mb-8 text-center print-page-avoid-break bg-[#060c18]">
        <div className="inline-block border border-amber-500 bg-amber-500/15 px-4 py-1 text-xs font-bold tracking-widest uppercase mb-3 text-[#fbbf24] rounded">
          COMPLETE BILINGUAL MASTER STUDY REPOSITORY (DARK EDITION)
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#fbbf24] mb-1 font-serif">
          GS By Durgesh Pandey Sir
        </h1>
        <h2 className="text-base sm:text-lg font-bold text-slate-100 mb-1">
          भारतीय संविधान एवं राजव्यवस्था • सम्पूर्ण पाठ्यक्रम प्रामाणिक नोट्स
        </h2>
        <div className="text-sm font-semibold text-slate-300 mb-3">
          Complete Bilingual Master Compendium (Hindi & English)
        </div>
        <p className="text-xs text-slate-300 max-w-3xl mx-auto leading-normal">
          विशेष रूप से उत्तर प्रदेश उप-निरीक्षक (UPSI), यूपी पुलिस कांस्टेबल, SSC CGL/CPO, RO/ARO एवं राज्य लोक सेवा आयोग परीक्षाओं हेतु।
          Includes 28 Chapters Complete Index, Articles 1-395+, 18 Historical Acts (1773-1947), 12 Schedules, 30 Magic 89/90 Comparative Pairs, 18+ Constitutional Smart Tricks & Mnemonics, 45 Landmark Supreme Court Verdicts, Polity Terminology & New 2024 Laws, and 182 Practice Questions with Bilingual Solutions.
        </p>
        <div className="mt-4 pt-3 border-t border-[#1a3458] flex flex-wrap justify-center gap-3 text-xs font-semibold text-[#fbbf24]">
          <span>📖 395+ Articles</span>
          <span>•</span>
          <span>🏛️ 18 Historical Acts</span>
          <span>•</span>
          <span>📋 12 Schedules</span>
          <span>•</span>
          <span>⚡ 30 Magic 89 Pairs</span>
          <span>•</span>
          <span>💡 18+ Smart Tricks</span>
          <span>•</span>
          <span>⚖️ 45 Landmark SC Cases</span>
          <span>•</span>
          <span>📚 22 Polity Terms</span>
          <span>•</span>
          <span>📝 182 Question Bank</span>
        </div>
      </div>

      {/* SECTION 1: MASTER TABLE OF CONTENTS & PAGE DIRECTORY (SIMPLIFIED BILINGUAL INDEX • ENGLISH 1ST) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4 flex justify-between items-baseline">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24]">
            1. Master Table of Contents & Page Directory (प्रामाणिक विषय सूची एवं सम्पूर्ण पृष्ठ निर्देशिका)
          </h2>
          <span className="border border-amber-500 px-2 py-0.5 rounded text-xs font-bold bg-[#152744] text-[#fbbf24] font-mono">
            PAGE NO. 2
          </span>
        </div>

        {/* DIRECT PAGE NAVIGATION INDEX • त्वरित पृष्ठ निर्देशिका */}
        <div className="print-page-avoid-break mb-6">
          <div className="bg-gradient-to-r from-[#12233d] to-[#0c182c] border border-amber-500/40 p-3 rounded-t text-xs font-bold text-[#fbbf24] flex justify-between items-center">
            <span>⚡ DIRECT PAGE NAVIGATION INDEX • त्वरित पृष्ठ निर्देशिका (Bilingual / द्विभाषी)</span>
            <span className="text-[11px] text-slate-300 font-normal">A4 Portrait Print Edition • Verified Page References</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-x border-b border-[#1a3458] bg-[#081324] rounded-b">
            {/* Card 1: Part I to XXII */}
            <div className="bg-[#0d1b32] border-2 border-[#1e3a5f] hover:border-amber-500/60 p-4 rounded-lg flex flex-col justify-between shadow-md">
              <div>
                <div className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-wider mb-1">
                  CORE CONSTITUTIONAL STUDY • मुख्य संवैधानिक अध्ययन
                </div>
                <h3 className="text-base font-black text-[#fbbf24] mb-1">
                  PART I TO XXII (ARTICLES 1 TO 395)
                </h3>
                <p className="text-xs text-slate-200 leading-snug">
                  All 22 Constitutional Parts & Complete Articles (संविधान के सभी 22 भाग एवं सम्पूर्ण 395+ अनुच्छेद व्याख्या)
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1a3458] flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-300">Direct Page Reference:</span>
                <span className="bg-[#060c18] border border-amber-500 text-[#fbbf24] font-mono font-black text-sm px-3 py-1 rounded">
                  PAGE NO. 3 TO 88
                </span>
              </div>
            </div>

            {/* Card 2: Mnemonics 18+ Tricks */}
            <div className="bg-[#0d1b32] border-2 border-[#1e3a5f] hover:border-amber-500/60 p-4 rounded-lg flex flex-col justify-between shadow-md">
              <div>
                <div className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-wider mb-1">
                  HIGH-YIELD MEMORY FORMULAS • स्मरण सूत्र एवं शॉर्ट ट्रिक्स
                </div>
                <h3 className="text-base font-black text-[#fbbf24] mb-1">
                  FOR MNEMONICS (18+ SMART TRICKS)
                </h3>
                <p className="text-xs text-slate-200 leading-snug">
                  Constitutional Memory Formulas & Short Tricks (संविधान स्मरण सूत्र, ट्रिक्स एवं विशेष स्मृति तकनीकें)
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1a3458] flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-300">Direct Page Reference:</span>
                <span className="bg-[#060c18] border border-amber-500 text-[#fbbf24] font-mono font-black text-sm px-3 py-1 rounded">
                  PAGE NO. 106 TO 113
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Overview Strip */}
        <div className="print-page-avoid-break bg-[#0d1b32] border border-[#1a3458] rounded p-3 text-xs space-y-2">
          <div className="text-[#fbbf24] font-bold border-b border-[#1a3458] pb-1.5 flex justify-between items-center">
            <span>📋 Executive Overview of Master Modules (मुख्य अध्ययन खंड अवलोकन)</span>
            <span className="text-slate-400 font-normal text-[11px]">154 Pages Complete Official Compendium</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200 text-[11.5px]">
            <div className="bg-[#081324] p-2 rounded border border-[#142844]">
              <strong className="text-slate-100">Total Compendium Size / संकलन आकार:</strong> 154 Print Pages (मुद्रण पृष्ठ) • A4 Portrait Print-Ready Bilingual Edition
            </div>
            <div className="bg-[#081324] p-2 rounded border border-[#142844]">
              <strong className="text-slate-100">Constitutional Articles / अनुच्छेद व भाग:</strong> 395+ Articles • 22 Parts (भाग 1-22) • 18 Historical Acts • 12 Schedules (अनुसूचियां)
            </div>
            <div className="bg-[#081324] p-2 rounded border border-[#142844]">
              <strong className="text-slate-100">Smart Exam Modules / स्मार्ट मॉड्यूल:</strong> 30 Magic Pairs • 18+ Mnemonics • 45 SC Cases • 22 Terms & 2024 Laws
            </div>
            <div className="bg-[#081324] p-2 rounded border border-[#142844]">
              <strong className="text-slate-100">Practice Bank / अभ्यास प्रश्न बैंक:</strong> 182 Past Year Questions (PYQs) • 4 Bilingual Options with Complete Explanations
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONSTITUTIONAL ARTICLES (PART 1 TO 22 • BILINGUAL • ENGLISH 1ST) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>2. Articles of the Constitution of India • भारतीय संविधान के अनुच्छेद (Articles 1 - 395)</span>
            <span className="text-xs font-normal text-slate-300">Parts 1 to 22 • Bilingual High-Yield Notes (English 1st)</span>
          </h2>
        </div>

        <div className="space-y-6">
          {articlesByPart.map((group, groupIdx) => (
            <div key={groupIdx} className="print-part-group">
              <div className="print-part-header bg-gradient-to-r from-[#10213b] to-[#0c182c] border-l-4 border-amber-500 p-2 mb-3 text-sm font-bold text-[#fbbf24] rounded-r">
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
                      className="print-page-avoid-break border border-[#1a3458] p-3.5 rounded bg-[#0d1b32] text-xs space-y-1.5 shadow-md"
                    >
                      <div className="flex justify-between items-start gap-2 border-b border-[#1a3458] pb-1.5">
                        <div className="font-bold text-sm text-[#fbbf24]">
                          <span className="border border-amber-500 px-1.5 py-0.5 rounded text-xs bg-[#152744] text-[#fbbf24] mr-2 font-mono">
                            Article {artNum} • अनुच्छेद {artNum}
                          </span>
                          <span className="text-[#f8fafc]">{art.title?.en || ''}</span>
                          <span className="text-xs font-normal text-[#fbbf24] block sm:inline sm:ml-2">
                            [{art.title?.hi || ''}]
                          </span>
                        </div>
                        {art.isImportant && (
                          <span className="border border-amber-500 px-1.5 py-0.5 text-[10px] font-bold uppercase shrink-0 bg-amber-500/20 text-amber-200 rounded">
                            ★ High-Yield
                          </span>
                        )}
                      </div>

                      {/* English Translation First */}
                      {descEn && (
                        <div className="text-[#f8fafc] leading-relaxed pt-1 font-medium">
                          <span className="font-bold text-[#60a5fa]">English Text: </span>
                          {descEn}
                        </div>
                      )}

                      {/* Full Hindi Text */}
                      <div className="text-[#cbd5e1] leading-relaxed text-[11.5px] pt-1 border-t border-dashed border-[#1a3458]">
                        <span className="font-bold text-[#fbbf24]">हिन्दी व्याख्या: </span>
                        {descHi}
                      </div>

                      {/* Key clauses if any */}
                      {art.clauseDetails && art.clauseDetails.length > 0 && (
                        <div className="mt-1.5 pt-1 border-t border-[#1a3458] space-y-1">
                          <span className="font-bold text-[11px] text-[#fbbf24]">Key Clauses & Analysis • उप-खंड:</span>
                          {art.clauseDetails.map((clause, cIdx) => (
                            <div key={cIdx} className="pl-2 border-l-2 border-amber-500 text-[11px] bg-[#091527] p-1.5 rounded-r">
                              {clause.en && <div className="text-[#f8fafc] font-medium">• {clause.en}</div>}
                              <div className="text-[10.5px] text-[#cbd5e1] pl-3 mt-0.5">हिंदी: {clause.hi}</div>
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

      {/* SECTION 3: HISTORICAL EVOLUTION (1773 - 1947 • BILINGUAL) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>3. भारत का संवैधानिक विकास (1773 - 1947)</span>
            <span className="text-xs font-normal text-slate-300">18 Major Historical Acts & Comparative Table</span>
          </h2>
        </div>

        <div className="space-y-4">
          {HISTORICAL_ACTS_DATA.map((act) => (
            <div
              key={act.id}
              className="print-page-avoid-break border border-[#1a3458] p-3.5 rounded bg-[#0d1b32] text-xs space-y-2 shadow-md"
            >
              <div className="flex justify-between items-center border-b border-[#1a3458] pb-1.5">
                <h3 className="font-bold text-sm text-[#fbbf24]">
                  <span className="bg-[#152744] border border-amber-500 text-[#fbbf24] px-2 py-0.5 rounded text-xs font-mono mr-2">
                    {act.year}
                  </span>
                  <span className="text-[#f8fafc]">{act.title.hi}</span>
                  <span className="text-[#cbd5e1] font-normal ml-2">({act.title.en})</span>
                </h3>
              </div>

              {/* Background */}
              <div className="text-[#f8fafc] leading-relaxed">
                <span className="font-bold text-[#fbbf24]">ऐतिहासिक पृष्ठभूमि (Context): </span>
                {act.background.hi}
                <div className="text-[11px] text-[#cbd5e1] mt-0.5">{act.background.en}</div>
              </div>

              {/* Provisions */}
              <div className="pt-1.5 border-t border-[#1a3458]">
                <span className="font-bold text-[#fbbf24] block mb-1">प्रमुख संवैधानिक प्रावधान (Key Provisions):</span>
                <ul className="list-disc list-inside space-y-1 pl-1 text-[#f8fafc]">
                  {act.provisions.map((prov, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      <span className="font-medium text-[#f8fafc]">{prov.hi}</span>
                      {prov.en && (
                        <div className="text-[10px] text-[#cbd5e1] pl-4 font-normal mt-0.5">{prov.en}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Objectives & Exam Notes */}
              {act.objectives && act.objectives.length > 0 && (
                <div className="pt-1.5 border-t border-[#1a3458]">
                  <span className="font-bold text-[#fbbf24] block mb-1">उद्देश्य एवं परीक्षा बिंदु (Objectives & Facts):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                    {act.objectives.map((obj, oIdx) => (
                      <div key={oIdx} className="bg-[#091527] border border-[#1a3458] p-2 rounded text-[#f8fafc]">
                        ✓ <strong>{obj.hi}</strong>
                        {obj.en && <div className="text-[10px] text-[#cbd5e1] mt-0.5">{obj.en}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trick / Mnemonic */}
              {act.trickMnemonic && (
                <div className="bg-[#091527] border border-amber-500 p-2.5 rounded text-[11px] text-[#f8fafc]">
                  <span className="font-bold text-[#fbbf24]">⚡ याद रखने की जादुई ट्रिक (Mnemonic Trick): </span>
                  <span className="font-medium">{act.trickMnemonic.hi}</span>
                  {act.trickMnemonic.en && (
                    <div className="text-[10px] text-[#cbd5e1] italic mt-0.5">{act.trickMnemonic.en}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: 12 SCHEDULES OF CONSTITUTION (BILINGUAL) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>4. संविधान की सभी 12 अनुसूचियां (Schedules 1 - 12)</span>
            <span className="text-xs font-normal text-slate-300">Complete Subject Lists & Amendment Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 text-xs">
          {SCHEDULES_DATA.map((sch) => (
            <div
              key={sch.number}
              className="print-page-avoid-break border border-[#1a3458] p-3.5 rounded bg-[#0d1b32] space-y-2 shadow-md"
            >
              <div className="flex justify-between items-center border-b border-[#1a3458] pb-1.5">
                <h3 className="font-bold text-sm text-[#fbbf24] flex items-center gap-2">
                  <span className="bg-[#152744] border border-amber-500 text-[#fbbf24] px-2 py-0.5 rounded font-mono text-xs">
                    अनुसूची {sch.number}
                  </span>
                  <span className="text-[#f8fafc]">{sch.title.hi}</span>
                  <span className="text-xs font-normal text-[#cbd5e1]">({sch.title.en})</span>
                </h3>
                {sch.relatedArticles && sch.relatedArticles.length > 0 && (
                  <span className="text-[11px] font-mono text-amber-200 border border-[#1a3458] px-1.5 py-0.5 rounded bg-[#091527]">
                    Art. {sch.relatedArticles.join(', ')}
                  </span>
                )}
              </div>

              <div className="text-[#f8fafc] leading-relaxed font-medium">
                <span className="font-semibold text-[#fbbf24]">विवरण (Description): </span>
                {sch.description.hi}
                <div className="text-[11px] text-[#cbd5e1] mt-0.5">{sch.description.en}</div>
              </div>

              {sch.details && sch.details.length > 0 && (
                <div className="border-t border-[#1a3458] pt-1.5">
                  <span className="font-bold text-[#fbbf24] block mb-1">विशेष प्रावधान (Key Provisions & Categories):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {sch.details.map((det, dIdx) => (
                      <div key={dIdx} className="bg-[#091527] border border-[#1a3458] p-2 rounded text-[11px] text-[#f8fafc]">
                        • <strong>{det.hi}</strong>
                        {det.en && <div className="text-[10px] text-[#cbd5e1] mt-0.5">{det.en}</div>}
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
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>5. जादुई ट्रिक: 89 एवं 90 का नियम (Center vs State Articles)</span>
            <span className="text-xs font-normal text-slate-300">Magic Number Memory Formula for 30 Pairs</span>
          </h2>
        </div>

        <div className="border border-amber-500 p-3 rounded mb-4 bg-[#091527] text-xs">
          <h4 className="font-bold text-sm text-[#fbbf24] mb-1">⚡ जादुई नियम का सिद्धांत (Mathematical Logic):</h4>
          <p className="text-[#f8fafc] leading-relaxed">
            <strong>+89 का नियम:</strong> केंद्र के अनुच्छेद 72 से 111 तक के अनुच्छेदों में 89 जोड़ने पर संबंधित राज्य (राज्यपाल/विधानमंडल) का अनुच्छेद प्राप्त होता है (उदा. Art 72 क्षमादान + 89 = Art 161 राज्यपाल क्षमादान)।<br/>
            <strong>+90 का नियम:</strong> केंद्र के अनुच्छेद 112 से 124 तक के अनुच्छेदों में 90 जोड़ने पर संबंधित राज्य का अनुच्छेद प्राप्त होता है (उदा. Art 112 केंद्रीय बजट + 90 = Art 202 राज्य बजट)।
          </p>
        </div>

        <div className="overflow-x-auto text-xs">
          <table className="w-full border-collapse border border-[#1a3458] bg-[#081324]">
            <thead>
              <tr className="bg-[#12233d] text-[#fbbf24] text-left">
                <th className="border border-[#1a3458] p-2">केंद्र अनुच्छेद</th>
                <th className="border border-[#1a3458] p-2">केंद्रीय विषय (Union)</th>
                <th className="border border-[#1a3458] p-2 text-center">जोड़ें</th>
                <th className="border border-[#1a3458] p-2">राज्य अनुच्छेद</th>
                <th className="border border-[#1a3458] p-2">राज्यीय विषय (State Equivalent)</th>
              </tr>
            </thead>
            <tbody>
              {MAGIC_89_PAIRS.map((pair, idx) => {
                const diff = pair.stateArticle - pair.centerArticle;
                const isEven = idx % 2 === 0;
                return (
                  <tr key={pair.id} className={`border border-[#1a3458] ${isEven ? 'bg-[#0d1b32]' : 'bg-[#091527]'}`}>
                    <td className="border border-[#1a3458] p-2 font-bold font-mono text-center text-[#fbbf24]">
                      Art. {pair.centerArticle}
                    </td>
                    <td className="border border-[#1a3458] p-2 font-medium text-[#f8fafc]">
                      {pair.centerSubject.hi}
                      <div className="text-[10px] text-[#cbd5e1]">{pair.centerSubject.en}</div>
                    </td>
                    <td className="border border-[#1a3458] p-2 text-center font-bold font-mono text-amber-300">
                      +{diff}
                    </td>
                    <td className="border border-[#1a3458] p-2 font-bold font-mono text-center text-[#fbbf24]">
                      Art. {pair.stateArticle}
                    </td>
                    <td className="border border-[#1a3458] p-2 font-medium text-[#f8fafc]">
                      {pair.stateSubject.hi}
                      <div className="text-[10px] text-[#cbd5e1]">{pair.stateSubject.en}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: CONSTITUTIONAL MEMORY TRICKS & MNEMONICS (18+ FORMULAS) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>6. संविधान स्मरण सूत्र एवं 18+ स्मार्ट ट्रिक्स (Polity Memory Tricks Bank)</span>
            <span className="text-xs font-normal text-slate-300">18 Proven Constitutional Mnemonics & Formulas</span>
          </h2>
        </div>

        {/* Overview Table */}
        <div className="overflow-x-auto text-xs mb-5 print-page-avoid-break">
          <table className="w-full border-collapse border border-[#1a3458] bg-[#081324]">
            <thead>
              <tr className="bg-[#12233d] text-[#fbbf24] text-left">
                <th className="border border-[#1a3458] p-2 text-center w-12">क्र.सं.</th>
                <th className="border border-[#1a3458] p-2 w-1/3">स्मार्ट ट्रिक सूत्र (Mnemonic Formula)</th>
                <th className="border border-[#1a3458] p-2">लक्षित संवैधानिक विषय (Target Constitutional Topic)</th>
              </tr>
            </thead>
            <tbody>
              {POLITY_TRICKS_DATA.map((t, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <tr key={t.id} className={`border border-[#1a3458] ${isEven ? 'bg-[#0d1b32]' : 'bg-[#091527]'}`}>
                    <td className="border border-[#1a3458] p-2 font-bold font-mono text-center text-[#fbbf24]">
                      #{t.sectionNumber || idx + 1}
                    </td>
                    <td className="border border-[#1a3458] p-2 font-bold text-[#f8fafc]">
                      <span className="text-[#fbbf24] bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500 font-mono">{t.hindiTrick}</span>
                      {t.englishTrick && (
                        <div className="text-[10px] text-[#cbd5e1] font-normal mt-1">{t.englishTrick}</div>
                      )}
                    </td>
                    <td className="border border-[#1a3458] p-2 text-[#f8fafc]">
                      <div className="font-semibold text-[#fbbf24]">{t.title.hi}</div>
                      <div className="text-[10px] text-slate-300">{t.targetTopic.hi}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Detailed Breakdown Cards */}
        <div className="space-y-4 text-xs">
          {POLITY_TRICKS_DATA.map((trick, tIdx) => (
            <div
              key={trick.id}
              className="print-page-avoid-break border border-[#1a3458] p-3.5 rounded bg-[#0d1b32] space-y-2.5 shadow-md"
            >
              <div className="flex justify-between items-start border-b border-[#1a3458] pb-1.5">
                <h3 className="font-bold text-sm text-[#fbbf24] flex items-center gap-2">
                  <span className="bg-[#152744] border border-amber-500 text-[#fbbf24] px-2 py-0.5 rounded text-xs font-mono">
                    ट्रिक #{trick.sectionNumber || tIdx + 1}
                  </span>
                  <span className="text-[#f8fafc]">{trick.title.hi}</span>
                  <span className="text-xs font-normal text-[#cbd5e1]">({trick.title.en})</span>
                </h3>
              </div>

              {/* Mnemonic Pill */}
              <div className="bg-[#091527] border border-amber-500 p-2.5 rounded">
                <div className="font-bold text-sm text-[#fbbf24]">
                  सूत्र: <span className="bg-amber-500/25 text-[#f8fafc] px-2 py-0.5 rounded border border-amber-500 font-mono text-xs">{trick.hindiTrick}</span>
                </div>
                {trick.englishTrick && (
                  <div className="text-[11px] text-[#cbd5e1] mt-1 font-mono">
                    English Formula: <span className="font-bold text-[#fbbf24]">{trick.englishTrick}</span>
                  </div>
                )}
                <div className="text-[11px] text-[#f8fafc] mt-1">
                  <strong className="text-[#fbbf24]">लक्षित विषय:</strong> {trick.targetTopic.hi} ({trick.targetTopic.en})
                </div>
              </div>

              {/* Hindi Breakdown Table / Grid */}
              {trick.breakdownHindi && trick.breakdownHindi.length > 0 && (
                <div className="pt-1">
                  <span className="font-bold text-[#fbbf24] block mb-1 text-[11px]">अक्षरशः विश्लेषण (Breakdown Table):</span>
                  <table className="w-full border-collapse border border-[#1a3458] text-[11px] bg-[#081324]">
                    <thead>
                      <tr className="bg-[#12233d] text-[#fbbf24]">
                        <th className="border border-[#1a3458] p-1.5 w-16 text-center font-bold">अक्षर/शब्द</th>
                        <th className="border border-[#1a3458] p-1.5 w-32 font-bold">संबद्ध राज्य/पद/देश</th>
                        <th className="border border-[#1a3458] p-1.5 font-bold">विस्तृत संवैधानिक अर्थ / अनुच्छेद</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trick.breakdownHindi.map((b, bIdx) => (
                        <tr key={bIdx} className="even:bg-[#091527]">
                          <td className="border border-[#1a3458] p-1.5 font-mono font-bold text-center text-[#fbbf24]">
                            {b.letter}
                          </td>
                          <td className="border border-[#1a3458] p-1.5 font-semibold text-[#f8fafc]">
                            {b.word}
                          </td>
                          <td className="border border-[#1a3458] p-1.5 text-[#cbd5e1]">
                            {b.meaning}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Specific Provisions */}
              {trick.specificProvisions && trick.specificProvisions.length > 0 && (
                <div className="pt-1 space-y-1.5">
                  <span className="font-bold text-[#fbbf24] block text-[11px]">विशिष्ट उप-सूत्र एवं स्मरण बिंदु (Specific Formulas):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {trick.specificProvisions.map((sp, spIdx) => (
                      <div key={spIdx} className="border border-[#1a3458] p-2 rounded bg-[#091527] text-[11px]">
                        <div className="font-bold text-[#fbbf24]">{sp.entity}: <span className="bg-amber-500/20 text-[#f8fafc] px-1 py-0.5 rounded border border-amber-500 font-mono text-[10px]">{sp.hindiTrick}</span></div>
                        <div className="text-[#cbd5e1] mt-1 text-[10px] leading-relaxed">{sp.provision.hi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* High Yield Exam Tips */}
              {trick.examTip && (
                <div className="bg-[#091527] border-l-3 border-amber-500 p-2.5 rounded text-[11px] text-[#f8fafc]">
                  <span className="font-bold text-[#fbbf24]">🎯 परीक्षा उपयोगी तथ्य (Exam Notes): </span>
                  <span>{trick.examTip.hi}</span>
                  {trick.examTip.en && (
                    <div className="text-[10px] text-[#cbd5e1] italic mt-0.5">{trick.examTip.en}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: LANDMARK JUDICIAL CASES (BILINGUAL) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>7. सर्वोच्च न्यायालय के ऐतिहासिक वाद (Landmark Judgments)</span>
            <span className="text-xs font-normal text-slate-300">45 Landmark Supreme Court Constitutional Verdicts</span>
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          {JUDICIAL_CASES_DATA.map((cs, idx) => (
            <div
              key={cs.id || idx}
              className="print-page-avoid-break border border-[#1a3458] p-3.5 rounded bg-[#0d1b32] space-y-1.5 shadow-md"
            >
              <div className="flex justify-between items-center border-b border-[#1a3458] pb-1">
                <h3 className="font-bold text-sm text-[#fbbf24]">
                  <span className="bg-[#152744] border border-amber-500 text-[#fbbf24] px-1.5 py-0.5 rounded text-xs mr-2">#{idx + 1}</span>
                  <span className="text-[#f8fafc]">{cs.caseName} ({cs.year})</span>
                </h3>
                <span className="font-mono text-[11px] text-amber-200 bg-[#091527] px-2 py-0.5 rounded border border-[#1a3458]">
                  {cs.court} {cs.benchOrJudge ? `• ${cs.benchOrJudge}` : ''}
                </span>
              </div>

              <div className="text-[#f8fafc]">
                <span className="font-bold text-[#fbbf24]">विषय (Subject): </span>
                <span>{cs.subject.hi}</span> <span className="text-[#cbd5e1] text-[11px]">({cs.subject.en})</span>
              </div>

              <div className="text-[#f8fafc] leading-relaxed bg-[#091527] border-l-3 border-amber-500 p-2.5 rounded-r">
                <span className="font-bold text-[#fbbf24]">न्यायालय का ऐतिहासिक निर्णय (Ruling Summary): </span>
                <span>{cs.rulingSummary.hi}</span>
                <div className="text-[11px] text-[#cbd5e1] mt-1 border-t border-dashed border-[#1a3458] pt-1">{cs.rulingSummary.en}</div>
              </div>

              {cs.constitutionalArticles && cs.constitutionalArticles.length > 0 && (
                <div className="text-[11px] text-slate-400 pt-1">
                  <span className="font-semibold text-[#fbbf24]">संबद्ध अनुच्छेद: </span>
                  <span className="font-mono text-amber-200">{cs.constitutionalArticles.join(', ')}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: POLITY TERMINOLOGY (BILINGUAL) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>8. संवैधानिक एवं संसदीय शब्दावली (Polity Terminology)</span>
            <span className="text-xs font-normal text-slate-300">Writs, Parliamentary Procedures & Technical Terms</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {POLITY_TERMS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="print-page-avoid-break border border-[#1a3458] p-3 rounded bg-[#0d1b32] space-y-1 shadow-md"
            >
              <div className="font-bold text-sm text-[#fbbf24] border-b border-[#1a3458] pb-1 flex justify-between">
                <span className="text-[#f8fafc]">{t.hindiTerm}</span>
                <span className="text-xs font-normal font-mono text-amber-200">({t.term})</span>
              </div>
              <div className="text-[#f8fafc] leading-relaxed">
                <span className="font-semibold text-[#fbbf24]">परिभाषा: </span>
                {t.definition.hi}
              </div>
              <div className="text-[#cbd5e1] text-[11px]">
                {t.definition.en}
              </div>
              {t.context && (
                <div className="text-[10px] text-slate-300 bg-[#091527] p-1.5 rounded border border-[#1a3458] mt-1">
                  <strong className="text-[#fbbf24]">संवैधानिक संदर्भ: </strong>{t.context.hi}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: PRACTICE QUESTION BANK (BILINGUAL WITH BILINGUAL OPTIONS) */}
      <section className="print-section mb-10 print-page-break-before">
        <div className="print-section-header border-b-2 border-amber-500 pb-2 mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#fbbf24] flex justify-between items-baseline">
            <span>9. UPSI विगत वर्षों के प्रश्न बैंक (Practice Questions with Detailed Solutions)</span>
            <span className="text-xs font-normal text-slate-300">UPSI, CPO, SSC & Police Exam Official PYQs</span>
          </h2>
        </div>

        <div className="space-y-4 text-xs">
          {QUESTIONS_BANK.map((q, idx) => {
            const qNum = q.questionNumber || idx + 1;
            return (
              <div
                key={q.id}
                className="print-page-avoid-break border border-[#1a3458] p-3.5 rounded bg-[#0d1b32] space-y-2 shadow-md"
              >
                <div className="flex justify-between items-start gap-2 border-b border-[#1a3458] pb-1.5">
                  <div className="font-bold text-sm text-[#f8fafc]">
                    <span className="bg-[#152744] border border-amber-500 text-[#fbbf24] px-1.5 py-0.5 rounded text-xs font-mono mr-2">
                      Q{qNum}
                    </span>
                    <span>{q.question.hi}</span>
                    <div className="text-xs font-normal text-[#cbd5e1] mt-0.5">
                      {q.question.en}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-200 border border-amber-500 px-1.5 py-0.5 rounded bg-amber-500/20 shrink-0">
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
                        className={`p-2 rounded border text-[11px] flex items-start gap-1.5 ${
                          isCorrect
                            ? 'bg-emerald-950/60 border-emerald-500 font-bold text-emerald-300'
                            : 'bg-[#091527] border-[#1a3458] text-[#e2e8f0]'
                        }`}
                      >
                        <span className="font-mono uppercase font-black shrink-0 text-[#fbbf24]">
                          ({optKey.toUpperCase()})
                        </span>
                        <div>
                          <span>{opt.hi}</span>
                          {opt.en && <span className="text-[10px] text-slate-400 block mt-0.5">{opt.en}</span>}
                        </div>
                        {isCorrect && (
                          <span className="ml-auto text-[10px] uppercase font-bold text-emerald-300 border border-emerald-500 px-1 rounded bg-emerald-900/40 shrink-0">
                            ✓ सही उत्तर
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Bilingual Explanation */}
                <div className="bg-[#091527] border-l-3 border-amber-500 p-2.5 rounded text-[11px] text-[#f8fafc] mt-1">
                  <span className="font-bold text-[#fbbf24]">व्याख्या एवं विश्लेषण (Explanation): </span>
                  <div>{q.explanation.hi}</div>
                  {q.explanation.en && (
                    <div className="text-[10px] text-[#cbd5e1] italic mt-0.5 border-t border-dashed border-[#1a3458] pt-1">{q.explanation.en}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL BACKPAGE / END NOTE */}
      <div className="border-t-2 border-amber-500 pt-4 text-center text-xs text-slate-400 print-page-avoid-break">
        <p className="font-bold text-[#fbbf24] text-sm">
          GS By Durgesh Pandey Sir • Complete Bilingual Polity Master Notes
        </p>
        <p className="text-[11px] text-slate-300 mt-1">
          सफलता का एकमात्र सूत्र: निरंतर अभ्यास एवं प्रामाणिक अध्ययन। सभी छात्रों के उज्ज्वल भविष्य की शुभकामनाएं!
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">
          Complete Authentic Bilingual Syllabus • Consistent Practice & Conceptual Clarity Leads to Success.
        </p>
      </div>
    </div>
  );
};
