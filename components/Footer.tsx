"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181e29] dark:bg-[#23272f] py-8 px-6 md:px-12 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 rounded-lg bg-gradient-to-tr from-[#3b82f6] to-[#1f2937] shadow" aria-hidden="true" />
          <span className="font-bold text-lg tracking-tight text-white">Znote</span>
        </div>
        <nav aria-label="Footer navigation" className="flex gap-6 text-gray-400 text-sm">
          <a href="#features" className="hover:text-[#3b82f6] transition-colors">Features</a>
          <a href="#faq" className="hover:text-[#3b82f6] transition-colors">FAQ</a>
          <a href="#signup" className="hover:text-[#3b82f6] transition-colors">Get Started</a>
        </nav>
        <span className="text-gray-500 text-xs">© {new Date().getFullYear()} Znote. All rights reserved.</span>
      </div>
    </footer>
  );
}
