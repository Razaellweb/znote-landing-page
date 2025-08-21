"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Kim",
    role: "Student",
    text: "Znote helps me keep all my class notes organized. The search is so fast!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    text: "I use Znote for meeting notes and project plans. Love the clean interface.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jordan Lee",
    role: "Freelancer",
    text: "Syncing with Dropbox means I never lose a note. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sofia Garcia",
    role: "Researcher",
    text: "Folders and tags make it easy to organize research notes. Znote is a game changer.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function SocialProof() {
  return (
    <section
      className="bg-[#181e29] dark:bg-[#23272f] py-14 px-6 md:px-12"
      aria-labelledby="social-proof-heading"
    >
      <h2
        id="social-proof-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
      >
        Trusted by students & professionals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center bg-[#222c3c] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200"
            aria-label={`Testimonial from ${t.name}`}
          >
            <img
              src={t.img}
              alt={`Avatar of ${t.name}`}
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#3b82f6]"
              loading="lazy"
            />
            <p className="text-gray-200 text-base mb-3 text-center">“{t.text}”</p>
            <span className="text-sm text-[#3b82f6] font-semibold">{t.name}</span>
            <span className="text-xs text-gray-400">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
