"use client";
import React, { useEffect, useRef, useState } from "react";
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
  CopyIcon,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

export default function Tools() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const [streamResponse, setStreamResponse] = useState("");
  const [streaming, setStreaming] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messagesList, setMessagesList] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);

  const handlechat = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResponse("");
    setMessagesList((prev) => [...prev, { sender: "user", text: message }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      // Only add the AI response once - either mock or real response
      const aiResponse =
        data.response || "This is a mock response for testing purposes.";
      setResponse(aiResponse);
      setMessagesList((prev) => [...prev, { sender: "ai", text: aiResponse }]);

      setMessage("");
    } catch (error: any) {
      const errorMessage =
        "Error: " + (error?.message || "Something went wrong");
      setResponse(errorMessage);
      setMessagesList((prev) => [
        ...prev,
        { sender: "ai", text: errorMessage },
      ]);
      console.error("Error sending request:", error);
    }
    setLoading(false);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      handlechat(); // Use the main chat handler
    }
  };
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`; // Max height 120px
    }
  }, [message]);

  const project = [
    {
      icon: Brain,
      title: "Enhance my prompt",
      description: "Make my prompts more effective and clear",
      link: "string",
    },
    {
      icon: BookOpen,
      title: "Generate ideas",
      description: "Help me brainstorm creative solutions",
      link: "string",
    },
    {
      icon: MessageSquare,
      title: "Improve communication",
      description: "Better ways to express my thoughts",
      link: "string",
    },
    {
      icon: Star,
      title: "Optimize workflow",
      description: "Streamline my creative process",
      link: "string",
    },
  ];

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
              <div className=" text-xl font-semibold">
                Prompt
                <span className="font-bold text-2xl bg-gradient-to-r from-[#00BCFF] to-blue-500 bg-clip-text text-transparent">
                  AI
                </span>
              </div>
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
              {[].map((chat, index) => (
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
                <User className="w-5 h-6" />
              </div>
              <span className="text-sm">Jay Patel</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4  bg-white dark:bg-[#212121]  dark:text-white">
            <div className="flex items-center">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors dark:bg-[#212121] bg-gray-200 dark:text-white"
                >
                  <Menu className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Only show upgrade button when no messages */}
            {messagesList.length === 0 && (
              <div className="flex-1 flex justify-center">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-[#00BCFF] to-blue-500 px-4 py-2 rounded-lg transition-colors hover:opacity-90 cursor-pointer">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Upgrade your plan</span>
                </button>
              </div>
            )}

            {/* Home and Settings icons - always visible on the right */}
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
          <div className="flex-1 flex flex-col dark:bg-[#212121] dark:text-white overflow-hidden relative">
            {/* Top fade overlay - only visible when there are messages and content is scrolled */}
            {messagesList.length > 0 && (
              <div
                className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-[#212121] to-transparent pointer-events-none z-10 opacity-0 transition-opacity duration-300"
                id="topFade"
              ></div>
            )}
            <div
              className="flex-1 overflow-y-auto p-4"
              onScroll={(e) => {
                const scrollTop = e.currentTarget.scrollTop;
                const fadeElement = document.getElementById("topFade");
                if (fadeElement) {
                  fadeElement.style.opacity = scrollTop > 20 ? "1" : "0";
                }
              }}
            >
              {/* Conditional rendering */}
              {messagesList.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto text-center">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 dark:bg-[#212121]  dark:text-white w-full">
                    {project.map((item, index) => (
                      <button
                        key={index}
                        className="flex items-start space-x-3 p-4  hover:bg-gray-50 border rounded-xl transition-colors text-left shadow-sm dark:shadow-gray-400 dark:bg-[#212121] dark:text-white dark:hover:bg-gray-400/10"
                      >
                        <item.icon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 " />
                        <div>
                          <h3 className="font-medium mb-1 text-gray-800 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-4 max-w-4xl mx-auto w-full">
                  {messagesList.map((msg, idx) => (
                    <div key={idx} className="w-full">
                      <div
                        className={`p-2.5 rounded-xl max-w-[70%] inline-block break-words text-sm ${
                          msg.sender === "user"
                            ? "text-black dark:bg-gray-200/10 bg-gray-400/10 dark:text-white ml-auto"
                            : "  dark:text-white text-black relative pr-12"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                        {msg.sender === "ai" && (
                          <div className="flex items-center space-x-2 absolute  scrollbarwidth-none  -right-15">
                            <button
                              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded cursor-pointer"
                              onClick={() =>
                                navigator.clipboard.writeText(msg.text)
                              }
                              title="Copy"
                            >
                              <CopyIcon size={16} />
                            </button>
                            <button
                              className="p-1 text-gray-400 hover:text-green-500/50 transition-colors rounded cursor-pointer"
                              title="Like"
                            >
                              <ThumbsUp size={16} />
                            </button>
                            <button
                              className="p-1 text-gray-400 hover:text-red-500/50 transition-colors rounded cursor-pointer"
                              title="Dislike"
                            >
                              <ThumbsDown size={16} />
                            </button>
                            <button
                              className="p-1 text-gray-400 dark:hover:text-white hover:text-gray-600 bg-transition-colors rounded cursor-pointer"
                              title="Retry"
                            >
                              <RotateCcw size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 dark:border-gray-700 bg-white dark:bg-[#212121] dark:text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end bg-white transition-colors shadow-sm px-2 dark:bg-[#303030] dark:text-white border rounded-2xl">
                {/* Plus icon */}
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors dark:bg-[#303030] dark:text-white mb-1">
                  <Plus className="w-5 h-5 dark:text-white" />
                </button>

                {/* Textarea */}
                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handlechat();
                    }
                  }}
                  placeholder="Ask anything"
                  className="flex-1 bg-transparent outline-none resize-none px-2 text-gray-900 dark:bg-[#303030] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 min-h-[40px] py-3 leading-5 overflow-hidden"
                  rows={1}
                  style={{ height: "auto" }}
                />

                {/* Icons on the right */}
                <div className="flex items-center space-x-3 pr-2 mb-1.5">
                  <button className="text-gray-500 hover:text-gray-400 dark:hover:text-gray-300 transition-colors">
                    <Mic className="w-5 h-5 cursor-pointer" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className={`p-2 rounded-lg transition-colors ${
                      message.trim()
                        ? "bg-gray-200 dark:bg-gray-400/20 text-black hover:bg-gray-300 dark:hover:bg-gray-400/10"
                        : "cursor-not-allowed text-gray-400"
                    }`}
                  >
                    <Send className="w-4 h-4 dark:text-white cursor-pointer" />
                  </button>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-gray-500 dark:text-white text-center mt-3">
                PromptAI can make mistakes. Check important info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
