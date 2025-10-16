"use client";
import React, { useState } from "react";

interface Message {
  from: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "👋 Hi there! I'm PawBot — your friendly pet assistant! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // ✅ Send message to API route
  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = { from: "user", text };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const newBotReply: Message = {
        from: "bot",
        text: data.reply || "⚠️ Sorry, I couldn’t understand that.",
      };

      setMessages((prev) => [...prev, newBotReply]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Error connecting to AI. Please try again later." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-teal-700 transition-all flex items-center justify-center"
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center bg-teal-600 text-white px-4 py-3 rounded-t-2xl">
            <h3 className="font-semibold text-lg">PawBot 🐾</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl hover:text-gray-200"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                    msg.from === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-500 text-sm italic">PawBot is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-gray-200 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage(input);
              }}
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-teal-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-teal-700 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
