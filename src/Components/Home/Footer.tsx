"use client";

import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-b  dark:bg-black  text-gray-700 dark:text-gray-300 py-10 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About Us</h2>
          <p className="mb-4 leading-relaxed text-sm">
            Prompt Enhancer is a cutting-edge tool designed to refine and
            elevate your ideas into clear, impactful prompts. We empower
            creativity and precision, helping you unlock the full potential of
            AI conversations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div >
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h2>
          <div className="flex space-x-3">
            {["Facebook", "Twitter", "Instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors duration-200"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-sm">Gujarat, India</p>
          <p className="text-sm">Email: <a href="mailto:Pj409402@gmail.com" className="hover:text-blue-500">Pj409402@gmail.com</a></p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        © 2024 Prompt Enhancer. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;