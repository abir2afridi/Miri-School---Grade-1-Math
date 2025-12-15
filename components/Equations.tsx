import React, { useState } from 'react';

const equations = [
  { text: "1 + 1 = 2", explanation: "Because one and one together make two." },
  { text: "2 + 3 = 5", explanation: "Start at 2 and count 3 more steps!" },
  { text: "4 + 4 = 8", explanation: "Four plus four more makes eight." },
  { text: "5 + 5 = 10", explanation: "Five fingers on each hand makes ten!" }
];

export const Equations: React.FC = () => {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-4 relative">
       {/* Fake Tape Header */}
       <div className="bg-school-yellow/90 backdrop-blur-sm text-school-text font-bold text-center py-2 px-6 transform -rotate-2 shadow-md w-fit mx-auto rounded-sm mb-6 border-l-4 border-r-4 border-transparent bg-clip-padding relative z-10 hover:rotate-0 transition-transform duration-300 cursor-default">
          <div className="absolute inset-0 bg-white/20 skew-x-12 opacity-50"></div>
          Let's solve this together!
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 pb-2">
         {equations.map((eq, idx) => (
           <EquationCard key={idx} data={eq} index={idx} />
         ))}
       </div>
    </div>
  );
};

const EquationCard: React.FC<{data: {text: string, explanation: string}, index: number}> = ({ data, index }) => {
    const [active, setActive] = useState(false);
    
    // Split the equation to separate the answer for the circle effect
    const [problemPart, answerPart] = data.text.split('=');

    // Alternating initial rotations for a natural, playful look
    const baseRotation = index % 2 === 0 ? '-rotate-2' : 'rotate-2';

    // Parse the problem part to style the plus sign
    const renderProblem = () => {
        const parts = problemPart.split('+');
        return parts.map((part, i) => (
            <React.Fragment key={i}>
                <span>{part}</span>
                {i < parts.length - 1 && (
                    <span 
                        className="text-5xl text-school-yellow mx-2 inline-block transform translate-y-[-2px] drop-shadow-sm" 
                        style={{ 
                            WebkitTextStroke: '2px #264653',
                            paintOrder: 'stroke fill'
                        }}
                    >
                        +
                    </span>
                )}
            </React.Fragment>
        ));
    };

    return (
        <div 
             onMouseDown={() => setActive(true)}
             onMouseUp={() => setActive(false)}
             onMouseLeave={() => setActive(false)}
             className={`
                group relative
                bg-school-cream border-2 border-school-orange rounded-xl p-6 
                flex flex-col items-center justify-center gap-2
                shadow-[4px_4px_0px_0px_rgba(244,162,97,1)] 
                transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                cursor-pointer select-none
                transform ${baseRotation}
                hover:scale-105 hover:rotate-0 hover:bg-white hover:border-school-orange-dark hover:z-10
                hover:shadow-[8px_8px_0px_0px_rgba(231,111,81,0.4)]
                ${active ? '!scale-95 !shadow-inner !translate-y-1 !bg-school-yellow/20 !border-school-teal' : ''}
             `}
           >
             {/* Decorative Corner Dots */}
             <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-school-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
             <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-school-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>

             {/* Floating Sparkle Icon */}
             <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 group-hover:rotate-12 group-hover:scale-110">
                <span className="text-2xl filter drop-shadow-md">✨</span>
             </div>

             {/* Text Content */}
             <div className="font-pixel text-4xl text-school-text group-hover:text-school-orange-dark transition-colors duration-200 flex items-center flex-wrap justify-center gap-2">
                <div className="flex items-center">
                    {renderProblem()}
                </div>
                
                <span 
                    className="text-5xl text-school-yellow mx-2 inline-block transform translate-y-[-2px] drop-shadow-sm" 
                    style={{ 
                        WebkitTextStroke: '2px #264653',
                        paintOrder: 'stroke fill'
                    }}
                >
                    =
                </span>

                <span className="relative inline-block px-1">
                   {answerPart}
                   {/* Hand-drawn Circle SVG */}
                   <svg 
                     className="absolute -top-2 -left-3 w-[150%] h-[150%] text-red-500 opacity-0 group-hover:opacity-90 pointer-events-none" 
                     viewBox="0 0 100 60" 
                     preserveAspectRatio="none"
                   >
                       {/* A somewhat messy circle path */}
                       <path 
                         d="M20,15 C40,5 80,5 90,25 C95,45 80,55 50,55 C20,55 5,40 10,20" 
                         fill="none" 
                         stroke="currentColor" 
                         strokeWidth="4" 
                         strokeLinecap="round" 
                         strokeLinejoin="round"
                         strokeDasharray="300" 
                         className="group-hover:animate-draw-circle"
                       />
                   </svg>
                </span>
             </div>

             {/* Explanation Tooltip/Text */}
             <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
               <p className="text-sm font-rounded font-medium text-school-teal mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 text-center leading-tight">
                  {data.explanation}
               </p>
             </div>
           </div>
    );
}