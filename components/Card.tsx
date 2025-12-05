import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 transition-all duration-300 hover:shadow-md `}
    >
      {children}
    </div>
  );
};

export default Card;
