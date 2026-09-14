import React, { useState } from 'react';
import { Language } from './types';
import { CHAPTERS_INDEX } from './data/chaptersIndex';
import { ARTICLES_DATA } from './data/articlesData';
import { HISTORICAL_ACTS_DATA } from './data/historicalActsData';
import { SCHEDULES_DATA } from './data/schedulesData';
import { MAGIC_89_PAIRS } from './data/magic89Data';
import { JUDICIAL_CASES_DATA } from './data/judicialCasesData';
import { POLITY_TERMS_DATA } from './data/polityTermsData';
import { QUESTIONS_BANK } from './data/questionsBank';
import { POLITY_TRICKS_DATA } from './data/tricksData';

import { Header } from './components/Header';
import { ArticlesView } from './components/ArticlesView';
import { PolityTricksView } from './components/PolityTricksView';
import { HistoricalActsView } from './components/HistoricalActsView';
import { SchedulesView } from './components/SchedulesView';
import { Magic89View } from './components/Magic89View';
import { JudicialCasesView } from './components/JudicialCasesView';
import { PolityTermsView } from './components/PolityTermsView';
import { QuestionsQuizView } from './components/QuestionsQuizView';
import { ChaptersIndexView } from './components/ChaptersIndexView';
import { PrintModal } from './components/PrintModal';

import { Printer, Globe, ArrowUp, Youtube, Instagram, Scale, Landmark } from 'lucide-react';

