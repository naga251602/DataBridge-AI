import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";
    fetch(`${apiUrl}/api/health`)
      .then((r) => r.json())
      .then((data) => setStatus(data.status || "error"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-800">
      Aistora Frontend Status: {status}
    </div>
  );
}
