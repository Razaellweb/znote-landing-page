"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-28 max-w-7xl mx-auto gap-10"
      aria-label="Hero section"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2"
        >
          The smart way<br />to take notes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          Znote is a simple, modern notes app for students and professionals. Create, edit, and search your notes effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold shadow-lg transition-colors duration-200 rounded-xl px-8 py-4 text-lg mt-4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]"
            aria-label="Get Started with Znote"
          >
            <a href="#signup">Get Started</a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <div className="relative w-[320px] h-[420px] bg-[#181e29] dark:bg-[#23272f] rounded-3xl shadow-2xl overflow-hidden border border-[#222c3c] flex flex-col justify-between p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#3b82f6] rounded-full" aria-hidden="true" />
            <span className="w-3 h-3 bg-[#f59e42] rounded-full" aria-hidden="true" />
            <span className="w-3 h-3 bg-[#10b981] rounded-full" aria-hidden="true" />
          </div>
          <div className="flex-1 flex flex-col gap-3 justify-center">
            <div className="bg-[#23272f] rounded-xl p-3 flex flex-col gap-2 shadow-inner">
              <span className="font-mono text-sm text-gray-200">Meeting Notes</span>
              <span className="text-gray-400 text-xs">#work #project</span>
              <span className="text-gray-300 text-base mt-2">Discussed roadmap, assigned tasks, next steps.</span>
            </div>
            <div className="bg-[#23272f] rounded-xl p-3 flex flex-col gap-2 shadow-inner mt-3">
              <span className="font-mono text-sm text-gray-200">Study Plan</span>
              <span className="text-gray-400 text-xs">#school #exam</span>
              <span className="text-gray-300 text-base mt-2">Review chapters 1-3, practice problems, group study.</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-xs text-gray-400">Search your notes...</span>
            <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
