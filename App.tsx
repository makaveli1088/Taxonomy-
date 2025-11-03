import React, { useState, useMemo } from 'react';
import { parseAndGroupData } from './data';
import CategoryCard from './components/CategoryCard';
import ReasonPill from './components/ReasonPill';
import { BackArrowIcon } from './components/icons';
import type { GroupedData } from './types';

const App: React.FC = () => {
  const data: GroupedData = useMemo(() => parseAndGroupData(), []);
  const categories = useMemo(() => Object.keys(data), [data]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const reasons = selectedCategory ? data[selectedCategory] : [];

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearSelection = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex-grow">
        <header className="relative text-center mb-8 sm:mb-12 h-16 flex items-center justify-center">
          {selectedCategory && (
            <button
              onClick={handleClearSelection}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 animate-fade-in"
              aria-label="Go back to categories"
            >
              <BackArrowIcon />
            </button>
          )}
          <h1 className={`text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 transition-opacity duration-300 text-center px-12 ${selectedCategory ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            Taxonomy
          </h1>
        </header>

        <main>
          <div className={!selectedCategory ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6' : ''}>
            {categories.map((category) => (
              <CategoryCard
                key={category}
                category={category}
                onClick={() => handleSelectCategory(category)}
                isFaded={selectedCategory !== null && selectedCategory !== category}
                isSelected={selectedCategory === category}
              />
            ))}
          </div>

          <div className="mt-8 min-h-[200px]">
            {selectedCategory && (
              <div className="w-full">
                {reasons.length > 0 ? (
                  <div className="flex flex-wrap justify-start gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                    {reasons.map((reason, index) => (
                      <ReasonPill key={`${reason}-${index}`} reason={reason} index={index} />
                    ))}
                  </div>
                ) : (
                  <p className="text-left text-slate-400 text-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
                    No specific reasons listed for this category.
                  </p>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
      <footer className="w-full text-center py-4 mt-auto">
        <p className="text-sm text-slate-500">An interactive tool for driver training.</p>
      </footer>
    </div>
  );
};

export default App;
