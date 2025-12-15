import React from 'react';
import { SpiralCard } from './SpiralCard';
import { SpiralPosition } from '../types';

export const CoreConcepts: React.FC = () => {
  return (
    <SpiralCard 
      position={SpiralPosition.LEFT} 
      title="Core Concepts"
      subtitle="Let's learn some of the basics!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        
        {/* Addition Note */}
        <div className="bg-school-yellow p-4 rounded-lg shadow-sm rotate-[-2deg] flex flex-col gap-2">
          <div className="w-8 h-8 rounded-full bg-school-orange-dark flex items-center justify-center text-white font-bold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </div>
          <h3 className="font-bold text-school-text">Addition</h3>
          <p className="text-xs text-school-text/70 leading-tight">The process of finding the total or sum by combining two or more numbers.</p>
        </div>

        <div className="flex flex-col gap-4">
            {/* Plus Sign */}
            <div className="bg-school-orange-dark p-3 rounded-lg shadow-md text-white rotate-2 transform translate-x-2">
                <h4 className="font-bold border-b border-white/20 pb-1 mb-1">Plus Sign (+)</h4>
                <p className="text-xs opacity-90">The symbol used to indicate addition.</p>
            </div>

            {/* Equals Sign */}
            <div className="bg-school-orange p-3 rounded-lg shadow-md text-white rotate-[-1deg]">
                <h4 className="font-bold border-b border-white/20 pb-1 mb-1">Equals Sign (=)</h4>
                <p className="text-xs opacity-90">The symbol used to show that two amounts are the same.</p>
            </div>
        </div>
      </div>
    </SpiralCard>
  );
};