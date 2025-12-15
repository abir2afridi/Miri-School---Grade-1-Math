import React from 'react';
import { SpiralPosition } from '../types';

interface SpiralCardProps {
  children: React.ReactNode;
  position?: SpiralPosition;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  className?: string;
  decoration?: React.ReactNode;
}

export const SpiralCard: React.FC<SpiralCardProps> = ({ 
  children, 
  position = SpiralPosition.TOP, 
  title, 
  subtitle,
  bgColor = 'bg-school-cream',
  className = '',
  decoration
}) => {
  
  const renderSpiral = () => {
    const spiralCount = position === SpiralPosition.TOP ? 8 : 12;
    const spirals = Array.from({ length: spiralCount });

    if (position === SpiralPosition.TOP) {
      return (
        <div className="absolute -top-5 left-0 w-full flex justify-center gap-6 px-8 z-10 pointer-events-none">
          {spirals.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
               {/* The Wire */}
               <div className="w-4 h-10 bg-gradient-to-b from-gray-500 via-gray-200 to-gray-500 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10"></div>
               {/* The Hole */}
               <div className="w-3 h-3 bg-black/60 rounded-full mt-[-8px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] z-0"></div>
            </div>
          ))}
        </div>
      );
    }
    
    if (position === SpiralPosition.LEFT) {
      return (
        <div className="absolute top-0 -left-5 h-full flex flex-col justify-center gap-6 py-8 z-10 pointer-events-none">
          {spirals.map((_, i) => (
            <div key={i} className="flex flex-row items-center">
               <div className="h-4 w-10 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10"></div>
               <div className="h-3 w-3 bg-black/60 rounded-full ml-[-8px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] z-0"></div>
            </div>
          ))}
        </div>
      );
    }

    if (position === SpiralPosition.RIGHT) {
      return (
        <div className="absolute top-0 -right-5 h-full flex flex-col justify-center gap-6 py-8 z-10 pointer-events-none">
          {spirals.map((_, i) => (
            <div key={i} className="flex flex-row-reverse items-center">
               <div className="h-4 w-10 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10"></div>
               <div className="h-3 w-3 bg-black/60 rounded-full mr-[-8px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] z-0"></div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`relative ${className} group h-full`}>
      {/* Background Layer (Paper) */}
      <div className={`relative ${bgColor} paper-texture rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] border-2 border-school-text/10 p-6 h-full flex flex-col transition-transform hover:-translate-y-1 duration-300`}>
        {renderSpiral()}
        
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-4 text-center relative z-0">
             {title && <h2 className="font-rounded font-bold text-2xl text-school-text tracking-wide">{title}</h2>}
             {subtitle && <p className="font-rounded text-school-orange-dark font-medium">{subtitle}</p>}
          </div>
        )}

        {/* Content */}
        <div className="flex-grow font-rounded text-school-text relative z-0">
          {children}
        </div>
        
        {/* Decoration Element */}
        {decoration && (
            <div className="absolute pointer-events-none">
                {decoration}
            </div>
        )}
      </div>
    </div>
  );
};