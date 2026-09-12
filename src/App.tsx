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

import { Header } from './components/Header';
import { ArticlesView } from './components/ArticlesView';
import { HistoricalActsView } from './components/HistoricalActsView';
import { SchedulesView } from './components/SchedulesView';
import { Magic89View } from './components/Magic89View';
import { JudicialCasesView } from './components/JudicialCasesView';
import { PolityTermsView } from './components/PolityTermsView';
import { QuestionsQuizView } from './components/QuestionsQuizView';
import { ChaptersIndexView } from './components/ChaptersIndexView';

import { Printer, Globe, ArrowUp, Sparkles, BookOpen, CheckCircle, Scale, Layers } from 'lucide-react';

export function App() {
  const [language, setLanguage] = useState<Language>('hi');
  const [activeTab, setActiveTab] = useState<string>('articles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handlePrint = () => {
    window.print();
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
    } else if (chapterId === 'question-bank' || chapterId === 'practice-questions') {
      setActiveTab('quiz');
    } else {
      setActiveTab('articles');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Header with Search & Global Actions */}
      <Header
        language={language}
        setLanguage={setLanguage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Quick Highlights & Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 no-print">
          <div
            onClick={() => setActiveTab('articles')}
            className={`p-3 rounded-xl border cursor-pointer transition text-center ${
              activeTab === 'articles'
                ? 'bg-amber-500/20 border-amber-500/60 shadow-md'
                : 'bg-[#0f2744]/70 border-slate-800 hover:border-amber-500/30'
            }`}
          >
            <div className="text-amber-400 text-lg font-bold font-cinzel">395</div>
            <div className="text-[11px] text-slate-300">
              {language === 'hi' ? 'अनुच्छेद (1-395)' : 'Articles (1-395)'}
            </div>
          </div>

          <div
            onClick={() => setActiveTab('historical')}
            className={`p-3 rounded-xl border cursor-pointer transition text-center ${
              activeTab === 'historical'
                ? 'bg-amber-500/20 border-amber-500/60 shadow-md'
                : 'bg-[#0f2744]/70 border-slate-800 hover:border-amber-500/30'
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
                ? 'bg-amber-500/20 border-amber-500/60 shadow-md'
                : 'bg-[#0f2744]/70 border-slate-800 hover:border-amber-500/30'
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
                ? 'bg-amber-500/20 border-amber-500/60 shadow-md'
                : 'bg-[#0f2744]/70 border-slate-800 hover:border-amber-500/30'
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
                ? 'bg-amber-500/20 border-amber-500/60 shadow-md'
                : 'bg-[#0f2744]/70 border-slate-800 hover:border-amber-500/30'
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
                ? 'bg-amber-500/20 border-amber-500/60 shadow-md'
                : 'bg-[#0f2744]/70 border-slate-800 hover:border-amber-500/30'
            }`}
          >
            <div className="text-amber-400 text-lg font-bold font-cinzel">228</div>
            <div className="text-[11px] text-slate-300">
              {language === 'hi' ? 'पीडीएफ पृष्ठ संपूर्ण' : 'Total 228 Pages'}
            </div>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'articles' && (
          <ArticlesView articles={ARTICLES_DATA} language={language} searchQuery={searchQuery} />
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
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5 no-print">
        {/* Floating Language Switcher */}
        <button
          id="floating-lang-toggle"
          onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0f2744] hover:bg-[#153a66] border border-amber-500/50 text-amber-300 text-xs font-bold shadow-2xl hover:scale-105 active:scale-95 transition backdrop-blur-md"
        >
          <Globe className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>{language === 'hi' ? 'Switch to English' : 'हिन्दी में पढ़ें'}</span>
        </button>

        {/* Floating Save PDF Action Button */}
        <button
          id="floating-print-btn"
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs font-extrabold shadow-2xl hover:scale-105 active:scale-95 transition"
        >
          <Printer className="w-4 h-4 text-slate-950" />
          <span>{language === 'hi' ? '💾 सेव PDF / नोट्स डाउनलोड करें' : '💾 SAVE AS PDF / PRINT'}</span>
        </button>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0f2744]/90 hover:bg-[#153a66] border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-lg transition"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-[#071322] py-6 text-center text-xs text-slate-400 space-y-1">
        <p className="font-cinzel text-amber-300 font-bold">
          UPSI POLITY & CONSTITUTION COMPENDIUM • COMPLETE 228 PAGES MASTER REPOSITORY
        </p>
        <p className="text-[11px] text-slate-400">
          {language === 'hi'
            ? 'सम्पूर्ण सामग्री 100% देवनागरी व अंग्रेजी में, क्रुति देव/चाणक्य डिकोडिंग के साथ संकलित।'
            : '100% bilingual Indian Polity compendium with Kruti Dev/Chanakya decoded text and full exam mappings.'}
        </p>
      </footer>
    </div>
  );
}

export default App;
