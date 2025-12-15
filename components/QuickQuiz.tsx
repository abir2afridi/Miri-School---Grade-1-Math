import React, { useState } from 'react';
import { SpiralCard } from './SpiralCard';
import { SpiralPosition, QuizQuestion } from '../types';
import { generateMathQuiz } from '../services/geminiService';

const DEFAULT_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: "WHAT IS 3 + 2 = ?",
    options: ["4", "5", "6"],
    correctAnswerIndex: 1
  },
  {
    id: 'q2',
    question: "WHICH IS THE PLUS SIGN?",
    options: ["+", "-", "="],
    correctAnswerIndex: 0
  }
];

export const QuickQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(DEFAULT_QUESTIONS);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  
  // Calculate score
  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter(q => answers[q.id] === q.correctAnswerIndex).length;
  const isAllAnswered = answeredCount === questions.length;

  const handleAnswer = (qId: string, optionIdx: number) => {
    // Prevent changing answer
    if (answers[qId] !== undefined) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleRegenerate = async () => {
    setLoading(true);
    setAnswers({});
    const newQuestions = await generateMathQuiz();
    if (newQuestions && newQuestions.length > 0) {
      setQuestions(newQuestions);
    }
    setLoading(false);
  };

  return (
    <SpiralCard 
      position={SpiralPosition.TOP} 
      title="Quick Quiz"
      bgColor="bg-school-orange"
      className="md:col-span-2 lg:col-span-1"
    >
      <div className="flex justify-between items-center mb-4 px-2">
        <span className="font-pixel text-lg text-school-text/70">Score: {correctCount} / {questions.length}</span>
        {isAllAnswered && correctCount === questions.length && (
            <span className="font-rounded font-bold text-white bg-green-500 px-3 py-1 rounded-full animate-bounce">
                Great Job!
            </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((q, idx) => (
          <div key={q.id} className="bg-school-cream rounded-xl p-4 shadow-md border-b-4 border-school-orange-dark relative overflow-hidden">
            <h3 className="text-school-text/60 font-bold text-xs tracking-wider uppercase mb-1">
              QUESTION {idx + 1}
            </h3>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center mb-4 font-pixel text-2xl text-school-text shadow-inner min-h-[4rem] flex items-center justify-center">
               {q.question}
            </div>
            
            <div className="flex gap-2 justify-center">
              {q.options.map((opt, optIdx) => {
                const isSelected = answers[q.id] === optIdx;
                const isCorrect = q.correctAnswerIndex === optIdx;
                const hasAnswered = answers[q.id] !== undefined;
                
                let btnClass = "bg-school-orange-dark/80 text-white hover:bg-school-orange-dark hover:scale-105";
                
                if (hasAnswered) {
                    if (isSelected) {
                        btnClass = isCorrect ? "bg-green-500 text-white scale-110 ring-4 ring-green-200" : "bg-red-500 text-white opacity-80";
                    } else if (isCorrect) {
                        // Show correct answer if wrong one was picked
                         btnClass = "bg-green-500/50 text-white border-2 border-green-500";
                    } else {
                        btnClass = "bg-gray-300 text-gray-500 opacity-50 cursor-not-allowed";
                    }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswer(q.id, optIdx)}
                    disabled={hasAnswered}
                    className={`w-12 h-12 rounded-full font-bold shadow-md transition-all flex items-center justify-center text-lg ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button 
          onClick={handleRegenerate}
          disabled={loading}
          className="bg-school-teal text-white px-6 py-2 rounded-full font-bold shadow-[0_4px_0_rgb(20,80,70)] active:shadow-none active:translate-y-1 hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          {loading ? (
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          )}
          New Problems (AI)
        </button>
      </div>
    </SpiralCard>
  );
};