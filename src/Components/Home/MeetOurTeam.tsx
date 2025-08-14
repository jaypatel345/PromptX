"use client";

import { WavyBackground } from "@/Components/ui/wavy-background";
import { AnimatedTooltip } from "@/Components/ui/animated-tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const instructors = [
  {
    id: 1,
    name: "Jay Patel",
    designation: "Founder & CEO",
    image: "/Jay.JPEG",
  },
  {
    id: 2,
    name: "Arjun Mehra",
    designation: "Co-Founder & CTO",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    designation: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 4,
    name: "Ravi Kumar",
    designation: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Ananya Verma",
    designation: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

function Instructors() {
  const { theme } = useTheme(); // use theme directly
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section>
      <div className="relative h-[30rem] w-screen overflow-hidden flex items-center justify-center">
        <WavyBackground
          backgroundFill={theme === "dark" ? "black" : "white"}
          waveOpacity={0.5}
          className="  w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"
        >
          <h2 className="text-black dark:text-white text-2xl md:text-4xl lg:text-7xl font-bold text-center mb-8">
            Meet Our Team
          </h2>
          <p className="text-base md:text-lg text-black dark:text-white text-center mb-4">
            Discover the talented professionals who make our vision a reality
          </p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
          </div>
        </WavyBackground>
      </div>
    </section>
  );
}

export default Instructors;