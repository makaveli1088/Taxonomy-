import React from 'react';

interface ReasonPillProps {
  reason: string;
  index: number;
}

const ReasonPill: React.FC<ReasonPillProps> = ({ reason, index }) => {
  return (
    <div
      className="bg-slate-700/50 text-sky-300 px-4 py-2 rounded-full text-sm sm:text-base font-medium opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {reason}
    </div>
  );
};

export default ReasonPill;