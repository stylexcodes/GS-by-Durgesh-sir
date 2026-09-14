import React from 'react';
import { Language } from '../types';
import { Download, ExternalLink, X, BookOpen, CheckCircle, Sparkles, Layers, ShieldAlert } from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const handleOpenBooklet = (hash?: string) => {
    // Open the pure-content textbook print booklet in a new clean window (bypasses iframe print limits)
    const targetUrl = hash ? `/gs_booklet.html#${hash}` : '/gs_booklet.html';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadDirect = async () => {
    try {
      const response = await fetch('/gs_booklet.html');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'GS_Durgesh_Pandey_Sir_Polity_Booklet.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      window.open('/gs_booklet.html', '_blank');
    }
  };

  const sections = [
    { id: 'sec-1', labelHi: '📑 1. अध्याय अनुक्रमणिका', labelEn: '📑 1. Master Index', pgs: 'P. 2–4' },
    { id: 'sec-2', labelHi: '📜 2. अनुच्छेद 1-395+ (भाग 1-22)', labelEn: '📜 2. Articles 1-395+ (Parts I-XXII)', pgs: 'P. 5–90' },
    { id: 'sec-3', labelHi: '🏛️ 3. 18 ऐतिहासिक अधिनियम', labelEn: '🏛️ 3. 18 Historical Acts', pgs: 'P. 91–99' },
    { id: 'sec-4', labelHi: '📋 4. संविधान की 12 अनुसूचियां', labelEn: '📋 4. 12 Schedules', pgs: 'P. 100–104' },
    { id: 'sec-5', labelHi: '⚡ 5. मैजिक 89 एवं 90 जोड़े', labelEn: '⚡ 5. Magic 89/90 Pairs', pgs: 'P. 105–107' },
    { id: 'sec-6', labelHi: '💡 6. 18+ स्मार्ट ट्रिक्स व सूत्र', labelEn: '💡 6. 18+ Polity Tricks', pgs: 'P. 108–115', highlight: true },
    { id: 'sec-7', labelHi: '⚖️ 7. 45 ऐतिहासिक सुप्रीम कोर्ट वाद', labelEn: '⚖️ 7. 45 Landmark SC Cases', pgs: 'P. 116–124' },
    { id: 'sec-8', labelHi: '📚 8. शब्दावली एवं नए कानून 2024', labelEn: '📚 8. Polity Terms & 2024 Laws', pgs: 'P. 125–128' },
    { id: 'sec-9', labelHi: '📝 9. 182 विगत प्रश्न बैंक (PYQ)', labelEn: '📝 9. 182 PYQ Bank', pgs: 'P. 129–156', highlight: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#0f1b34] border border-amber-500/50 rounded-2xl max-w-xl w-full p-5 sm:p-6 shadow-2xl relative text-white space-y-4 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title Header */}
        <div className="flex items-start gap-3.5 border-b border-slate-800 pb-3">
          <div className="p-2.5 bg-amber-500/15 border border-amber-500/40 rounded-xl text-amber-400 shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white font-cinzel">
              {language === 'hi' ? 'द्विभाषी टेक्स्टबुक बुकलेट सेव करें' : 'Download / Save Polity Booklet (PDF)'}
            </h2>
            <p className="text-xs text-amber-400/90 font-medium mt-0.5">
              GS By Durgesh Pandey Sir • High-Contrast Dark Print Compendium
            </p>
          </div>
        </div>

        {/* Windows Print Spooler Advice Banner */}
        <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-3 text-xs text-amber-200 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-300 font-bold block mb-0.5">
              {language === 'hi' ? '⚠️ प्रिंट एरर से बचने के लिए महत्वपूर्ण निर्देश:' : '⚠️ Important for Windows Users (Fix Print Failed):'}
            </strong>
            {language === 'hi'
              ? 'Chrome में प्रिंट विंडो खुलने पर Destination (गंतव्य) में "Microsoft Print to PDF" के स्थान पर "Save as PDF" (PDF के रूप में सहेजें) चुनें।'
              : 'In Chrome’s Print dialog, choose "Save as PDF" (Chrome direct engine) instead of "Microsoft Print to PDF" in the Destination dropdown.'}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-2 pt-1">
          <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'hi' ? 'संपूर्ण बुकलेट (All 9 Sections • Optimized):' : 'Complete Master Book (All 9 Sections):'}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => handleOpenBooklet()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-slate-950" />
              <span>
                {language === 'hi' ? '📖 संपूर्ण बुकलेट खोलें (Print Full Book)' : '📖 Open Complete Booklet'}
              </span>
            </button>

            <button
              onClick={handleDownloadDirect}
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#162544] hover:bg-[#1c3058] border border-slate-700 text-amber-300 font-semibold text-xs sm:text-sm transition cursor-pointer"
              title="Save standalone offline HTML file"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>
                {language === 'hi' ? '💾 ऑफलाइन फाइल (.html)' : '💾 Offline (.html)'}
              </span>
            </button>
          </div>
        </div>

        {/* Fast Section-Wise Print Grid */}
        <div className="space-y-2 pt-1 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              {language === 'hi' ? '⚡ त्वरित विषय-वार प्रिंट (Instant 2-Sec Save):' : '⚡ Instant Section-Wise Print (Fast 2-Sec Save):'}
            </span>
            <span className="text-[11px] text-slate-400">
              {language === 'hi' ? 'कम पेज • शून्य लोड समय' : 'Lightweight • No Freezes'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleOpenBooklet(sec.id)}
                className={`flex items-center justify-between p-2 sm:p-2.5 rounded-lg border text-left transition text-xs cursor-pointer ${
                  sec.highlight
                    ? 'bg-[#152749] hover:bg-[#1a3360] border-amber-500/40 text-amber-300'
                    : 'bg-[#0d172e] hover:bg-[#142344] border-slate-800 text-slate-200'
                }`}
              >
                <span className="font-semibold truncate">
                  {language === 'hi' ? sec.labelHi : sec.labelEn}
                </span>
                <span className="text-[10px] text-slate-400 shrink-0 ml-1.5 font-mono">
                  {sec.pgs}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Key Inclusions Checklist */}
        <div className="bg-[#091224] p-3 rounded-xl border border-slate-800/80 space-y-1 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>
              {language === 'hi' ? '100% प्रामाणिक द्विभाषी सामग्री सुरक्षित:' : '100% Bilingual Content Verified:'}
            </span>
          </div>
          <div className="text-slate-400 leading-relaxed">
            • 395+ अनुच्छेद (भाग 1-22) • 18 ऐतिहासिक अधिनियम (1773-1947) • 12 अनुसूचियां • 30 मैजिक 89/90 जोड़े • 18+ स्मार्ट ट्रिक्स • 45 लैंडमार्क वाद • 22 शब्दावली व 182 विगत प्रश्न बैंक।
          </div>
        </div>
      </div>
    </div>
  );
};
