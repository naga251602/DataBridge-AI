import { useState } from "react";

export default function ChatPanel() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!query.trim()) return;
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setMessages([...messages, { user: query, ai: data.reply }]);
    setQuery("");
  };

  return (
    <div className="flex flex-col p-6 w-full max-w-2xl mx-auto space-y-4">
      <div className="flex-1 overflow-y-auto border rounded p-4 bg-gray-50 h-96">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <p className="text-blue-600 font-medium">User: {m.user}</p>
            <p className="text-gray-700">AI: {m.ai}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask Aistora..."
          className="flex-1 border p-2 rounded"
        />

        <button
          onClick={handleSend}
          className="bg-black text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
