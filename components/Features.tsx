"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Effortless Note Creation",
    description: "Quickly jot down ideas, lists, or meeting notes with a distraction-free editor.",
    icon: <CheckCircle2 className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
  },
  {
    title: "Instant Search",
    description: "Find any note in seconds with powerful, lightning-fast search.",
    icon: <CheckCircle2 className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
  },
  {
    title: "Seamless Editing",
    description: "Edit and organize notes with folders and tags. Everything stays in sync.",
    icon: <CheckCircle2 className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
  },
  {
    title: "Cloud Integration",
    description: "Connect Google Drive or Dropbox to backup and access notes anywhere.",
    icon: <CheckCircle2 className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />,
  },
];

export default function Features() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      aria-labelledby="features-heading"
    >
      <h2
        id="features-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
      >
        Features that keep you organized
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#181e29] dark:bg-[#23272f] rounded-2xl p-6 flex flex-col items-start shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
