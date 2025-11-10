import { useState } from "react";

export default function UploadPanel({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [table, setTable] = useState("");
  const [msg, setMsg] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !table) return setMsg("Missing file or table name.");
    const form = new FormData();
    form.append("file", file);
    form.append("table", table);
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/upload", {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    setMsg(data.message);
    onUploaded && onUploaded(data.message);
  };

  return (
    <div className="p-6 flex flex-col items-center space-y-3">
      <h2 className="text-xl font-semibold">Upload CSV File</h2>
      <input
        type="text"
        placeholder="Table name"
        className="border p-2 rounded"
        onChange={(e) => setTable(e.target.value)}
      />
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={handleUpload}
        className="bg-black text-white p-2 rounded"
      >
        Upload
      </button>
      {msg && <p className="text-green-600">{msg}</p>}
    </div>
  );
}
