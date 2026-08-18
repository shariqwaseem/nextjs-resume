import React from "react";

interface BadgeProps {
  text: string;
  variant?: "sky" | "indigo" | "emerald" | "rose" | "amber";
}

const accentStyles = {
  sky: "border-sky-200 text-sky-700 dark:border-sky-800 dark:text-sky-300",
  indigo:
    "border-indigo-200 text-indigo-700 dark:border-indigo-800 dark:text-indigo-300",
  emerald:
    "border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300",
  rose: "border-rose-200 text-rose-700 dark:border-rose-800 dark:text-rose-300",
  amber:
    "border-amber-200 text-amber-700 dark:border-amber-800 dark:text-amber-300",
};

const Badge: React.FC<BadgeProps> = ({ text, variant = "sky" }) => (
  <span
    className={`mb-2 mr-3 inline-flex items-center gap-3 text-[11px] font-bold uppercase leading-tight tracking-[0.12em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-current first:before:hidden last:mr-0 ${accentStyles[variant]}`}
  >
    {text}
  </span>
);

export default Badge;
