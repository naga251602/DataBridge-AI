import React, { useState } from "react";
import { Database, GitBranch, Bot, LogIn } from "lucide-react";

export default function AuthScreen({ onNext }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <section className="flex-1 flex flex-col md:flex-row overflow-auto">
      {/* Left side */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50 p-10">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Welcome to TableTalk</h1>
          <p className="text-slate-300 text-sm">
            Upload CSVs, detect relationships, and chat with your data using AI.
          </p>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Database className="text-emerald-300 w-4 h-4" />
            <span>Multiple CSVs to one database</span>
          </div>
          <div className="flex items-center gap-2">
            <GitBranch className="text-sky-300 w-4 h-4" />
            <span>Relationship detection (mock)</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="text-violet-300 w-4 h-4" />
            <span>AI chat analysis</span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-semibold text-slate-800">
              {isSignup ? "Create account" : "Login"}
            </h2>
            <p className="text-xs text-slate-500">
              {isSignup
                ? "Mock registration for demo only."
                : "Mock login to continue."}
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={onNext}
              className="w-full p-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>{isSignup ? "Sign up" : "Login"}</span>
            </button>
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="w-full p-3 border border-slate-200 bg-slate-50 text-slate-700 rounded-xl hover:bg-slate-100 transition text-xs"
            >
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <span className="font-medium">Login</span>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <span className="font-medium">Create one</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[11px] text-slate-400 text-center">
            No real authentication – this is just for layout and flow.
          </p>
        </div>
      </div>
    </section>
  );
}
