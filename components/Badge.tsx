import React from "react";

interface BadgeProps {
    text: string;
    variant?: "sky" | "indigo" | "emerald" | "rose" | "amber";
}

const colorStyles = {
    sky: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

const Badge: React.FC<BadgeProps> = ({ text, variant = "sky" }) => {
    return (
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 mb-2 last:mr-0 ${colorStyles[variant]}`}>
            {text}
        </span>
    );
};

export default Badge;
