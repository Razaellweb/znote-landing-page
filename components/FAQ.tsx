"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Znote free to use?",
    answer: "Yes, Znote is completely free for all users.",
  },
  {
    question: "Can I sync notes across devices?",
    answer: "Absolutely. Znote syncs your notes across web and mobile, and supports Google Drive and Dropbox integration.",
  },
  {
    question: "Is my data secure?",
    answer: "Your notes are encrypted in transit and stored securely. We never sell your data.",
  },
  {
    question: "Do you offer dark mode?",
    answer: "Yes! Znote supports both light and dark mode.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section
      className="max-w-3xl mx-auto px-6 md:px-12 py-16"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
      >
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-[#222c3c] bg-[#181e29] dark:bg-[#23272f] rounded-2xl shadow-md">
        {faqs.map((faq, idx) => (
          <div key={faq.question}>
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] transition-colors"
              aria-expanded={openIdx === idx}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIdx === idx ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-[#3b82f6]" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIdx === idx && (
                <motion.div
                  id={`faq-panel-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-300 text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
