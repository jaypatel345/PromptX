"use client";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Menu,
  MenuItem,
  ProductItem,
  HoveredLink,
} from "@/Components/ui/navbar-menu";
import { Button } from "@/Components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Spotlight } from "@/Components/ui/Spotlight";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark");
    setIsDark(darkMode);

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-96 md:-top-72"
          fill={isDark ? "white" : "rgb(9,178,255)"}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00BCFF] to-blue-500 text-white w-10 h-10">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M7 7h10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M7 17h10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className=" font-bold text-lg text-black dark:text-white">
              Prompt
              <span className="text-2xl bg-gradient-to-r from-[#00BCFF] to-blue-500 bg-clip-text text-transparent">AI</span>
            </span>
          </Link>

          {/* Menu */}
          <div className="relative z-50">
            <Menu setActive={setActive}>
              <Link href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                  className={
                    pathname === "/"
                      ? "text-gray-600/80 dark:text-gray-300"
                      : "text-gray-900 dark:text-gray-400"
                  }
                >
                  <div className="flex flex-col space-y-2 p-4 relative z-50  rounded-lg ">
                    <HoveredLink href="/guides">Get Started</HoveredLink>
                    <HoveredLink href="/case-studies">
                      Feature Section
                    </HoveredLink>
                    <HoveredLink href="/webinars">Meet Our Team</HoveredLink>
                  </div>
                </MenuItem>
              </Link>

              <Link href="/Learn">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Learn"
                  className={
                    pathname === "/Learn"
                      ? "text-gray-600/80 dark:text-gray-300"
                      : "text-gray-900 dark:text-gray-400"
                  }
                >
                  <div className="flex flex-col space-y-2 p-4 relative z-50    rounded-lg ">
                    <HoveredLink href="/guides">Guides & Tutorials</HoveredLink>
                    <HoveredLink href="/case-studies">Case Studies</HoveredLink>
                    <HoveredLink href="/webinars">Live Webinars</HoveredLink>
                  </div>
                </MenuItem>
              </Link>
              <Link href="/PromptAI">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Tools"
                  className={
                    pathname === "/PromptAI"
                      ? "text-gray-600/80 dark:text-gray-300"
                      : "text-gray-900 dark:text-gray-400"
                  }
                >
                  <div className="grid grid-cols-2 gap-4 p-5 cursor-pointer dark:bg-black  relative z-50 ">
                    <div className="hover:bg-gray-300 p-5 rounded-2xl">
                      <ProductItem
                        title="Prompt AI"
                        description="Enhance and optimize your AI prompts instantly."
                        href="/ToolsPage"
                        src="/prompt-frameworks-1024x536.png.webp"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="hover:bg-gray-300 p-5 rounded-2xl ">
                      <ProductItem
                        title="Template Library"
                        description="Browse ready-to-use prompt templates."
                        href="/tools/template-library"
                        src="/Screenshot 2025-08-14 at 10.57.44 PM.png"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </MenuItem>
              </Link>

              <MenuItem
                setActive={setActive}
                active={active}
                item="Community"
                className={
                  pathname === "/Community"
                    ? "text-gray-600/80 dark:text-gray-300"
                    : "text-gray-900 dark:text-gray-400"
                }
              >
                <div className="flex flex-col space-y-2 p-4">
                  <HoveredLink href="/forum">Discussion Forum</HoveredLink>
                  <HoveredLink href="/events">Events & Meetups</HoveredLink>
                  <HoveredLink href="/support">Help & Support</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Right CTA Buttons */}
          <div className="hidden md:flex gap-1.5">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <Link href="/Signup">
              <Button className="bg-sky-600 hover:bg-sky-900 text-white cursor-pointer dark:hover:bg-sky-700 bg-gradient-to-r from-[#00BCFF] to-blue-500 hover:bg-gradient-to-tr">
                Get Started
              </Button>
            </Link>
            <Link href="/Login">
              <Button className="cursor-pointer dark:bg-white dark:text-black bg-black text-white dark:hover:bg-gray-100/90 ">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
