import React from 'react';
import { Hero } from './components/Hero';
import { LessonOutline } from './components/LessonOutline';
import { LearningGoals } from './components/LearningGoals';
import { QuickQuiz } from './components/QuickQuiz';
import { PracticeCard } from './components/PracticeCard';
import { CoreConcepts } from './components/CoreConcepts';
import { Equations } from './components/Equations';

function App() {
  return (
    <div className="min-h-screen bg-school-bg py-8 px-4 font-rounded">
      <div className="max-w-6xl mx-auto">
        <Hero />

        {/* Masonry-ish Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Row 1 */}
          <div className="h-full">
            <LessonOutline />
          </div>
          <div className="h-full">
            <LearningGoals />
          </div>

          {/* Row 2 */}
          <div className="h-full">
             <QuickQuiz />
          </div>
          <div className="h-full">
             <PracticeCard />
          </div>

          {/* Row 3 */}
          <div className="h-full">
             <CoreConcepts />
          </div>
          <div className="h-full">
             <Equations />
          </div>
          
        </div>

        <div className="text-center mt-12 text-school-text/50 text-sm">
          &copy; 2028 Miri School • Grade 1 Math Dept.
        </div>
      </div>
    </div>
  );
}

export default App;