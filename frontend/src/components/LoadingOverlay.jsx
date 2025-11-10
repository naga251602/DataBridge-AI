import React from "react";

export default function LoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-sky-500 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:100ms]"></div>
          <div className="w-2 h-2 rounded-full bg-sky-300 animate-bounce [animation-delay:200ms]"></div>
        </div>
        <p className="text-xs text-slate-600">
          Spinning up your AI chat workspace…
        </p>
      </div>
    </div>
  );
}
