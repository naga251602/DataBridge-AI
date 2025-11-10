import React, { useState } from "react";
import { Database, ShieldCheck, Sparkles } from "lucide-react";
import AuthScreen from "./components/AuthScreen";
import UploadScreen from "./components/UploadScreen";
import ChatScreen from "./components/ChatScreen";
import LoadingOverlay from "./components/LoadingOverlay";

export default function App() {
  const [screen, setScreen] = useState("auth"); // auth | upload | chat
  const [loading, setLoading] = useState(false);

  const navigateTo = (target) => setScreen(target);

  const handleGoChat = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScreen("chat");
    }, 700);
  };

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white/90 backdrop-blur z-20">
        <div className="flex items-center gap-2">
          <Database className="text-sky-600 w-5 h-5" />
          <span className="font-semibold text-lg tracking-tight">
            TableTalk
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Secure mock
          </span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Demo UI
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col h-0 relative">
        {loading && <LoadingOverlay />}
        {screen === "auth" && (
          <AuthScreen onNext={() => navigateTo("upload")} />
        )}
        {screen === "upload" && (
          <UploadScreen
            onBack={() => navigateTo("auth")}
            onGoChat={handleGoChat}
          />
        )}
        {screen === "chat" && (
          <ChatScreen onBack={() => navigateTo("upload")} />
        )}
      </main>
    </div>
  );
}
