export type Language = 'hi' | 'en';
export type LanguageMode = 'hi' | 'en' | 'both';

export interface BilingualText {
  hi: string;
  en: string;
}

export interface ChapterMeta {
  id: string;
  number: number;
  chapterNumber?: number;
  title: BilingualText;
  pageRange: string;
  pageStart?: number;
  pageEnd?: number;
  iconName: string;
  category: 'core' | 'institutions' | 'judiciary' | 'special' | 'practice' | string;
  description: BilingualText;
}

export interface ConstitutionalArticle {
  id?: string;
  number: string;
  articleNumber?: string;
  part: string;
  partNumber?: number;
  partName?: BilingualText;
  title: BilingualText;
  description: BilingualText;
  content?: BilingualText;
  clauseDetails?: BilingualText[];
  amendmentNote?: BilingualText;
  keyPoints?: BilingualText[];
  isImportant?: boolean;
}

export interface HistoricalAct {
  id: string;
  year: number;
  title: BilingualText;
  background: BilingualText;
  objectives: BilingualText[];
  provisions: BilingualText[];
  notes?: BilingualText[];
  trickMnemonic?: BilingualText;
}

export interface ScheduleItem {
  number: number;
  title: BilingualText;
  description: BilingualText;
  details: BilingualText[];
  relatedArticles: string[];
  notes?: BilingualText[];
}

export interface JudicialVerdict {
  id: string;
  caseName: string;
  year: number;
  court: string;
  benchOrJudge?: string;
  subject: BilingualText;
  rulingSummary: BilingualText;
  constitutionalArticles: string[];
  keyQuotations?: string[];
}

export interface PolityTerm {
  term: string;
  hindiTerm: string;
  definition: BilingualText;
  context: BilingualText;
}

export interface MCQQuestion {
  id: string;
  questionNumber: number;
  chapterId: string;
  examTag: string;
  question: BilingualText;
  options: {
    a: BilingualText;
    b: BilingualText;
    c: BilingualText;
    d: BilingualText;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation: BilingualText;
}

export interface MagicNumberPair {
  id: string;
  centerArticle: number;
  centerSubject: BilingualText;
  stateArticle: number;
  stateSubject: BilingualText;
}
