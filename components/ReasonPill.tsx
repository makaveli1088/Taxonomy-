import React from 'react';
import type { Reason } from '../types';
import { ExternalLinkIcon } from './icons';

interface ReasonPillProps {
  reason: Reason;
  index: number;
}

const ReasonPill: React.FC<ReasonPillProps> = ({ reason, index }) => {
  const baseClasses = `
    flex items-center gap-2
    bg-slate-700/50 text-sky-300 px-4 py-2 rounded-full
    text-sm sm:text-base font-medium
    opacity-0 animate-fade-in
    transition-colors duration-200
  `;

  const animationStyle = { animationDelay: `${index * 60}ms` };

  if (reason.url) {
    return (
      <a
        href={reason.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} hover:bg-slate-600/80 hover:text-sky-200 cursor-pointer group`}
        style={animationStyle}
      >
        <span>{reason.name}</span>
        <ExternalLinkIcon className="h-4 w-4 text-sky-400 group-hover:text-sky-300 transition-colors" />
      </a>
    );
  }

  return (
    <div
      className={baseClasses}
      style={animationStyle}
    >
      {reason.name}
    </div>
  );
};

export default ReasonPill;
