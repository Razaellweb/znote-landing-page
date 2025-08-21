"use client";
import React from "react";
import { motion } from "framer-motion";
import { NotebookPen, Search, Cloud, Folder } from "lucide-react";

const steps = [
  {
    icon: <NotebookPen className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
    title: "Create Notes",
    description: "Start with a click. Write and save notes instantly.",
  },
  {
    icon: <Folder className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
    title: "Organize",
    description: "Sort notes into folders or use tags for quick access.",
  },
  {
    icon: <Search className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
    title: "Search",
    description: "Find what you need with lightning-fast search.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
    title: "Sync & Access",
    description: "Connect Google Drive or Dropbox to keep notes everywhere.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center"
      >
        How Znote Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center bg-[#181e29] dark:bg-[#23272f] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-gray-400 text-base text-center">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
