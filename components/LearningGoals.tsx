import React from 'react';
import { SpiralCard } from './SpiralCard';
import { SpiralPosition } from '../types';

export const LearningGoals: React.FC = () => {
  const goals = [
    "Understand what addition is.",
    "Add numbers up to 10.",
    "Recognize addition symbols.",
    "Solve simple addition problems."
  ];

  return (
    <SpiralCard 
      position={SpiralPosition.RIGHT} 
      title="Learning Goals & Objectives"
      subtitle="By the end of this lesson, you will be able to:"
      className="transform rotate-1"
      bgColor="bg-school-cream"
    >
       <div className="flex flex-col gap-4 mt-4">
         {goals.map((goal, idx) => (
           <div key={idx} className="relative group">
             {/* Tape effect */}
             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 rotate-1 shadow-sm"></div>
             
             <div className={`p-3 rounded-lg text-center font-bold text-school-text/80 shadow-sm border-b-2 border-school-text/10 
                ${idx % 2 === 0 ? 'bg-school-orange/20' : 'bg-school-yellow/20'}
             `}>
               {goal}
             </div>
           </div>
         ))}
       </div>

       {/* Decorations */}
       <div className="absolute -bottom-2 -left-8 w-24 h-24 pointer-events-none">
          {/* Simple CSS Pencil */}
          <div className="relative w-full h-full rotate-45">
             <div className="absolute bottom-0 left-0 w-4 h-16 bg-red-500 rounded-b-md"></div>
             <div className="absolute bottom-16 left-0 w-4 h-6 bg-yellow-100 border-b border-gray-300"></div>
             <div className="absolute bottom-[88px] left-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-school-text"></div>
          </div>
       </div>
    </SpiralCard>
  );
};