"use client";

import React from "react";

const HeroNavigation = () => {
  const navItems = ["Resume", "Work Experience", "Education", "Projects"];

  const handleScroll = (nav: string) => {
    const id = nav.toLowerCase().replace(/\s+/g, "-");
    // Handle manual overrides for hardcoded sections if needed
    // "to-contact" -> "contact"
    const targetId = nav === "To Contact" ? "contact" : id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getHoverStyles = (nav: string) => {
    switch (nav) {
      case "Work Experience":
        return "hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10";
      case "Projects":
        return "hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/10";
      case "Education":
        return "hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10";
      case "Certifications":
        return "hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10";
      default:
        // Default for About, Contact, Resume (Sky/Blue)
        return "hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-900";
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {navItems.map((nav) => (
        <button
          key={nav}
          onClick={() => handleScroll(nav)}
          className={`px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full transition-colors shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 ${getHoverStyles(
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
