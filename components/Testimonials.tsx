"use client";
import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emily Chen",
    text: "The minimal design keeps me focused. Znote is my daily companion for study notes.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Michael Brown",
    text: "I love how quickly I can find old notes. The search is next level!",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      className="max-w-4xl mx-auto px-6 md:px-12 py-16"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center"
      >
        What our users say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex-1 bg-[#181e29] dark:bg-[#23272f] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col items-center"
            aria-label={`Review from ${review.name}`}
          >
            <img
              src={review.img}
              alt={`Avatar of ${review.name}`}
              className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-[#3b82f6]"
              loading="lazy"
            />
            <p className="text-gray-200 text-base mb-3 text-center">“{review.text}”</p>
            <span className="text-sm text-[#3b82f6] font-semibold">{review.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
