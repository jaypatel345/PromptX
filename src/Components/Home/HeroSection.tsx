"use client";

import { Button } from "@/Components/ui/button";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import React from "react";

export default function HeroSection() {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedEl.current) return;

    const typed = new Typed(typedEl.current, {
      strings: [
        "AI Mastery",
        "AI Brilliance",
        "AI Precision",
        "AI Advantage",
        "AI Creativity"
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1200,
      smartBackspace: true,
      loop: false, // keep cycling
      showCursor: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full text-center max-w-3xl mx-auto mt-30 px-8 bg-white dark:bg-black transition-colors">
      {/* Heading with typed.js animation */}
      <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white relative z-1">
        Enhance Your Prompts with{" "}
        <span className="relative inline-block w-[10ch]">
          <span
            ref={typedEl}
            className="inline-block w-[10ch] text-center dark:text-blue-400 bg-gradient-to-r from-[#00BCFF] to-blue-500 bg-clip-text text-transparent whitespace-pre leading-none min-h-[1em] align-middle pb-1"
          ></span>
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 relative z-10">
        PromptEnhancer helps you craft perfect prompts for ChatGPT, GPT-4, and
        more. Save time, improve results, and supercharge your creativity.
      </p>

      {/* CTA Button */}
      <Button
        asChild
        className="text-lg px-6 py-5 cursor-pointer text-white dark:text-black dark:bg-white dark:hover:bg-gray-100/90 relative z-10"
      >
        <Link href="/PromptAI">Get Started Free</Link>
      </Button>
    </section>
  );
}
