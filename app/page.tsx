// pages/landing.tsx
import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProof from "../components/SocialProof";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Znote – The smart way to a notes app called znote</title>
        <meta name="description" content="A notes app called Znote. Simple, modern, and powerful note creation, editing, and search for students and professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Znote – The smart way to a notes app called znote" />
        <meta property="og:description" content="A notes app called Znote. Simple, modern, and powerful note creation, editing, and search for students and professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/znote-og.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827] text-white dark:text-white transition-colors duration-300">
        <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-tr from-[#3b82f6] to-[#1f2937] shadow-lg" aria-hidden="true" />
            <span className="font-bold text-2xl tracking-tight text-white">Znote</span>
          </div>
          <ThemeToggle />
        </header>
        <main>
          <Hero />
          <SocialProof />
          <Features />
          <HowItWorks />
          <Testimonials />
          <AppDownload />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
