import React, { useState, useEffect } from 'react';
import { ConstitutionalArticle, Language } from '../types';
import { 
  X, 
  Bookmark, 
  Star, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Columns2, 
  Type,
  ExternalLink
} from 'lucide-react';

interface ArticleDetailModalProps {
  article: ConstitutionalArticle | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  isOpen,
  onClose,
  language,
  onNavigatePrev,
  onNavigateNext,
  hasPrev = false,
  hasNext = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [viewMode, setViewMode] = useState<'bilingual' | 'active-lang'>('bilingual');
  const [activeClauseFilter, setActiveClauseFilter] = useState<string>('all');

  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onNavigatePrev) {
        onNavigatePrev();
      } else if (e.key === 'ArrowRight' && hasNext && onNavigateNext) {
        onNavigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrev, hasNext, onNavigatePrev, onNavigateNext, onClose]);

  if (!isOpen || !article) return null;

  const artNum = article.articleNumber || article.number || '';
  const desc = article.content || article.description;

  const handleCopy = () => {
    const textToCopy = `🏛️ Indian Constitution - Article ${artNum}\n${article.title.en} (${article.title.hi})\n\n[English Content]:\n${desc.en}\n\n[हिंदी विवरण]:\n${desc.hi}${
      article.clauseDetails && article.clauseDetails.length > 0
        ? `\n\n[Clauses / उप-खंड]:\n` + article.clauseDetails.map((c, i) => `(${i + 1}) ${c.en} / ${c.hi}`).join('\n')
        : ''
    }`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getFontSizeClass = () => {
    if (fontSizeLevel === 'large') return 'text-base leading-relaxed sm:text-[17px] sm:leading-[1.8]';
    if (fontSizeLevel === 'xlarge') return 'text-lg leading-relaxed sm:text-[19px] sm:leading-[1.9]';
    return 'text-sm leading-relaxed sm:text-[15px] sm:leading-[1.75]';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0d172e] border border-amber-500/40 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-modalPopUp"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-article-title"
      >
        {/* Modal Top Accent Header */}
        <div className="bg-gradient-to-r from-[#142347] via-[#101b38] to-[#0c162e] border-b border-amber-500/25 px-5 py-4 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-lg text-amber-400 font-cinzel font-black text-sm sm:text-base tracking-wide flex items-center gap-1.5 shadow-inner">
              <span>{language === 'hi' ? `अनुच्छेद ${artNum}` : `Article ${artNum}`}</span>
              {article.isImportant && (
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              )}
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-[#18294d] border border-slate-700 text-amber-300 font-medium flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                <span>{article.part}</span>
              </span>
              {article.isImportant && (
                <span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold">
                  {language === 'hi' ? '⭐ अति-महत्वपूर्ण (High-Yield)' : '⭐ High-Yield Focus'}
                </span>
              )}
            </div>
          </div>

          {/* Controls: Prev/Next, Font Scale, Copy, Close */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Article Navigation */}
            <div className="flex items-center bg-[#070e1e] border border-slate-700 rounded-lg p-0.5">
              <button
                onClick={onNavigatePrev}
                disabled={!hasPrev}
                className="p-1 text-slate-300 hover:text-amber-400 disabled:opacity-30 disabled:pointer-events-none transition rounded"
                title="Previous Article (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateNext}
                disabled={!hasNext}
                className="p-1 text-slate-300 hover:text-amber-400 disabled:opacity-30 disabled:pointer-events-none transition rounded"
                title="Next Article (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Readability Font Size Adjuster */}
            <div className="hidden sm:flex items-center bg-[#070e1e] border border-slate-700 rounded-lg p-0.5 text-xs text-slate-300">
              <button
                onClick={() => setFontSizeLevel('normal')}
                className={`px-2 py-1 rounded transition ${fontSizeLevel === 'normal' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:text-white'}`}
                title="Standard Text Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                className={`px-2 py-1 rounded transition ${fontSizeLevel === 'large' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:text-white'}`}
                title="Large Text Size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                className={`px-2 py-1 rounded transition ${fontSizeLevel === 'xlarge' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:text-white'}`}
                title="Extra Large Text Size"
              >
                A++
              </button>
            </div>

            {/* Bilingual Mode Toggle Button */}
            <button
              onClick={() => setViewMode(viewMode === 'bilingual' ? 'active-lang' : 'bilingual')}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition ${
                viewMode === 'bilingual'
                  ? 'bg-sky-500/20 border-sky-400/40 text-sky-300'
                  : 'bg-[#18294d] border-slate-700 text-slate-300 hover:text-white'
              }`}
              title="Toggle Bilingual Side-by-Side View"
            >
              <Columns2 className="w-4 h-4" />
              <span className="hidden md:inline">{viewMode === 'bilingual' ? 'Side-by-Side' : 'Single Lang'}</span>
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#18294d] hover:bg-[#203666] border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
              title="Copy full article text to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? (language === 'hi' ? 'कॉपी हो गया' : 'Copied!') : (language === 'hi' ? 'कॉपी करें' : 'Copy')}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#18294d] hover:bg-red-950/60 border border-slate-700 hover:border-red-500 text-slate-300 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="relative p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 subtable-scrollbar">
          {/* Subtle Vector Watermark Inside Modal Content Area */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="modal-watermark" width="380" height="220" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
                  <text x="190" y="110" textAnchor="middle" fill="#f59e0b" fillOpacity="0.045" fontFamily="Cinzel, serif" fontSize="16" fontWeight="800" letterSpacing="2">
                    GS BY DURGESH PANDEY SIR
                  </text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#modal-watermark)" />
            </svg>
          </div>

          {/* Article Header Titles */}
          <div className="bg-[#091224] border border-[#1d355e] p-4 sm:p-5 rounded-xl space-y-2">
            <div className="text-xs font-bold text-amber-400 tracking-wider uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{article.part}</span>
            </div>
            <h2 id="modal-article-title" className="text-lg sm:text-xl font-bold text-white font-cinzel">
              {language === 'hi' ? article.title.hi : article.title.en}
            </h2>
            <div className="text-sm text-amber-300/90 font-medium">
              {language === 'hi' ? article.title.en : article.title.hi}
            </div>
          </div>

          {/* Primary Text Content: Side-by-Side or Active Language */}
          {viewMode === 'bilingual' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Hindi Column */}
              <div className="bg-[#081226] border border-[#1b3460] p-4 rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-bold text-amber-400">
                    <span>🇮🇳 हिंदी प्रामाणिक पाठ (Official Hindi Text)</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">देवनागरी</span>
                  </div>
                  <p className={`mt-3 text-slate-100 reading-content-hindi ${getFontSizeClass()}`}>
                    {desc.hi}
                  </p>
                </div>
              </div>

              {/* English Column */}
              <div className="bg-[#081226] border border-[#1b3460] p-4 rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-bold text-sky-400">
                    <span>🇬🇧 English Constitutional Text</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300">Official</span>
                  </div>
                  <p className={`mt-3 text-slate-100 reading-content-english ${getFontSizeClass()}`}>
                    {desc.en}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#081226] border border-[#1b3460] p-5 rounded-xl">
              <p className={`text-slate-100 ${language === 'hi' ? 'reading-content-hindi' : 'reading-content-english'} ${getFontSizeClass()}`}>
                {language === 'hi' ? desc.hi : desc.en}
              </p>
            </div>
          )}

          {/* Clauses Breakdown Animated Sub-Table */}
          {article.clauseDetails && article.clauseDetails.length > 0 && (
            <div className="bg-[#081226] border border-amber-500/30 rounded-xl overflow-hidden shadow-lg animate-subTableSlide">
              <div className="bg-[#101d3b] px-4 py-3 border-b border-[#1b3460] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-xs sm:text-sm">
                    📑 {language === 'hi' ? `उप-खंड एवं अनुभाग विश्लेषण तालिका (${article.clauseDetails.length} खंड)` : `Key Clauses & Sub-Sections Breakdown (${article.clauseDetails.length} Clauses)`}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Interactive Sub-table
                </span>
              </div>

              <div className="overflow-x-auto subtable-scrollbar">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0a1429] text-amber-300 border-b border-[#1b3460]">
                      <th className="p-3 w-16 text-center font-bold border-r border-[#1b3460]">Clause</th>
                      <th className="p-3 font-bold border-r border-[#1b3460]">
                        {language === 'hi' ? 'प्रावधान (हिंदी विवरण)' : 'Hindi Provision'}
                      </th>
                      <th className="p-3 font-bold">
                        {language === 'hi' ? 'English Text' : 'English Text'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {article.clauseDetails.map((clause, idx) => (
                      <tr 
                        key={idx}
                        className={`border-b border-[#132545] transition-colors ${
                          idx % 2 === 0 ? 'bg-[#091329]' : 'bg-[#060e1d]'
                        } hover:bg-[#14264d]`}
                      >
                        <td className="p-3 text-center font-bold text-amber-400 border-r border-[#1b3460] align-top font-mono">
                          ({idx + 1})
                        </td>
                        <td className="p-3 border-r border-[#1b3460] text-slate-100 reading-content-hindi leading-relaxed align-top">
                          {clause.hi}
                        </td>
                        <td className="p-3 text-slate-200 reading-content-english leading-relaxed align-top">
                          {clause.en}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Amendment or Key Points strip if present */}
          {article.amendmentNote && (
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/30 p-3.5 rounded-xl text-xs flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-0.5">
                  {language === 'hi' ? 'संवैधानिक संशोधन टिप्पणी:' : 'Constitutional Amendment Note:'}
                </strong>
                <span className="text-slate-200">
                  {language === 'hi' ? article.amendmentNote.hi : article.amendmentNote.en}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Navigation & Actions */}
        <div className="bg-[#0b1428] border-t border-slate-800 px-5 py-3 flex items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigatePrev}
              disabled={!hasPrev}
              className="px-3 py-1.5 rounded-lg bg-[#14264a] text-slate-200 hover:bg-[#1e396e] hover:text-white border border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'पिछला अनुच्छेद' : 'Previous Article'}</span>
            </button>
            <button
              onClick={onNavigateNext}
              disabled={!hasNext}
              className="px-3 py-1.5 rounded-lg bg-[#14264a] text-slate-200 hover:bg-[#1e396e] hover:text-white border border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'अगला अनुच्छेद' : 'Next Article'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Central Watermark Brand Pill */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-amber-400/85 font-cinzel font-bold tracking-wider select-none">
            <span>🛡️ GS By Durgesh Pandey Sir</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (language === 'hi' ? 'कॉपी हो गया' : 'Copied') : (language === 'hi' ? 'अनुच्छेद कॉपी करें' : 'Copy Article')}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-[#18294d] hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            >
              {language === 'hi' ? 'बंद करें' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
