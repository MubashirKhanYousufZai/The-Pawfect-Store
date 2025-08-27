"use client";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

// 1. Define the Message type
type Message = {
  from: "bot" | "user";
  text: string;
};

// 2. Define the props for your components
// This is a good practice to make the code more readable and reusable
interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

interface MessageListProps {
  messages: Message[];
}

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

/**
 * ChatBot Component
 * A complete, professional chat widget with an improved UI and structured code.
 */
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  // Type the initial state with the Message type array
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi there! I'm your assistant. How can I help you?" },
  ]);

  const handleSendMessage = (text: string) => {
    // Prevent sending empty messages
    if (!text.trim()) return;

    // Simulate sending a message and receiving a reply
    const newUserMessage: Message = { from: "user", text: text };
    const newBotReply: Message = { from: "bot", text: "This is a fake reply 😅" };

    setMessages((prevMessages) => [...prevMessages, newUserMessage, newBotReply]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <div
        className={clsx(
          "transition-all duration-300 ease-in-out transform",
          "origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none",
          "w-80 md:w-96",
          "bg-white shadow-xl rounded-lg border border-gray-200",
          "flex flex-col overflow-hidden"
        )}
      >
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} setIsOpen={setIsOpen} />
      </div>

      {/* Bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-teal-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.339-3.182A9.957 9.957 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
}

// --- Sub-components with typed props ---

/**
 * Chat Window
 * Contains the header, message list, and input field.
 */
const ChatWindow = ({ messages, onSendMessage, setIsOpen }: ChatWindowProps) => {
  return (
    <>
      {/* Header */}
      <div className="bg-teal-600 text-white p-4 flex items-center justify-between rounded-t-lg shadow-sm">
        <h3 className="font-semibold text-lg">Chat with us</h3>
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Message List */}
      <MessageList messages={messages} />

      {/* Message Input */}
      <MessageInput onSendMessage={onSendMessage} />
    </>
  );
};

/**
 * Message List
 * Displays the chat messages and scrolls to the bottom on new messages.
 */
const MessageList = ({ messages }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={clsx(
            "p-3 rounded-lg max-w-[85%]",
            "shadow-sm",
            msg.from === "bot"
              ? "bg-white text-gray-800 self-start mr-auto border border-gray-200"
              : "bg-teal-600 text-white self-end ml-auto"
          )}
        >
          {msg.text}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

/**
 * Message Input
 * Handles user input and sending messages.
 */
const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-3 border-t border-gray-200">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 p-3 text-sm rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors **text-gray-800**"
      />
      <button
        type="submit"
        className="bg-teal-600 text-white px-5 rounded-r-lg transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 00.99 1.472h13.988a1 1 0 00.99-1.472l-7-14z"></path>
        </svg>
      </button>
    </form>
  );
};