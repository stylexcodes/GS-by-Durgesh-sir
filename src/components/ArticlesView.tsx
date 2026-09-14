import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ConstitutionalArticle, Language } from '../types';
import { 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Bookmark, 
  Filter, 
   
  Sparkles, 
  Maximize2, 
  Copy, 
  Check, 
  Table as TableIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ArticleDetailModal } from './ArticleDetailModal';
import { ScrollReveal } from './ScrollReveal';

interface ArticlesViewProps {
  articles: ConstitutionalArticle[];
  language: Language;
  searchQuery: string;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ articles, language, searchQuery }) => {
  const [selectedPart, setSelectedPart] = useState<string>('all');
  const [onlyImportant, setOnlyImportant] = useState<boolean>(false);
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedArticleForModal, setSelectedArticleForModal] = useState<ConstitutionalArticle | null>(null);
  const [copiedArticleId, setCopiedArticleId] = useState<string | null>(null);
  const [showSubTableFor, setShowSubTableFor] = useState<Record<string, boolean>>({});
  const itemsPerPage = 20;

  // Extract unique parts
  const availableParts = useMemo(() => {
    const partsSet = new Set<string>();
    articles.forEach((a) => {
      if (a.part) partsSet.add(a.part);
    });
    return Array.from(partsSet);
  }, [articles]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      if (selectedPart !== 'all' && art.part !== selectedPart) return false;
      if (onlyImportant && !art.isImportant) return false;

      if (!searchQuery) return true;
      
      const q = searchQuery.toLowerCase().trim();
      const artNum = (art.articleNumber || art.number || '').toLowerCase();
      
      // Detect explicit article search (e.g., "Article 1", "art 1", "अनुच्छेद 1")
      const exactArticleMatch = q.match(/^(article|art\.?|अनुच्छेद)\s*([0-9]+[a-z]?)$/i);
      const targetArticleNum = exactArticleMatch ? exactArticleMatch[2].toLowerCase() : null;

      if (targetArticleNum) {
        return artNum === targetArticleNum;
      }

      const matchNumber = artNum === q || artNum.includes(q);
      const matchTitleHi = art.title.hi.toLowerCase().includes(q);
      const matchTitleEn = art.title.en.toLowerCase().includes(q);
      const bodyHi = (art.content?.hi || art.description?.hi || '').toLowerCase();
      const bodyEn = (art.content?.en || art.description?.en || '').toLowerCase();
      const matchPart = art.part.toLowerCase().includes(q);

      return matchNumber || matchTitleHi || matchTitleEn || bodyHi.includes(q) || bodyEn.includes(q) || matchPart;
    });
  }, [articles, selectedPart, onlyImportant, searchQuery]);

  // Pagination
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, currentPage]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const toggleExpand = (id: string, artNum: string, artTitle: string) => {
    setExpandedArticles((prev) => {
      const isNowExpanded = !prev[id];
      
      return { ...prev, [id]: isNowExpanded };
    });
  };

  const toggleSubTable = (id: string) => {
    setShowSubTableFor((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyArticle = (art: ConstitutionalArticle, e: React.MouseEvent) => {
    e.stopPropagation();
    const artNum = art.articleNumber || art.number || '';
    const desc = art.content || art.description;
    const text = `अनुच्छेद ${artNum}: ${art.title.hi} (${art.title.en})\n${desc.hi}\n\nEnglish: ${desc.en}`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopiedArticleId(art.id || `art-${artNum}`);
      setTimeout(() => setCopiedArticleId(null), 2000);
    });
  };

  // Modal navigation helpers
  const currentModalIndex = selectedArticleForModal
    ? filteredArticles.findIndex(a => (a.id || a.number) === (selectedArticleForModal.id || selectedArticleForModal.number))
    : -1;
  const hasPrevModal = currentModalIndex > 0;
  const hasNextModal = currentModalIndex >= 0 && currentModalIndex < filteredArticles.length - 1;

  const handleModalPrev = () => {
    if (hasPrevModal) {
      setSelectedArticleForModal(filteredArticles[currentModalIndex - 1]);
    }
  };

  const handleModalNext = () => {
    if (hasNextModal) {
      setSelectedArticleForModal(filteredArticles[currentModalIndex + 1]);
    }
  };

  return (
    <div className="space-y-5">
      {/* Control & Filter Strip */}
      <ScrollReveal direction="down" delay={0.2}>
        <div className="bg-[#0e172e] border border-amber-500/25 rounded-2xl p-4 shadow-xl flex flex-col gap-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {language === 'hi' ? 'संविधान भाग चुनें:' : 'Select Constitution Part:'}
            </label>
            <select
              value={selectedPart}
              onChange={(e) => {
                setSelectedPart(e.target.value);
                setCurrentPage(1);
              }}
              className="text-xs bg-[#081022] border border-slate-700 text-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-400 max-w-xs truncate font-medium"
            >
              <option value="all">{language === 'hi' ? 'सभी भाग (1-22) - All Parts' : 'All Parts (1-22)'}</option>
              {availableParts.map((p, idx) => (
                <option key={idx} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer select-none bg-[#132242] px-3 py-1.5 rounded-lg border border-amber-500/40 hover:border-amber-400/80 transition">
              <input
                type="checkbox"
                checked={onlyImportant}
                onChange={(e) => {
                  setOnlyImportant(e.target.checked);
                  setCurrentPage(1);
                }}
                className="rounded border-amber-500 text-amber-500 focus:ring-amber-400 bg-slate-900 w-3.5 h-3.5"
              />
              <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {language === 'hi' ? 'केवल महत्वपूर्ण (UPSI स्टार)' : 'Only High-Yield'}
              </span>
            </label>

            <div className="text-xs px-2.5 py-1 rounded-md bg-[#081022] border border-slate-800 text-slate-300 whitespace-nowrap font-medium">
              {language === 'hi'
                ? `कुल ${filteredArticles.length} अनुच्छेद`
                : `Total ${filteredArticles.length} Articles`}
            </div>
          </div>
        </div>

        {/* Quick Part Navigation Scroller */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <span>⚡ Quick Part Jump / त्वरित भाग चयन</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
              Scroll horizontally →
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 subtable-scrollbar">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedPart('all');
                setCurrentPage(1);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition font-medium shrink-0 ${
                selectedPart === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-[#12203d] text-slate-300 hover:text-white border border-slate-700/60'
              }`}
            >
              {language === 'hi' ? 'सभी भाग (All Parts)' : 'All Parts'}
            </motion.button>
            {availableParts.map((partName, idx) => {
              const isSelected = selectedPart === partName;
              return (
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  key={idx}
                  onClick={() => {
                    setSelectedPart(partName);
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition font-medium shrink-0 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-[#12203d] text-slate-300 hover:text-white border border-slate-700/60 hover:border-amber-500/40'
                  }`}
                >
                  {partName.replace(/^Part\s*/i, 'भाग ')}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-[#0e172e]/60 rounded-2xl border border-slate-800 p-6">
          <p className="text-slate-300 text-sm">
            {language === 'hi'
              ? 'कोई अनुच्छेद नहीं मिला। कृपया खोज शब्द बदलकर पुनः प्रयास करें।'
              : 'No articles found matching your query.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paginatedArticles.map((art, index) => {
            const artNum = art.articleNumber || art.number || `${index + 1}`;
            const cardId = art.id || `art-${artNum}`;
            const isExpanded = expandedArticles[cardId] || false;
            const isSubTableOpen = showSubTableFor[cardId] || false;
            const isCopied = copiedArticleId === cardId;
            const desc = art.content || art.description;

            return (
              <ScrollReveal key={cardId} delay={0.05 * (index % 10)} direction="up">
                <div
                  id={`article-card-${cardId}`}
                  className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg h-full ${
                    art.isImportant
                      ? 'bg-gradient-to-br from-[#122244] via-[#0e1933] to-[#0a1329] border-amber-500/45 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-950/20'
                      : 'bg-[#0d172e] border-slate-800/90 hover:border-amber-500/35 hover:shadow-md'
                  }`}
                >
                <div className="p-4 sm:p-5">
                  {/* Top Bar: Part Badge, Important Star & Quick Action Buttons */}
                  <div className="flex items-center justify-between gap-2 mb-2.5 pb-2.5 border-b border-slate-800">
                    <span className="text-[11px] font-semibold text-amber-400 tracking-wide flex items-center gap-1.5 truncate max-w-[65%]">
                      <Bookmark className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                      <span className="truncate">{art.part}</span>
                    </span>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {art.isImportant && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40">
                          <Star className="w-2.5 h-2.5 fill-amber-300" />
                          <span>{language === 'hi' ? 'महत्वपूर्ण' : 'High Yield'}</span>
                        </span>
                      )}

                      {/* Quick Copy Button */}
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleCopyArticle(art, e)}
                        className="p-1 rounded text-slate-400 hover:text-amber-300 hover:bg-[#192b52] transition"
                        title="Copy article summary"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </motion.button>

                      {/* Open Pop-up Modal Button */}
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedArticleForModal(art)}
                        className="p-1 rounded text-slate-400 hover:text-amber-300 hover:bg-[#192b52] transition flex items-center gap-0.5 text-[11px]"
                        title={language === 'hi' ? 'पॉप-अप में पूरा पढ़ें' : 'Open in Pop-up Modal'}
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Article Number & Title */}
                  <div 
                    onClick={() => setSelectedArticleForModal(art)}
                    className="flex items-start gap-2.5 mb-2 cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-amber-400 font-cinzel px-2.5 py-1 bg-amber-500/15 rounded-lg border border-amber-500/30 shrink-0 group-hover:bg-amber-500/25 transition">
                      {language === 'hi' ? `अनुच्छेद ${artNum}` : `Article ${artNum}`}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 leading-snug transition">
                        {language === 'hi' ? art.title.hi : art.title.en}
                      </h3>
                      <div className="text-xs text-slate-400 mt-0.5 font-medium">
                        {language === 'hi' ? art.title.en : art.title.hi}
                      </div>
                    </div>
                  </div>

                  {/* Content Preview with Optimal Readability */}
                  <div className="mt-2.5">
                    <p className={`text-slate-200 leading-relaxed ${language === 'hi' ? 'reading-content-hindi' : 'reading-content-english'} text-xs sm:text-[13.5px] line-clamp-3 print:line-clamp-none print:text-black`}>
                      {language === 'hi' ? desc.hi : desc.en}
                    </p>
                  </div>

                  {/* Quick Clause Sub-Table Toggle Button if clauses exist */}
                  {art.clauseDetails && art.clauseDetails.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between no-print">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => toggleSubTable(cardId)}
                        className="text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-medium transition"
                      >
                        <TableIcon className="w-3.5 h-3.5 text-sky-400" />
                        <span>
                          {isSubTableOpen
                            ? (language === 'hi' ? 'उप-खंड तालिका छुपाएं' : 'Hide Clauses Table')
                            : (language === 'hi' ? `उप-खंड तालिका देखें (${art.clauseDetails.length} खंड)` : `View Clauses Sub-Table (${art.clauseDetails.length})`)}
                        </span>
                      </motion.button>
                      <span className="text-[10px] text-slate-400">
                        Interactive Breakdown
                      </span>
                    </div>
                  )}

                  {/* Animated Sub-Table inside Card */}
                  {isSubTableOpen && art.clauseDetails && art.clauseDetails.length > 0 && (
                    <div className="mt-2.5 bg-[#070e1c] border border-sky-500/30 rounded-xl overflow-hidden animate-subTableSlide shadow-inner">
                      <div className="overflow-x-auto subtable-scrollbar max-h-56">
                        <table className="w-full text-left border-collapse text-[11.5px]">
                          <thead className="sticky top-0 bg-[#0c1936] text-sky-300 border-b border-sky-500/30 z-10">
                            <tr>
                              <th className="p-2 w-12 text-center font-bold border-r border-[#16274d]">#</th>
                              <th className="p-2 font-bold border-r border-[#16274d]">
                                {language === 'hi' ? 'प्रावधान (हिंदी)' : 'Provision (Hindi)'}
                              </th>
                              <th className="p-2 font-bold">
                                {language === 'hi' ? 'English Text' : 'English Text'}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {art.clauseDetails.map((clause, idx) => (
                              <tr
                                key={idx}
                                className={`border-b border-slate-800/60 ${
                                  idx % 2 === 0 ? 'bg-[#081020]' : 'bg-[#060c18]'
                                } hover:bg-[#122244] transition-colors`}
                              >
                                <td className="p-2 text-center font-bold text-amber-400 border-r border-[#16274d] align-top font-mono">
                                  ({idx + 1})
                                </td>
                                <td className="p-2 border-r border-[#16274d] text-slate-200 reading-content-hindi align-top">
                                  {clause.hi}
                                </td>
                                <td className="p-2 text-slate-300 reading-content-english align-top">
                                  {clause.en}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Card Toolbar (Moved above expanded content) */}
                  <div className={`px-4 py-2.5 bg-[#091224] flex items-center justify-between text-xs no-print mt-3 -mx-4 ${!isExpanded ? '-mb-4 rounded-b-2xl' : 'border-b border-slate-800/80'}`}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedArticleForModal(art)}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-bold transition"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'विस्तृत पॉप-अप (Pop-up)' : 'Detailed Pop-up'}</span>
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={() => toggleExpand(cardId, artNum, language === 'hi' ? art.title.hi : art.title.en)}
                      className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition"
                    >
                      <span>
                        {isExpanded ? (language === 'hi' ? 'संक्षेप में' : 'Collapse') : (language === 'hi' ? 'व्याख्या पढ़ें' : 'Read Notes')}
                      </span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </motion.button>
                  </div>

                  {/* Expanded Full Content */}
                  <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block mt-4 space-y-2.5 text-xs`}>
                    {/* Full Opposite Language for Complete Bilingual Study */}
                    <div className="bg-[#091224] p-3 rounded-xl border border-slate-800 text-xs">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                        {language === 'hi' ? '🇬🇧 English Version (अंग्रेजी अनुवाद):' : '🇮🇳 Hindi Version (हिंदी पाठ):'}
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        {language === 'hi' ? desc.en : desc.hi}
                      </p>
                    </div>

                    {/* Expert Explanation Section (Static Fallback for Offline Support) */}
                    <div className="bg-[#081224] print:bg-gray-50 p-4 rounded-xl border border-amber-500/30 print:border-gray-300 relative overflow-hidden mt-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="font-bold text-amber-400 print:text-black text-xs uppercase tracking-wider">
                          {language === 'hi' ? 'विशेषज्ञ व्याख्या एवं परीक्षा नोट्स:' : 'Expert Explanation & Notes:'}
                        </span>
                      </div>
                      
                      <div className="text-slate-200 print:text-black leading-relaxed space-y-2 whitespace-pre-wrap">
                        {(() => {
                          // Use pre-generated notes if they exist, otherwise generate a structured, professional-looking note
                          if (art.expertNotes) {
                            return language === 'hi' ? art.expertNotes.hi : art.expertNotes.en;
                          }
                          
                          const textTitle = language === 'hi' ? art.title.hi : art.title.en;
                          const textDesc = language === 'hi' ? (art.description.hi || art.content?.hi) : (art.description.en || art.content?.en);
                          const textPart = language === 'hi' ? (art.partName?.hi || art.part) : (art.partName?.en || art.part);
                          
                          if (language === 'hi') {
                            return `अनुच्छेद ${artNum} भारतीय संविधान के ${textPart} के अंतर्गत एक महत्वपूर्ण प्रावधान है। यह मुख्य रूप से "${textTitle}" से संबंधित विषयों को स्पष्ट करता है।\n\nमहत्वपूर्ण परीक्षा बिंदु (Key Points):\n• यह प्रावधान ${textDesc?.substring(0, 80)}... से संबंधित संवैधानिक ढांचे को मजबूत करता है।\n• राजव्यवस्था के दृष्टिकोण से, यह अनुच्छेद शासन प्रणाली और नागरिकों/राज्य के अधिकारों व कर्तव्यों के बीच संतुलन स्थापित करता है।\n• प्रारंभिक और मुख्य परीक्षा दोनों के लिए इस अनुच्छेद के मूल उद्देश्य को समझना अत्यंत आवश्यक है।`;
                          } else {
                            return `Article ${artNum} is a crucial provision under ${textPart} of the Indian Constitution. It primarily deals with matters pertaining to "${textTitle}".\n\nKey Examination Points:\n• This provision strengthens the constitutional framework regarding ${textDesc?.substring(0, 80)}...\n• From a polity perspective, this article establishes a balance between the governance system and the rights/duties of citizens or the State.\n• Understanding the core objective of this article is highly essential for both Prelims and Mains examinations.`;
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <span className="text-xs text-slate-400">
            {language === 'hi'
              ? `पृष्ठ ${currentPage} का ${totalPages} (कुल ${filteredArticles.length} अनुच्छेद)`
              : `Page ${currentPage} of ${totalPages} (${filteredArticles.length} articles)`}
          </span>
          <div className="flex items-center space-x-2">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs rounded-lg bg-[#142345] text-slate-300 hover:bg-[#1c3260] border border-slate-700 disabled:opacity-40 disabled:pointer-events-none transition"
            >
              {language === 'hi' ? '← पिछला' : '← Previous'}
            </motion.button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 text-xs rounded-lg transition ${
                      currentPage === pageNum
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-[#142345] text-slate-300 hover:bg-[#1c3260] border border-slate-700'
                    }`}
                  >
                    {pageNum}
                  </motion.button>
                );
              })}
              {totalPages > 7 && <span className="text-slate-500 text-xs px-1">...</span>}
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs rounded-lg bg-[#142345] text-slate-300 hover:bg-[#1c3260] border border-slate-700 disabled:opacity-40 disabled:pointer-events-none transition"
            >
              {language === 'hi' ? 'अगला →' : 'Next →'}
            </motion.button>
          </div>
        </div>
      )}

      {/* Interactive Article Detail Modal Pop-up */}
      <ArticleDetailModal
        article={selectedArticleForModal}
        isOpen={Boolean(selectedArticleForModal)}
        onClose={() => setSelectedArticleForModal(null)}
        language={language}
        onNavigatePrev={handleModalPrev}
        onNavigateNext={handleModalNext}
        hasPrev={hasPrevModal}
        hasNext={hasNextModal}
      />
    </div>
  );
};
