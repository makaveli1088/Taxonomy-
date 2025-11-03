import React from 'react';

interface CategoryCardProps {
  category: string;
  onClick: () => void;
  isFaded: boolean;
  isSelected: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isFaded, isSelected }) => {
  const baseClasses = `
    bg-slate-800 rounded-lg text-slate-200
    shadow-lg border-2 border-transparent
    transition-all duration-500 ease-in-out transform overflow-hidden
  `;

  const interactiveClasses = `
    hover:border-sky-500 hover:shadow-sky-500/30
    hover:-translate-y-1 hover:scale-105
    cursor-pointer
  `;

  // Dynamic classes for different states
  const stateClasses = [
    isFaded
      ? 'opacity-0 scale-95 max-h-0 p-0 m-0 pointer-events-none'
      : 'max-h-40 p-4 sm:p-6',
    isSelected ? 'border-sky-400 shadow-sky-400/40 cursor-default w-max' : '',
    !isFaded && !isSelected ? 'text-center' : 'text-left'
  ].join(' ');

  return (
    <div
      onClick={!isSelected ? onClick : undefined}
      className={`${baseClasses} ${!isSelected ? interactiveClasses : ''} ${stateClasses}`}
    >
      <h2 className="text-lg sm:text-xl font-bold whitespace-pre-wrap">{category}</h2>
    </div>
  );
};

export default CategoryCard;
