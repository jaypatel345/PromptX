"use client";
import React, { useState } from "react";
import {
  MessageSquare,
  Settings,
  Plus,
  Menu,
  Mic,
  Send,
  User,
  Brain,
  BookOpen,
  Star,
  House,
} from "lucide-react";
import Link from "next/link";

export default function Tools() {
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#212121] dark:text-white">
      <div className="flex h-screen dark:bg-[#212121] dark:text-white ">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } transition-all duration-300 overflow-hidden  bg-gray-200 flex flex-col dark:bg-[#303030] dark:text-white`}
        >
          {/* Sidebar Header */}
          <div className="p-4  dark:bg-[#303030] dark:text-white ">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center space-x-2 w-full text-left  p-2 rounded-lg transition-colors dark:bg-[#303030] dark:text-white"
            >
              <Menu className="w-5 h-5 cursor-pointer hover:text-gray-500 hover:dark:text-gray-300" />
              <div className=" text-xl font-semibold">Prompt
              <span className="font-bold text-2xl bg-gradient-to-r from-[#00BCFF] to-blue-500 bg-clip-text text-transparent">AI</span></div>
            </button>
          </div>

          {/* New Chat Button */}
          <div className="p-4">
            <button className="flex items-center space-x-3 w-full bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition-colors text-gray-900 dark:bg-[#303030] dark:text-white hover:dark:bg-[#1b1a1a59] cursor-pointer ">
              <img
                src="/communication.png"
                alt="Light"
                className="dark:hidden w-6 h-6 "
              />
              <img
                src="/sms.png"
                alt="Dark"
                className="hidden dark:block w-6 h-6 "
              />
              <span>New chat</span>
            </button>
          </div>

          {/* Recent Chats */}
          <div className="flex-1 overflow-y-auto ">
            <div className="p-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-2 bg-gray-200 dark:bg-[#303030] dark:text-white  ">
                Recent
              </div>
              {[
                "Prompt Enhancement Ideas",
                "Website Structure Planning",
                "UI Design Concepts",
                "Code Optimization Tips",
              ].map((chat, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-3 w-full text-left hover:bg-gray-300  bg-gray-200 p-2 rounded-lg transition-colors mb-1 text-sm text-black dark:bg-[#303030] dark:text-white hover:dark:bg-[#1b1a1a59] "
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{chat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-500/50">
            <button className="flex items-center space-x-3 w-full hover:bg-gray-300 hover:dark:bg-[#1b1a1a59] p-2 rounded-lg transition-colors">
              <div className="w-6 h-6  bg-gradient-to-r from-[#00BCFF] to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-3 h-3" />
              </div>
              <span className="text-sm">John Doe</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4  bg-white dark:bg-[#212121]  dark:text-white">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors dark:bg-[#212121] bg-gray-200 dark:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <div className="flex-1 flex justify-center">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-[#00BCFF] to-blue-500 px-4 py-2 rounded-lg transition-colors hover:opacity-90 cursor-pointer">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Upgrade your plan</span>
              </button>
            </div>
            <div className="flex items-center space-x-2 ">
              <Link href="/">
                <button className="p-2   rounded-lg transition-colors">
                  <House className="w-5 h-5 text-gray-600 dark:bg-[#212121] dark:text-white hover:dark:text-gray-300  hover:text-gray-500 cursor-pointer" />
                </button>
              </Link>
              <button className="p-2   rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600 dark:bg-[#212121] dark:text-white hover:dark:text-gray-300  hover:text-gray-500 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 dark:bg-[#212121] dark:text-white">
            <div className="max-w-3xl w-full text-center">
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Where should we begin?
                </h1>
                <p className="text-gray-600 text-lg dark:bg-[#212121] dark:text-white ">
                  Start a conversation to enhance your prompts and ideas
                </p>
              </div>

              {/* Suggestion Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 dark:bg-[#212121] dark:text-white">
                {[
                  {
                    icon: Brain,
                    title: "Enhance my prompt",
                    desc: "Make my prompts more effective and clear",
                  },
                  {
                    icon: BookOpen,
                    title: "Generate ideas",
                    desc: "Help me brainstorm creative solutions",
                  },
                  {
                    icon: MessageSquare,
                    title: "Improve communication",
                    desc: "Better ways to express my thoughts",
                  },
                  {
                    icon: Star,
                    title: "Optimize workflow",
                    desc: "Streamline my creative process",
                  },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="flex items-start space-x-3 p-4  hover:bg-gray-50 border rounded-xl transition-colors text-left shadow-sm dark:bg-[#212121] dark:text-white"
                  >
                    <item.icon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 " />
                    <div>
                      <h3 className="font-medium mb-1 text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4  dark:border-gray-700 bg-white dark:bg-[#212121] dark:text-white ">
            <div className="max-w-4xl mx-auto ">
              <div className="flex items-center bg-white    transition-colors shadow-sm px-2 dark:bg-[#303030] dark:text-white border  rounded-4xl">
                {/* Plus icon */}
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-color dark:bg-[#303030] dark:text-white ">
                  <Plus className="w-5 h-5  dark:text-white" />
                </button>

                {/* Textarea */}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask anything"
                  className="flex-1 bg-transparent  outline-none resize-none px-2 text-gray-900 dark:bg-[#303030] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 max-h-32 min-h-[40px] py-4"
                  rows={1}
                />

                {/* Icons on the right */}
                <div className="flex items-center space-x-3 pr-2">
                  <button className="text-gray-500 hover:text-gray-400 dark:hover:text-gray-300 transition-colors">
                    <Mic className="w-5 h-5 cursor-pointer " />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className={`p-2 rounded-lg  transition-colors ${
                      message.trim()
                        ? "bg-gray-200 dark:bg-gray-400/20 text-black  hover:bg-gray-300 dark:hover:bg-gray-400/10"
                        : "cursor-not-allowed "
                    }`}
                  >
                    <Send className="w-4 h-4  dark:text-white cursor-pointer " />
                  </button>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-gray-500 dark:text-white text-center mt-3">
                ChatGPT can make mistakes. Check important info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
