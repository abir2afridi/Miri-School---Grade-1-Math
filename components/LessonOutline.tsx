import React from 'react';
import { SpiralCard } from './SpiralCard';
import { SpiralPosition } from '../types';

export const LessonOutline: React.FC = () => {
  const items = [
    "Introduction to Basic Addition",
    "Learning Goals",
    "Core Concepts",
    "Fun Examples",
    "Quiz Time",
    "Activity/Practice",
    "Recap and Review"
  ];

  return (
    <SpiralCard 
      position={SpiralPosition.TOP} 
      title="Lesson Outline"
      className="transform -rotate-1"
    >
      <ul className="space-y-3 mt-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-school-orange flex items-center justify-center shadow-sm">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-school-text font-medium text-lg">{item}</span>
          </li>
        ))}
      </ul>
      {/* Decorative folder corner */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-school-teal rounded-tl-3xl -z-10 rotate-6 shadow-md opacity-80"></div>
    </SpiralCard>
  );
};