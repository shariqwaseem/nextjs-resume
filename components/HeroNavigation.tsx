"use client";

import React from "react";

const HeroNavigation = () => {
  const navItems = [
    "Resume",
    "Technical Skills",
    "Work Experience",
    "Education",
    "Projects",
  ];

  const handleScroll = (nav: string) => {
    const id = nav.toLowerCase().replace(/\s+/g, "-");
    const targetId = nav === "To Contact" ? "contact" : id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getHoverStyles = (nav: string) => {
    switch (nav) {
      case "Work Experience":
        return "hover:border-rose-400 hover:text-rose-700 dark:hover:border-rose-500 dark:hover:text-rose-300";
      case "Technical Skills":
        return "hover:border-sky-400 hover:text-sky-700 dark:hover:border-sky-500 dark:hover:text-sky-300";
      case "Projects":
        return "hover:border-amber-400 hover:text-amber-700 dark:hover:border-amber-500 dark:hover:text-amber-300";
      case "Education":
        return "hover:border-emerald-400 hover:text-emerald-700 dark:hover:border-emerald-500 dark:hover:text-emerald-300";
      case "Certifications":
        return "hover:border-indigo-400 hover:text-indigo-700 dark:hover:border-indigo-500 dark:hover:text-indigo-300";
      default:
        return "hover:border-slate-950 hover:text-slate-950 dark:hover:border-slate-50 dark:hover:text-slate-50";
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
      {navItems.map((nav) => (
        <button
          key={nav}
          onClick={() => handleScroll(nav)}
          className={`border-b-2 border-transparent px-0.5 pb-1 text-xs font-black uppercase tracking-[0.16em] text-slate-500 transition-colors dark:text-slate-400 ${getHoverStyles(
            nav,
          )}`}
        >
          {nav}
        </button>
      ))}
    </div>
  );
};

export default HeroNavigation;
