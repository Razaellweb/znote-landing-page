"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-center"
      aria-label="Call to Action"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-tr from-[#3b82f6] to-[#1f2937] rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Ready to get started?
        </h2>
        <p className="text-gray-200 text-lg mb-4">
          Sign up now and experience the smartest way to take notes.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-[#3b82f6] font-semibold shadow-lg transition-colors duration-200 rounded-xl px-8 py-4 text-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]"
          aria-label="Get Started with Znote"
        >
          <a href="#signup">Get Started</a>
        </Button>
      </motion.div>
    </section>
  );
}
