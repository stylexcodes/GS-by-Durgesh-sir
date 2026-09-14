import React, { useState } from 'react';
import { ScheduleItem, Language } from '../types';
import { Layers, ChevronDown, ChevronUp, FileText, CheckCircle } from 'lucide-react';

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

  const toggleExpand = (num: number) => {
    setExpandedSchedules((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-[#111d38] to-[#162747] border border-amber-500/25 rounded-xl p-5 shadow-xl">
        <h2 className="text-lg font-bold text-white font-cinzel flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          {language === 'hi'
            ? 'भारतीय संविधान की सभी 12 अनुसूचियां (Schedules 1 - 12)'
            : 'All 12 Schedules of the Indian Constitution'}
        </h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'मूल संविधान में केवल 8 अनुसूचियां थीं; वर्तमान में 12 अनुसूचियां हैं। वेतन, शपथ, राज्यसभा सीटें, 3 सूचियां, 22 भाषाएं, दल-बदल व पंचायती/नगरीय विषयों का संपूर्ण तुलनात्मक विवरण।'
            : 'Originally 8 schedules; now 12 schedules covering territorial jurisdiction, salaries, oaths, Rajya Sabha seat matrix, 3 lists, 22 scheduled languages, anti-defection, and local governance.'}
        </p>
      </div>

      {/* Schedules Accordion List */}
      <div className="grid grid-cols-1 gap-4">
        {schedules.map((sch) => {
          const isExpanded = expandedSchedules[sch.number] || false;
          return (
            <div
              key={sch.number}
              id={`schedule-card-${sch.number}`}
              className="bg-[#111d38]/90 border border-amber-500/25 rounded-xl shadow-lg overflow-hidden transition"
            >
              {/* Header */}
              <div
                onClick={() => toggleExpand(sch.number)}
                className="p-4 cursor-pointer hover:bg-[#162544] flex items-center justify-between gap-3 border-b border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 font-cinzel text-base">
                    {sch.number}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {language === 'hi' ? sch.title.hi : sch.title.en}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {language === 'hi' ? sch.description.hi : sch.description.en}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="text-amber-400 hover:text-amber-300 p-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Details Drawer - forced visible in print */}
              <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block p-5 bg-[#0c162c]/60 print:bg-white space-y-4`}>
                <div className="text-xs text-slate-200 print:text-black leading-relaxed bg-[#0e1a33] print:bg-gray-50 p-3 rounded-lg border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-amber-400 print:text-black block mb-1">
                    {language === 'hi' ? 'अनुसूची का सार:' : 'Schedule Summary:'}
                  </span>
                  <p>{language === 'hi' ? sch.description.hi : sch.description.en}</p>
                </div>

                {sch.details && sch.details.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400 print:text-black uppercase tracking-wider block">
                      {language === 'hi' ? 'महत्वपूर्ण संवैधानिक बिंदु एवं आंकड़े:' : 'Constitutional Details & Data:'}
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {sch.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="bg-[#0e1a33] print:bg-gray-50 p-3 rounded-lg border border-slate-800 print:border-gray-300 flex items-start gap-2.5 text-xs text-slate-200 print:text-black"
                        >
                          <CheckCircle className="w-4 h-4 text-amber-400 print:text-black shrink-0 mt-0.5 no-print" />
                          <div className="space-y-1">
                            <div>{language === 'hi' ? detail.hi : detail.en}</div>
                            <div className="text-[11px] text-slate-400 print:text-gray-700 font-sans border-t border-slate-800 print:border-gray-300 pt-1">
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
                    <span className="text-[11px] font-semibold text-slate-400 print:text-gray-700">
                      {language === 'hi' ? 'संबंधित अनुच्छेद:' : 'Related Articles:'}
                    </span>
                    {sch.relatedArticles.map((art, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-amber-500/15 print:bg-gray-100 border border-amber-500/30 print:border-black text-amber-400 print:text-black text-[11px] font-mono"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