export function App() {
  const [language, setLanguage] = useState<Language>('hi');
  const [activeTab, setActiveTab] = useState<string>('articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  // Clean, zero-overhead PDF/Booklet trigger that avoids browser freezing
  const handleOpenPrintBooklet = () => {
    setIsPrintModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapterFromIndex = (chapterId: string) => {
    if (chapterId === 'historical-acts' || chapterId === 'historical-development' || chapterId === 'charter-acts-1833-1853' || chapterId === 'crown-rule-acts') {
      setActiveTab('historical');
    } else if (chapterId === 'schedules-data' || chapterId === 'schedules') {
      setActiveTab('schedules');
    } else if (chapterId === 'landmark-cases') {
      setActiveTab('cases');
    } else if (chapterId === 'polity-terminology' || chapterId === 'polity-terminologies') {
      setActiveTab('terms');
    } else if (chapterId === 'magic-89-rule') {
      setActiveTab('magic89');
    } else if (chapterId === 'polity-tricks' || chapterId === 'tricks') {
      setActiveTab('tricks');
    } else if (chapterId === 'question-bank' || chapterId === 'practice-questions') {
      setActiveTab('quiz');
    } else {
      setActiveTab('articles');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Background Polity & Judiciary Watermark */}
      <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center z-0 opacity-[0.035] text-amber-400 overflow-hidden space-y-24">
        <Scale strokeWidth={0.5} className="w-[120vw] h-[120vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px]" />
        <Landmark strokeWidth={0.5} className="w-[120vw] h-[120vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px]" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 w-full">
        {/* Header with Search & Global Actions */}
        <Header
          language={language}
          setLanguage={setLanguage}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onPrint={handleOpenPrintBooklet}
        />

        {/* Main Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-6 pb-28 sm:pb-12 space-y-6">
          {/* Quick Highlights & Metrics Strip */}
          <div className="metric-cards-strip grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 no-print">
            <div
              onClick={() => setActiveTab('articles')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'articles'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">395</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'अनुच्छेद (1-395)' : 'Articles (1-395)'}
              </div>
            </div>

            <div
              onClick={() => setActiveTab('tricks')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'tricks'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">18</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'स्मार्ट ट्रिक्स (18)' : 'Polity Tricks (18)'}
              </div>
            </div>

            <div
              onClick={() => setActiveTab('historical')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'historical'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">15</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'अधिनियम (1773-1947)' : 'Historical Acts'}
              </div>
            </div>

            <div
              onClick={() => setActiveTab('schedules')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'schedules'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">12</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'अनुसूचियां (1-12)' : '12 Schedules'}
              </div>
            </div>

            <div
              onClick={() => setActiveTab('magic89')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'magic89'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">89</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'जादुई ट्रिक (30 जोड़े)' : 'Magic 89 Pairs'}
              </div>
            </div>

            <div
              onClick={() => setActiveTab('cases')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'cases'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">15+</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'सुप्रीम कोर्ट वाद' : 'Landmark Verdicts'}
              </div>
            </div>

            <div
              onClick={() => setActiveTab('chapters')}
              className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                activeTab === 'chapters'
                  ? 'bg-[#182749] border-amber-400 shadow-lg shadow-amber-950/40'
                  : 'bg-[#111d38]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-amber-400 text-lg font-bold font-cinzel">23</div>
              <div className="text-[11px] text-slate-300">
                {language === 'hi' ? 'विषय सूची' : 'Master Index'}
              </div>
            </div>
          </div>

          {/* Tab Views */}
          {activeTab === 'articles' && (
            <ArticlesView articles={ARTICLES_DATA} language={language} searchQuery={searchQuery} />
          )}

          {activeTab === 'tricks' && (
            <PolityTricksView tricks={POLITY_TRICKS_DATA} language={language} searchQuery={searchQuery} />
          )}

          {activeTab === 'historical' && (
            <HistoricalActsView acts={HISTORICAL_ACTS_DATA} language={language} searchQuery={searchQuery} />
          )}

          {activeTab === 'schedules' && (
            <SchedulesView schedules={SCHEDULES_DATA} language={language} />
          )}

          {activeTab === 'magic89' && (
            <Magic89View pairs={MAGIC_89_PAIRS} language={language} />
          )}

          {activeTab === 'cases' && (
            <JudicialCasesView cases={JUDICIAL_CASES_DATA} language={language} searchQuery={searchQuery} />
          )}

          {activeTab === 'terms' && (
            <PolityTermsView terms={POLITY_TERMS_DATA} language={language} searchQuery={searchQuery} />
          )}

          {activeTab === 'quiz' && (
            <QuestionsQuizView questions={QUESTIONS_BANK} language={language} />
          )}

          {activeTab === 'chapters' && (
            <ChaptersIndexView
              chapters={CHAPTERS_INDEX}
              language={language}
              onSelectChapter={handleSelectChapterFromIndex}
            />
          )}
        </main>

        {/* Floating Action Buttons: Bilingual Toggle, Save PDF, Scroll to Top */}
        <div id="floating-actions-container" className="floating-actions fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-2 sm:gap-2.5 no-print">
          {/* Floating Language Switcher */}
          <button
            id="floating-lang-toggle"
            onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
            className="floating-btn flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#16223f]/95 hover:bg-[#1d2d52] border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold shadow-2xl hover:scale-105 active:scale-95 transition backdrop-blur-md"
          >
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-spin-slow shrink-0" />
            <span className="whitespace-nowrap">{language === 'hi' ? 'Switch to English' : 'हिन्दी में पढ़ें'}</span>
          </button>

          {/* Floating Save PDF Action Button */}
          <button
            id="floating-print-btn"
            onClick={handleOpenPrintBooklet}
            className="floating-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-[11px] sm:text-xs font-black shadow-2xl hover:scale-105 active:scale-95 transition"
          >
            <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 shrink-0" />
            <span className="whitespace-nowrap">{language === 'hi' ? '💾 सेव बुकलेट / PDF' : '💾 Save Booklet / PDF'}</span>
          </button>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#16223f]/90 hover:bg-[#1d2d52] border border-slate-700 text-slate-300 hover:text-amber-400 flex items-center justify-center shadow-lg transition"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Screen Footer */}
        <footer className="mt-12 border-t border-slate-800/80 bg-[#090e1d] py-6 text-center text-xs text-slate-400 space-y-3 no-print">
          <div className="flex items-center justify-center gap-3">
            <a
              id="footer-youtube-btn"
              href="https://www.youtube.com/c/1dayers"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 border border-red-800/60 text-red-300 hover:text-red-200 text-xs font-semibold transition"
              title="YouTube Channel (@1dayers)"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              <span>YouTube: @1dayers</span>
            </a>
            <a
              id="footer-instagram-btn"
              href="https://www.instagram.com/upsc_therapy/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-950/40 hover:bg-pink-900/50 border border-pink-800/60 text-pink-300 hover:text-pink-200 text-xs font-semibold transition"
              title="Instagram (@upsc_therapy)"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: @upsc_therapy</span>
            </a>
          </div>
          <p className="font-cinzel text-amber-400 font-bold">
            GS By Durgesh Pandey Sir • Complete Bilingual Polity Master Repository
          </p>
          <p className="text-[11px] text-slate-400">
            {language === 'hi'
              ? 'सम्पूर्ण प्रामाणिक पाठ्यक्रम • 100% देवनागरी व अंग्रेजी अनुवाद सहित संकलित।'
              : 'Authentic master study curriculum • 100% bilingual Hindi & English compendium.'}
          </p>
        </footer>

        {/* Standalone Save Print Booklet Dialog */}
        <PrintModal
          isOpen={isPrintModalOpen}
          onClose={() => setIsPrintModalOpen(false)}
          language={language}
        />
      </div>
    </div>
  );
}

export default App;
