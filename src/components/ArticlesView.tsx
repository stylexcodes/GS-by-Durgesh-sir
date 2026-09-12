import React, { useState, useMemo } from 'react';
import { ConstitutionalArticle, Language } from '../types';
import { Star, ChevronDown, ChevronUp, Bookmark, Filter } from 'lucide-react';

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
      const matchNumber = artNum.includes(q);
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

  const toggleExpand = (id: string) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Control Bar */}
      <div className="bg-[#0f2744]/90 border border-amber-500/20 rounded-xl p-4 shadow-lg flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <label className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              {language === 'hi' ? 'संविधान भाग चुनें:' : 'Select Constitution Part:'}
            </label>
            <select
              value={selectedPart}
              onChange={(e) => {
                setSelectedPart(e.target.value);
                setCurrentPage(1);
              }}
              className="text-xs bg-[#0a192f] border border-amber-500/30 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-400 max-w-xs truncate"
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
            <label className="flex items-center gap-2 cursor-pointer select-none bg-[#133157] px-3 py-1.5 rounded-lg border border-amber-500/30 hover:border-amber-400/60 transition">
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
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                {language === 'hi' ? 'केवल महत्वपूर्ण (UPSI स्टार)' : 'Only High-Yield'}
              </span>
            </label>

            <div className="text-xs text-slate-400 whitespace-nowrap">
              {language === 'hi'
                ? `कुल ${filteredArticles.length} अनुच्छेद`
                : `Total ${filteredArticles.length} Articles`}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-[#0f2744]/40 rounded-xl border border-slate-700/50">
          <p className="text-slate-400 text-sm">
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
            const desc = art.content || art.description;

            return (
              <div
                key={cardId}
                id={`article-card-${cardId}`}
                className={`rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  art.isImportant
                    ? 'bg-gradient-to-br from-[#0f2744] to-[#123158] border-amber-500/40 shadow-md shadow-amber-950/20'
                    : 'bg-[#0f2744]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-4">
                  {/* Part Header & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-700/50">
                    <span className="text-[11px] font-semibold text-amber-400 tracking-wide flex items-center gap-1 truncate max-w-[80%]">
                      <Bookmark className="w-3 h-3 shrink-0" />
                      <span className="truncate">{art.part}</span>
                    </span>
                    {art.isImportant && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                        <Star className="w-2.5 h-2.5 fill-amber-300" />
                        {language === 'hi' ? 'महत्वपूर्ण' : 'High Yield'}
                      </span>
                    )}
                  </div>

                  {/* Article Title */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm font-bold text-amber-300 font-cinzel px-2 py-0.5 bg-amber-500/10 rounded border border-amber-500/20 shrink-0">
                      अनुच्छेद {artNum}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug">
                      {language === 'hi' ? art.title.hi : art.title.en}
                    </h3>
                  </div>

                  {/* Content Preview */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-3 print:line-clamp-none print:text-black">
                    {language === 'hi' ? desc.hi : desc.en}
                  </p>

                  {/* Expanded Full Content - Forced visible in print mode */}
                  <div className={`accordion-content ${isExpanded ? 'block' : 'hidden'} print:!block mt-3 pt-3 border-t border-slate-700/60 print:border-gray-300 space-y-2.5 text-xs`}>
                    <div className="bg-[#0a192f] print:bg-gray-50 p-3 rounded-lg border border-slate-800 print:border-gray-300">
                      <span className="font-semibold text-amber-400 print:text-black text-[11px] block mb-1">
                        {language === 'hi' ? 'विस्तृत विवरण (हिन्दी):' : 'Full Hindi Legal Text:'}
                      </span>
                      <p className="text-slate-200 print:text-black leading-relaxed">{desc.hi}</p>
                    </div>

                    <div className="bg-[#0a192f] print:bg-gray-50 p-3 rounded-lg border border-slate-800 print:border-gray-300">
                      <span className="font-semibold text-sky-400 print:text-gray-700 text-[11px] block mb-1">
                        English Translation & Reference:
                      </span>
                      <p className="text-slate-300 print:text-gray-800 leading-relaxed font-sans">{desc.en}</p>
                    </div>

                    {art.clauseDetails && art.clauseDetails.length > 0 && (
                      <div className="mt-2 space-y-1">
                        <span className="font-semibold text-amber-300 print:text-black text-[11px] block">
                          {language === 'hi' ? 'प्रमुख उप-खंड:' : 'Key Clauses:'}
                        </span>
                        {art.clauseDetails.map((clause, idx) => (
                          <div key={idx} className="text-[11px] text-slate-300 print:text-black pl-2 border-l-2 border-amber-500/40 print:border-black py-0.5">
                            {language === 'hi' ? clause.hi : clause.en}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer action toggle */}
                <div className="px-4 py-2 bg-[#0a192f]/60 rounded-b-xl border-t border-slate-800 flex items-center justify-between text-xs no-print">
                  <span className="text-[11px] text-slate-400">
                    {language === 'hi' ? 'मूल पाठ एवं अनुवाद' : 'Full Text & Notes'}
                  </span>
                  <button
                    onClick={() => toggleExpand(cardId)}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium transition"
                  >
                    <span>
                      {isExpanded ? (language === 'hi' ? 'संक्षेप में' : 'Collapse') : (language === 'hi' ? 'विस्तार से पढ़ें' : 'Read Full')}
                    </span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
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
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs rounded-lg bg-[#133157] text-slate-300 hover:bg-[#1a3d6d] disabled:opacity-40 disabled:pointer-events-none transition"
            >
              {language === 'hi' ? '← पिछला' : '← Previous'}
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 text-xs rounded-md transition ${
                      currentPage === pageNum
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-[#133157] text-slate-300 hover:bg-[#1a3d6d]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 7 && <span className="text-slate-500 text-xs px-1">...</span>}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs rounded-lg bg-[#133157] text-slate-300 hover:bg-[#1a3d6d] disabled:opacity-40 disabled:pointer-events-none transition"
            >
              {language === 'hi' ? 'अगला →' : 'Next →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
