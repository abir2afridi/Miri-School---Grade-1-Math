import React from 'react';
import { SpiralCard } from './SpiralCard';
import { SpiralPosition } from '../types';

export const PracticeCard: React.FC = () => {
  return (
    <SpiralCard 
      position={SpiralPosition.LEFT} 
      title="Let's Practice"
      className="bg-white"
    >
      <div className="flex gap-4">
        <div className="flex-1 text-sm md:text-base leading-relaxed text-school-text/80">
          <p className="mb-4">
            Today, we learned about basic addition and how to add numbers up to 10. 
            We talked about the Plus Sign and Equals Sign, and practiced solving additional problems.
          </p>
          <p className="font-bold text-school-orange-dark">
            Remember, addition is all about finding the total by combining numbers. 
            Keep practicing and have fun with math!
          </p>
        </div>
        
        {/* Visual Decoration mimicking the half-cut calculator in design */}
        <div className="hidden md:flex flex-col w-24 bg-school-orange rounded-lg p-2 gap-2 opacity-90 rotate-3">
           <div className="h-8 bg-school-cream rounded mb-2 border-2 border-school-text/10 flex items-center justify-center font-pixel text-school-text">BASIC ADD</div>
           <div className="grid grid-cols-2 gap-1">
             {[1,2,3,4].map(n => <div key={n} className="h-6 bg-school-yellow/50 rounded"></div>)}
           </div>
           <div className="flex justify-between mt-auto">
             <div className="w-8 h-8 rounded-full bg-school-orange-dark"></div>
             <div className="w-8 h-8 rounded-full bg-school-teal"></div>
           </div>
        </div>
      </div>
    </SpiralCard>
  );
};