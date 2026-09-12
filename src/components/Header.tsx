import React from 'react';
import { Language } from '../types';
import { BookOpen, Search, Printer, Globe, Sparkles, Scale, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  onPrint,
}) => {
  const tabs = [
    { id: 'articles', label: { hi: 'अनुच्छेद 1-395', en: 'Articles 1-395' }, icon: BookOpen },
    { id: 'historical', label: { hi: 'ऐतिहासिक अधिनियम', en: 'Historical Acts' }, icon: Scale },
    { id: 'schedules', label: { hi: '12 अनुसूचियां', en: '12 Schedules' }, icon: FileText },
    { id: 'magic89', label: { hi: 'जादुई 89 ट्रिक', en: 'Magic 89 Rule' }, icon: Sparkles },
    { id: 'cases', label: { hi: 'ऐतिहासिक वाद', en: 'Landmark Cases' }, icon: ShieldAlert },
    { id: 'terms', label: { hi: 'शब्दावली व 2024 कानून', en: 'Terms & 2024 Law' }, icon: FileText },
    { id: 'quiz', label: { hi: 'UPSI विगत प्रश्न', en: 'Exam Questions' }, icon: CheckCircle2 },
    { id: 'chapters', label: { hi: 'विषय सूची', en: 'Master Index' }, icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0a192f]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        {/* Top bar: Emblem, Title, Search & Global Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 border border-amber-300/40 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20 shrink-0">
              🏛️
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif flex items-center gap-1.5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-sm">
                    GS By Durgesh Pandey Sir
                  </span>
                </h1>
                <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-sans font-semibold border border-amber-500/30 whitespace-nowrap shadow-sm">
                  UPSI Save Edition
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                {language === 'hi'
                  ? 'भारतीय संविधान एवं राजव्यवस्था संपूर्ण अध्ययन पोर्टल (द्विभाषी संस्करण)'
                  : 'Indian Constitution & Polity Complete Master Compendium (Bilingual)'}
              </p>
            </div>
          </div>

          {/* Search bar & Floating Buttons */}
          <div className="header-controls-row flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto">
            <div className="search-input-wrapper relative flex-1 min-w-[180px] w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'hi'
                    ? 'अनुच्छेद, कानून, वाद या शब्द खोजें...'
                    : 'Search article, act, case, or keyword...'
                }
                className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg bg-[#0f2744] border border-amber-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Language Switcher & Save Button Group */}
            <div className="header-actions-group flex items-center gap-2 shrink-0">
              {/* Language Switcher */}
              <button
                id="lang-toggle-header"
                onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide transition shadow-sm"
                title="Switch Language / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{language === 'hi' ? 'English' : 'हिन्दी'}</span>
              </button>

              {/* Print / Save PDF Button */}
              <button
                id="print-action-btn"
                onClick={onPrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs font-bold transition shadow-md hover:shadow-amber-500/20 active:scale-95"
                title="Save as PDF / प्रिंट करें"
              >
                <Printer className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                <span className="whitespace-nowrap">
                  {language === 'hi' ? '💾 सेव PDF' : '💾 SAVE AS PDF'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className="mt-3 flex space-x-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-[#0f2744]/70 text-slate-300 hover:text-white hover:bg-[#133157] border border-slate-700/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>{language === 'hi' ? tab.label.hi : tab.label.en}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
