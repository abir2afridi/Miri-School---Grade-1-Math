import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full mb-12 group perspective-1000">
        {/* Background Decorative Elements (Stacked Paper Effect) */}
        <div className="absolute top-2 left-2 w-full h-full bg-school-teal rounded-3xl transform -rotate-1 opacity-100 shadow-sm z-0 transition-transform duration-500 group-hover:-rotate-2"></div>
        <div className="absolute top-4 -right-1 w-[98%] h-full bg-school-yellow rounded-3xl transform rotate-1 opacity-100 shadow-sm z-0 transition-transform duration-500 group-hover:rotate-2"></div>

        {/* Main Card */}
        <div className="relative z-10 w-full bg-school-orange paper-texture rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(38,70,83,0.2)] border-4 border-school-orange-dark/30 overflow-hidden">
            
            {/* Pencil Decoration resting on top */}
             <div className="absolute -top-4 right-10 md:right-32 w-48 h-4 md:w-64 md:h-6 bg-yellow-400 rotate-2 rounded-sm border border-school-orange-dark shadow-lg z-30 transition-transform duration-700 group-hover:rotate-[5deg] group-hover:-translate-y-2 origin-left">
                {/* Eraser */}
                <div className="absolute left-0 top-0 h-full w-6 md:w-8 bg-pink-400 border-r border-school-orange-dark rounded-l-sm"></div>
                {/* Metal band */}
                <div className="absolute left-6 md:left-8 top-0 h-full w-3 md:w-4 bg-gray-300 border-r border-school-orange-dark"></div>
                {/* Wood tip (using CSS borders) */}
                <div className="absolute -right-3 md:-right-4 top-0 w-0 h-0 border-t-[8px] md:border-t-[12px] border-b-[8px] md:border-b-[12px] border-l-[12px] md:border-l-[16px] border-t-transparent border-b-transparent border-l-yellow-100"></div>
                {/* Lead point */}
                <div className="absolute -right-[15px] md:-right-[19px] top-[6px] md:top-[9px] w-0 h-0 border-t-[2px] md:border-t-[3px] border-b-[2px] md:border-b-[3px] border-l-[4px] md:border-l-[6px] border-t-transparent border-b-transparent border-l-black"></div>
            </div>

            {/* Background Pattern of Symbols & Confetti */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden select-none">
                <span className="absolute top-[-20px] left-[-20px] text-[10rem] font-pixel text-school-orange-dark animate-spin-slow origin-center opacity-50">+</span>
                <span className="absolute bottom-10 right-20 text-8xl font-pixel text-white animate-wiggle" style={{ animationDuration: '4s' }}>=</span>
                <span className="absolute top-1/2 left-1/3 text-6xl font-pixel text-school-cream animate-float" style={{ animationDelay: '1s' }}>123</span>
                <span className="absolute top-10 right-1/4 text-9xl font-pixel text-school-orange-dark/40 rotate-45">?</span>
                
                {/* Geometric Confetti */}
                <div className="absolute top-1/4 left-10 w-4 h-4 bg-school-teal rotate-12 animate-float"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-white animate-pulse"></div>
                <div className="absolute top-20 right-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-school-yellow rotate-[-15deg] animate-float" style={{ animationDelay: '2s'}}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Left Side: Text Info */}
                <div className="flex-1 text-center md:text-left z-20">
                    <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/40 shadow-sm mb-6 animate-float hover:scale-105 transition-transform cursor-help group/badge">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-school-text font-bold text-xs tracking-widest uppercase group-hover/badge:text-school-orange-dark transition-colors">Grade 1 Math Class</span>
                    </div>
                    
                    <h1 className="font-pixel text-7xl md:text-9xl text-school-text leading-[0.85] drop-shadow-md relative mb-6 transform transition-transform duration-300 hover:scale-[1.02] origin-left">
                        BASIC
                        <br/>
                        <span 
                            className="text-transparent bg-clip-text bg-gradient-to-br from-white to-school-cream relative z-10" 
                            style={{ 
                                WebkitTextStroke: '2px #E76F51', 
                                textShadow: '4px 4px 0px rgba(231,111,81,0.3)' 
                            }}
                        >
                            ADDITION
                        </span>
                        {/* Underline Scribble */}
                        <svg className="absolute -bottom-6 left-0 w-3/4 h-8 text-school-text/20 z-0 hidden md:block" viewBox="0 0 200 20" preserveAspectRatio="none">
                           <path d="M0,10 Q50,25 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10" />
                        </svg>
                    </h1>
                    
                    <p className="font-rounded text-school-text/90 text-xl md:text-2xl mt-4 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
                        Let's learn how to put numbers together to make <span className="relative inline-block px-2">
                             <span className="absolute inset-0 bg-school-orange-dark transform -rotate-2 rounded skew-x-3"></span>
                             <span className="relative text-white font-bold">bigger</span>
                        </span> numbers!
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* CTA Button */}
                        <button className="relative overflow-hidden bg-school-teal text-white font-pixel text-3xl px-10 py-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(20,80,70,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(20,80,70,0.3)] hover:translate-x-[3px] hover:translate-y-[3px] active:translate-y-[6px] active:shadow-none transition-all transform hover:-rotate-1 group/btn mb-4 md:mb-0">
                            <span className="relative z-10 flex items-center gap-3">
                                Start Adventure
                                <svg className="w-8 h-8 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </span>
                            {/* Shine effect */}
                            <div className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover/btn:animate-[shimmer_1s_infinite]"></div>
                        </button>

                        {/* Sticky Notes */}
                        <div className="flex gap-4">
                             {/* Teacher Note */}
                            <div className="relative bg-[#fdfd96] text-school-text px-4 py-3 rounded-sm shadow-md transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-auto group/note border-l-4 border-[#fbfb78]">
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 rotate-1 group-hover/note:-rotate-1 transition-transform backdrop-blur-sm shadow-sm"></div>
                                <span className="text-[10px] text-school-text/60 uppercase font-bold block leading-none mb-1">Teacher</span>
                                <div className="flex items-center gap-1">
                                    <span className="font-rounded font-bold text-lg leading-none">Ms. Quinn</span>
                                </div>
                            </div>
                            {/* Date Note */}
                            <div className="relative bg-[#ffb7b2] text-school-text px-4 py-3 rounded-sm shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300 w-auto group/note border-l-4 border-[#ff9e99]">
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 -rotate-2 group-hover/note:rotate-1 transition-transform backdrop-blur-sm shadow-sm"></div>
                                <span className="text-[10px] text-school-text/60 uppercase font-bold block leading-none mb-1">Date</span>
                                <span className="font-rounded font-bold text-lg leading-none">Sept 15</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals/Mascot */}
                <div className="relative w-full max-w-xs h-64 flex-shrink-0 hidden md:flex items-center justify-center z-20">
                     {/* Big Circle Badge Background */}
                     <div className="absolute inset-0 bg-white/20 rounded-full scale-110 animate-pulse"></div>
                     
                     {/* Mascot Container */}
                     <div className="w-64 h-64 bg-school-yellow/90 backdrop-blur-sm rounded-full border-8 border-dashed border-white/60 flex items-center justify-center relative shadow-[0_10px_20px_rgba(0,0,0,0.1)] transform hover:scale-105 transition-transform duration-300 group-hover:rotate-3 cursor-pointer overflow-visible">
                        
                        {/* Graduation Cap (Absolute positioned on top of owl) */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-6xl z-10 animate-bounce" style={{ animationDuration: '2s' }}>
                            🎓
                        </div>

                        {/* Animated Mascot */}
                        <div className="text-[8rem] leading-none animate-float drop-shadow-2xl filter hover:scale-110 transition-transform duration-200 mt-6" style={{ animationDelay: '0.5s' }}>
                            🦉
                        </div>
                        
                        {/* Speech Bubble */}
                        <div className="absolute -top-6 -right-16 bg-white px-6 py-4 rounded-3xl rounded-bl-none shadow-xl border-[3px] border-school-text transform rotate-6 animate-wiggle origin-bottom-left z-20 hover:scale-110 transition-transform">
                            <p className="font-pixel text-3xl text-school-text whitespace-nowrap">Hoot Hoot!</p>
                            {/* Tiny triangle for speech bubble tail */}
                            <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-white border-b-[3px] border-l-[3px] border-school-text transform rotate-45"></div>
                        </div>
                     </div>

                     {/* A+ Sticker */}
                     <div className="absolute -bottom-6 -left-6 transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-30 group/sticker cursor-pointer">
                        <div className="bg-[#ff6961] text-white w-28 h-28 rounded-full flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover/sticker:scale-110 transition-transform">
                            <div className="flex flex-col items-center leading-none">
                                <span className="font-pixel text-6xl font-bold drop-shadow-md">A+</span>
                                <span className="font-rounded text-xs font-bold uppercase tracking-widest mt-1">Super!</span>
                            </div>
                        </div>
                        {/* Shine on sticker */}
                        <div className="absolute top-5 left-5 w-8 h-8 bg-white/20 rounded-full blur-[1px]"></div>
                     </div>
                     
                     {/* Floating Math Symbols around mascot */}
                     <div className="absolute top-0 right-10 text-5xl text-school-teal font-bold animate-bounce delay-100 drop-shadow-md hover:rotate-12 transition-transform">➕</div>
                     <div className="absolute bottom-10 left-0 text-5xl text-school-orange-dark font-bold animate-bounce delay-700 drop-shadow-md hover:-rotate-12 transition-transform">➖</div>
                </div>
            </div>
        </div>
    </div>
  );
};