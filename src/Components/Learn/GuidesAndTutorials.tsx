"use client";
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "@/Components/Home/Index";
import Image from "next/image";
import UseCases from "./UseCases";
import ReactMarkdown from "react-markdown";

// ---- Types for safer content access ----
type Subpoint = { title: string; description: string };
type VideoInfo = { src: string; caption: string };
type ContentEntry = {
  text: string;
  subpoints?: Subpoint[];
  video?: VideoInfo;
};

export default function GuidesAndTutorials() {
  const sections = [
    { id: "overview", title: "Prompt engineering: overview and guide" },
    { id: "what-is", title: "What is prompt engineering?" },
    { id: "what-is-prompt", title: "What is a prompt for AI?" },
    { id: "requirements", title: "What do you need for prompt engineering?" },
    { id: "types-of-prompts", title: "Types of prompts" },
    { id: "use-cases", title: "Use cases and examples of prompt engineering" },
  ] as const;

  // Safe content map: every ID in sections has an entry
  const content: Record<string, ContentEntry> = {
    overview: {
      text: `The rise of large language models (LLMs) has brought forth exciting possibilities for human-computer interaction. However, harnessing the full potential of these powerful AI models requires a crucial skill: prompt engineering. This burgeoning field focuses on crafting effective prompts that unlock the capabilities of LLMs, enabling them to understand intent, follow instructions, and generate desired outputs. As we increasingly interact with AI in various applications, prompt engineering plays a vital role in ensuring accurate, relevant, and safe interactions.`,
      video: {
        src: "https://www.youtube.com/watch?v=_ZvnD73m40o",
        caption: "Tips to becoming a world-class Prompt Engineer",
      },
    },
    "what-is": {
      text: `Prompt engineering is the art and science of designing and optimizing prompts to guide AI models, particularly LLMs, towards generating the desired responses. By carefully crafting prompts, you provide the model with context, instructions, and examples that help it understand your intent and respond in a meaningful way. Think of it as providing a roadmap for the AI, steering it towards the specific output you have in mind.

To dive deeper into the world of prompt design and explore its applications, check out the Introduction to Prompt Design on Google Cloud.

Ready to experiment with LLMs and prompt engineering firsthand? Try the Vertex AI free trial and experience the power of this technology.`,
    },
    "what-is-prompt": {
      text: `In the context of AI, a prompt is the input you provide to the model to elicit a specific response. This can take various forms, ranging from simple questions or keywords to complex instructions, code snippets, or even creative writing samples. The effectiveness of your prompt directly influences the quality and relevance of the AI's output.`,
    },
    requirements: {
      text: `Several key elements contribute to effective prompt engineering. Mastering these allows you to communicate effectively with AI models and unlock their full potential.`,
      subpoints: [
        {
          title: "Prompt format",
          description:
            "The structure and style of your prompt play a significant role in guiding the AI's response. Different models may respond better to specific formats, such as natural language questions, direct commands, or structured inputs with specific fields. Understanding the model's capabilities and preferred format is essential for crafting effective prompts.",
        },
        {
          title: "Context and examples",
          description:
            "Providing context and relevant examples within your prompt helps the AI understand the desired task and generate more accurate and relevant outputs. For instance, if you're looking for a creative story, including a few sentences describing the desired tone or theme can significantly improve the results.",
        },
        {
          title: "Fine-tuning and adapting",
          description:
            "Fine-tuning the AI model on specific tasks or domains using tailored prompts can enhance its performance. Additionally, adapting prompts based on user feedback or model outputs can further improve the model's responses over time.",
        },
        {
          title: "Multi-turn conversations",
          description:
            "Designing prompts for multi-turn conversations allows users to engage in continuous and context-aware interactions with the AI model, enhancing the overall user experience.",
        },
      ],
    },
    "types-of-prompts": {
      text: `There are various types of prompts used in AI, each serving a specific purpose:`,

      subpoints: [
        {
          title: "Direct prompts (Zero-shot)",
          description:
            "Zero-shot prompting involves providing the model with a direct instruction or question without any additional context or examples. Common uses include idea generation, summarization, or translation, where the model is given only the request without extra information.",
        },
        {
          title: "One-, few- and multi-shot prompts",
          description:
            "This approach provides the model with one or more examples of input-output pairs before the actual prompt. It helps the model understand the task and produce responses that are closer to the desired format or quality.",
        },
        {
          title: "Chain of Thought Prompts",
          description:
            "Chain of Thought prompting encourages the model to reason through a problem step-by-step, leading to more logical, well-structured, and complete outputs for complex reasoning tasks.",
        },
        {
          title: "Zero-shot CoT Prompts",
          description:
            "This combines the principles of Chain of Thought prompting with zero-shot prompting, instructing the model to perform reasoning steps without prior examples, often improving accuracy for complex queries.",
        },
      ],
    },
  };
  const [activeSection, setActiveSection] = useState("overview");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: "-10% 0px -80% 0px" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Head>
        <title>Learn â€¢ PromptEnhancer</title>
      </Head>
      <Navbar />
      <div className="flex items-start min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        {/* Fixed Sidebar - line now starts below navbar */}
        <aside className="hidden md:block w-64 p-6 fixed left-0 h-screen overflow-y-auto pt-24 z-40">
          <div className="border-r border-gray-200 dark:border-gray-800 h-full pr-6">
            <nav className="space-y-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`block text-left w-full px-3 py-2 rounded-md text-sm ${
                    activeSection === s.id
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content with left margin to account for fixed sidebar */}
        <main className="flex-1 p-6 md:p-12 space-y-16 md:ml-64">
          {sections.map((s) => {
            const c = content[s.id];
            return (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => {
                  sectionRefs.current[s.id] = el;
                }}
                className="scroll-mt-24"
              >
                {s.id !== "use-cases" && (
                  <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                )}

                {/* Special rendering for overview with video */}
                {s.id === "overview" ? (
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <p className="text-lg mb-18">{c.text}</p>
                    </div>
                    <div>
                      <div className="rounded-2xl overflow-hidden shadow-lg relative z-50 group cursor-pointer border-4  dark:border-4">
                        <a
                          href={c.video?.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="/PromptEngImg.jpg"
                            alt={c.video?.caption || "Video thumbnail"}
                            width={800}
                            height={450}
                            className="w-full h-48 md:h-49 object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <p className="p-2 text-sm text-gray-600 dark:text-gray-400">
                        {c.video?.caption}
                      </p>
                    </div>
                  </div>
                ) : s.id === "use-cases" ? (
                  <div className="min-h-[400px]">
                    <UseCases />
                  </div>
                ) : (
                  <>
                    {c.text && (
                      <div className="prose dark:prose-invert max-w-none mb-4">
                        <ReactMarkdown>{c.text}</ReactMarkdown>
                      </div>
                    )}
                    {c.subpoints && (
                      <div className="space-y-6">
                        {c.subpoints.map((sp, idx) => (
                          <div key={idx}>
                            <h3 className="text-xl font-semibold mb-1">
                              {sp.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                              {sp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}
