"use client";

import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <section className="mt-24 grid md:grid-cols-3 gap-10 px-6 max-w-5xl bg-gray-50 dark:bg-black rounded-[1.75rem] py-10 z-10">
      {[
        {
          title: "Smarter Prompts",
          desc: "AI suggestions to make your prompts powerful.",
        },
        {
          title: "One-Click Export",
          desc: "Copy or share directly with your workflow.",
        },
        {
          title: "100% Secure",
          desc: "Your data stays private and never shared.",
        },
      ].map((f) => (
        <div
          key={f.title}
          className="p-6 bg-white dark:bg-gray-800  rounded-2xl shadow-md text-center transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {f.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-300">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
