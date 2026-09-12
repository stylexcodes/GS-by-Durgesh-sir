import React, { useState } from 'react';
import { MCQQuestion, Language } from '../types';
import { CheckCircle2, XCircle, Award, RotateCcw, HelpCircle, Sparkles } from 'lucide-react';

interface QuestionsQuizViewProps {
  questions: MCQQuestion[];
  language: Language;
}

export const QuestionsQuizView: React.FC<QuestionsQuizViewProps> = ({ questions, language }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'a' | 'b' | 'c' | 'd'>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const handleSelect = (qId: string, option: 'a' | 'b' | 'c' | 'd') => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: option,
    }));
    setShowExplanations((prev) => ({
      ...prev,
      [qId]: true,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanations({});
  };

  // Calculate score
  const totalAttempted = Object.keys(selectedAnswers).length;
  const correctCount = Object.entries(selectedAnswers).filter(
    ([id, ans]) => questions.find((q) => q.id === id)?.correctAnswer === ans
  ).length;

  return (
    <div className="space-y-6">
      {/* Header Banner & Scorecard */}
      <div className="bg-gradient-to-r from-[#0f2744] to-[#12365e] border border-amber-500/30 rounded-xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white font-cinzel flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            {language === 'hi'
              ? 'UPSI एवं पुलिस भर्ती विगत वर्षों के वास्तविक प्रश्न (Exam Practice)'
              : 'UPSI & Police Exam Real Past Questions Practice'}
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            {language === 'hi'
              ? 'UP SI 2021, UP Police 2024, CPO-SI, RPF-SI एवं दिल्ली पुलिस में पूछे गए प्रामाणिक प्रश्नों का संकलन।'
              : 'Authentic previous year exam questions from UP SI, Police Constable, CPO-SI, and RPF-SI with bilingual explanations.'}
          </p>
        </div>

        {/* Scorecard */}
        <div className="flex items-center gap-3 bg-[#0a192f] p-3 rounded-lg border border-amber-500/30">
          <div className="text-center px-2">
            <span className="text-[10px] uppercase text-slate-400 block font-semibold">
              {language === 'hi' ? 'प्रयास किया' : 'Attempted'}
            </span>
            <span className="text-base font-bold text-white">
              {totalAttempted} / {questions.length}
            </span>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="text-center px-2">
            <span className="text-[10px] uppercase text-emerald-400 block font-semibold">
              {language === 'hi' ? 'सही उत्तर' : 'Correct'}
            </span>
            <span className="text-base font-bold text-emerald-400">{correctCount}</span>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-amber-400 rounded-md hover:bg-[#11243e] transition"
            title={language === 'hi' ? 'पुनः प्रारंभ करें' : 'Reset All'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === q.correctAnswer;
          const optionsList: Array<'a' | 'b' | 'c' | 'd'> = ['a', 'b', 'c', 'd'];

          return (
            <div
              key={q.id}
              id={`quiz-item-${q.id}`}
              className="bg-[#0f2744]/90 border border-amber-500/25 rounded-xl p-5 shadow-lg space-y-4"
            >
              {/* Question Header & Exam Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center">
                    {qIndex + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {language === 'hi' ? `प्रश्न संख्या ${qIndex + 1}` : `Question ${qIndex + 1}`}
                  </span>
                </div>
                {q.examTag && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    {q.examTag}
                  </span>
                )}
              </div>

              {/* Question Text */}
              <div className="text-sm font-semibold text-white leading-relaxed">
                {language === 'hi' ? q.question.hi : q.question.en}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {optionsList.map((optKey) => {
                  const opt = q.options[optKey];
                  const isThisSelected = selected === optKey;
                  const isThisCorrect = q.correctAnswer === optKey;

                  let btnStyle =
                    'bg-[#0a192f] border-slate-800 text-slate-200 hover:border-amber-500/50 hover:bg-[#11243e]';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold';
                    } else if (isThisSelected && !isThisCorrect) {
                      btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-300';
                    } else {
                      btnStyle = 'bg-[#0a192f]/50 border-slate-800/60 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelect(q.id, optKey)}
                      disabled={isAnswered}
                      className={`p-3 rounded-lg border text-left text-xs transition flex items-center justify-between gap-2 ${btnStyle}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-slate-800 text-amber-300 text-[11px] font-bold flex items-center justify-center shrink-0 uppercase">
                          {optKey}
                        </span>
                        <span>{language === 'hi' ? opt.hi : opt.en}</span>
                      </div>

                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isAnswered && (
                <div
                  className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-1 ${
                    isCorrect
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                      : 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {isCorrect
                        ? language === 'hi'
                          ? 'सही उत्तर! व्याख्या:'
                          : 'Correct! Explanation:'
                        : language === 'hi'
                        ? `गलत! सही विकल्प (${q.correctAnswer.toUpperCase()}) है। व्याख्या:`
                        : `Incorrect! Correct is (${q.correctAnswer.toUpperCase()}). Explanation:`}
                    </span>
                  </div>
                  <p className="text-slate-200 pt-0.5">
                    {language === 'hi' ? q.explanation.hi : q.explanation.en}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
