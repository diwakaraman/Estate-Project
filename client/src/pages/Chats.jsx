// src/pages/Chats.jsx
import React, { useState } from "react";
import { Send, User } from "lucide-react";

const Chats = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋", sender: "bot" },
    { id: 2, text: "Hello! How are you?", sender: "me" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage = { id: Date.now(), text: input, sender: "me" };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 py-3 text-lg font-semibold shadow-md">
        Chat Room
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "me" && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <User size={18} />
              </div>
            )}
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs shadow-sm ${
                msg.sender === "me"
                  ? "bg-indigo-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chats;
