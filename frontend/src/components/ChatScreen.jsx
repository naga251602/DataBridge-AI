import React, { useState } from "react";
import {
  MessageCircle,
  PanelLeftOpen,
  ArrowLeft,
  Network,
  Table,
  GitBranch,
  Send,
} from "lucide-react";

export default function ChatScreen({ onBack }) {
  const [messages, setMessages] = useState([
    { side: "user", text: "Show total students count." },
    {
      side: "ai",
      text: 'The table <b class="text-sky-600">students</b> contains <b class="text-sky-600">245</b> records.',
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { side: "user", text: input };
    const aiMsg = {
      side: "ai",
      text: `Mock response for <b class="text-sky-600">${input}</b>. Wire this to backend.`,
    };
    setMessages((prev) => [...prev, newMsg, aiMsg]);
    setInput("");
  };

  return (
    <section className="flex-1 flex flex-col bg-slate-100 overflow-hidden">
      {/* Chat header */}
      <div className="flex items-center justify-between px-6 py-3 border-b bg-white/90 backdrop-blur shrink-0">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-sky-600 w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-slate-800">
              AI Database Chat
            </p>
            <p className="text-[11px] text-slate-400">
              User → right • AI → left • Schema sidebar available
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="md:hidden text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1">
            <PanelLeftOpen className="w-4 h-4" /> Schema
          </button>
          <button
            onClick={onBack}
            className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
        </div>
      </div>

      {/* Chat thread */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.side === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`bg-${
                msg.side === "user" ? "sky-50" : "slate-50"
              } px-3 py-2.5 text-xs rounded-2xl shadow-sm max-w-[80%]`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <input
          type="text"
          placeholder="Ask your database..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-3 border border-slate-200 rounded-2xl text-xs focus:ring-2 focus:ring-sky-500"
        />
        <button
          onClick={sendMessage}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs bg-sky-600 text-white hover:bg-sky-700 transition"
        >
          <Send className="w-4 h-4" /> Send
        </button>
      </div>
    </section>
  );
}
