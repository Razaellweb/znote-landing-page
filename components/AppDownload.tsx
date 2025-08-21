"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AppDownload() {
  return (
    <section
      className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-center"
      aria-labelledby="app-download-heading"
    >
      <h2
        id="app-download-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-6"
      >
        Take Znote everywhere
      </h2>
      <p className="text-gray-300 mb-8 text-lg">
        Available on web and mobile. Sync your notes across all your devices.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]"
          aria-label="Download on the App Store"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block" aria-hidden="true"><path d="M17 6.1A5 5 0 0 0 12 2a5 5 0 0 0-5 4.1"/><rect x="2" y="7" width="20" height="15" rx="5"/><path d="M16 21a2 2 0 0 1-4 0"/></svg>
          App Store
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-[#222c3c] hover:bg-[#3b82f6] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]"
          aria-label="Get it on Google Play"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block" aria-hidden="true"><polygon points="3 2 21 12 3 22 3 2"/><line x1="3" y1="2" x2="15" y2="12"/><line x1="3" y1="22" x2="15" y2="12"/></svg>
          Google Play
        </motion.a>
      </div>
    </section>
  );
}
