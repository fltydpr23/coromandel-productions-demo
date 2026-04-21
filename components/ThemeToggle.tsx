"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-surface-2 border border-white/10 flex items-center px-1 transition-colors duration-500 hover:border-primary/50"
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{ x: theme === "dark" ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-background shadow-[0_0_10px_rgba(241,111,36,0.5)]"
      >
        {theme === "dark" ? <Moon size={12} /> : <Sun size={12} />}
      </motion.div>
    </button>
  );
}
