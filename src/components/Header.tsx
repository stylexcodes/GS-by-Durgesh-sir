import React from 'react';
import { Language } from '../types';
import { BookOpen, Search, Printer, Globe, Sparkles, Scale, ShieldAlert, FileText, CheckCircle2, Youtube, Instagram } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-[#f8fafc]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        {/* Top bar: Emblem, Title, Search & Global Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 border border-amber-300/40 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-900/20 shrink-0">
              🏛️
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-serif flex items-center gap-1.5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-sm">
                    GS By Durgesh Pandey Sir
                  </span>
                </h1>
                <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 font-sans font-semibold border border-slate-300 whitespace-nowrap shadow-sm">
                  UPSI Save Edition
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {language === 'hi'
                  ? 'भारतीय संविधान एवं राजव्यवस्था संपूर्ण अध्ययन पोर्टल (द्विभाषी संस्करण)'
                  : 'Indian Constitution & Polity Complete Master Compendium (Bilingual)'}
              </p>
            </div>
          </div>

          {/* Search bar & Action Buttons */}
          <div className="header-controls-row flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto">
            <div className="search-input-wrapper relative flex-1 min-w-[180px] w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600 w-4 h-4" />
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
                className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg bg-[#ffffff] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-600 hover:text-slate-900"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Social Media & Action Buttons Group */}
            <div className="header-actions-group flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* YouTube Channel Link */}
              <a
                id="header-youtube-btn"
                href="https://www.youtube.com/c/1dayers"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 hover:text-red-800 text-xs font-semibold tracking-wide transition shadow-sm group"
                title="YouTube: @1dayers"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-3.5 h-3.5 text-red-700 group-hover:scale-110 transition-transform shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">YouTube</span>
              </a>

              {/* Instagram Account Link */}
              <a
                id="header-instagram-btn"
                href="https://www.instagram.com/upsc_therapy/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-700 hover:text-pink-800 text-xs font-semibold tracking-wide transition shadow-sm group"
                title="Instagram: @upsc_therapy"
                aria-label="Instagram Account"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-700 group-hover:scale-110 transition-transform shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">Instagram</span>
              </a>

              {/* Language Switcher */}
              <button
                id="lang-toggle-header"
                onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-blue-50 border border-amber-500/40 text-blue-900 text-xs font-semibold tracking-wide transition shadow-sm"
                title="Switch Language / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{language === 'hi' ? 'English' : 'हिन्दी'}</span>
              </button>

              {/* Print / Save PDF Button */}
              <button
                id="print-action-btn"
                onClick={onPrint}
                className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition shadow-md hover:shadow-blue-900/20 active:scale-95"
                title="Save as PDF / प्रिंट करें"
              >
                <Printer className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="whitespace-nowrap">
                  {language === 'hi' ? '💾 सेव PDF' : '💾 SAVE AS PDF'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu & Mobile Quick Links */}
        <nav className="mt-3 flex items-center justify-between gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          <div className="flex space-x-1.5 shrink-0">
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
                      ? 'bg-blue-900 text-white font-bold shadow-md shadow-blue-900/20'
                      : 'bg-[#ffffff]/70 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-300/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-blue-900'}`} />
                  <span>{language === 'hi' ? tab.label.hi : tab.label.en}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile & Small Screen Quick Social Connect */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0 pl-2 border-l border-slate-300/60">
            <a
              href="https://www.youtube.com/c/1dayers"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn flex items-center justify-center w-7 h-7 rounded-md bg-red-600/20 border border-red-200 text-red-700 hover:text-red-800"
              title="YouTube (@1dayers)"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/upsc_therapy/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn flex items-center justify-center w-7 h-7 rounded-md bg-pink-600/20 border border-pink-200 text-pink-700 hover:text-pink-800"
              title="Instagram (@upsc_therapy)"
              aria-label="Instagram Account"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
