import React from 'react';
import { Language } from '../types';
import { Printer, Download, ExternalLink, X, BookOpen, CheckCircle, FileText } from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const handleOpenBooklet = () => {
    // Open the pure-content textbook print booklet in a new clean window
    window.open('/gs_booklet.html', '_blank', 'noopener,noreferrer');
  };

  const handleDownloadDirect = async () => {
    try {
      const response = await fetch('/gs_booklet.html');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'gs_booklet.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      window.open('/gs_booklet.html', '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#111d38] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-white space-y-5"
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
        <div className="flex items-start gap-3.5 border-b border-slate-800 pb-4">
          <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-400 shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white font-cinzel">
              {language === 'hi' ? 'संपूर्ण टेक्स्टबुक बुकलेट सेव करें' : 'Save Complete Textbook Booklet / PDF'}
            </h2>
            <p className="text-xs text-amber-300/90 mt-0.5">
              GS By Durgesh Pandey Sir • Master Polity Compendium
            </p>
          </div>
        </div>

        {/* Description & Features */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
          <p className="bg-[#0e1a33] p-3 rounded-xl border border-slate-800 text-slate-300">
            {language === 'hi'
              ? 'ब्राउज़र क्रैश और हैंग से बचने के लिए, संपूर्ण नोट्स को सेव करने हेतु एक पृथक हाई-कंट्रास्ट प्रिंटेड डॉक्यूमेंट (gs_booklet.html) के रूप में तैयार किया गया है।'
              : 'To prevent browser freezes from heavy page loads, all notes are prepared and ready to save in a dedicated, high-contrast textbook document (gs_booklet.html).'}
          </p>

          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {language === 'hi'
                  ? 'सभी 395+ अनुच्छेद, 18 ऐतिहासिक अधिनियम, 12 अनुसूचियां, 30 मैजिक जोड़े'
                  : 'Articles 1-395+, 18 Historical Acts, 12 Schedules, 30 Magic Pairs'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {language === 'hi'
                  ? '45 सर्वोच्च न्यायालय के ऐतिहासिक वाद एवं 182 परीक्षा प्रश्न बैंक संपूर्ण'
                  : '45 Supreme Court Landmark Cases & 182 Official Past Year Questions'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {language === 'hi'
                  ? 'गहरा नेवी बैकग्राउंड, स्वर्णिम व श्वेत टेक्स्ट, A4 पोर्ट्रेट लेआउट'
                  : 'Deep navy background, crisp gold & white text, A4 portrait layout'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
          <button
            onClick={handleOpenBooklet}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-slate-950" />
            <span>
              {language === 'hi' ? '📖 प्रिंट बुकलेट खोलें (Open Booklet)' : '📖 Open Textbook Booklet'}
            </span>
          </button>

          <button
            onClick={handleDownloadDirect}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#162544] hover:bg-[#1c3058] border border-slate-700 text-amber-300 font-semibold text-xs sm:text-sm transition cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>
              {language === 'hi' ? 'सीधे डाउनलोड करें (Save HTML)' : 'Direct Save HTML'}
            </span>
          </button>
        </div>

        <p className="text-[11px] text-center text-slate-400">
          {language === 'hi'
            ? 'बुकलेट खुलने पर कीबोर्ड से Ctrl + P (या Command + P) दबाकर सीधे PDF सेव करें।'
            : 'Once the booklet opens, simply press Ctrl + P (or Command + P) to Save as PDF.'}
        </p>
      </div>
    </div>
  );
};
