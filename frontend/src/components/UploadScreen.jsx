import React from "react";
import {
  Database,
  LogOut,
  UploadCloud,
  FolderUp,
  GitBranch,
  Sparkles,
  Brain,
  FileText,
  Link2,
  Table,
} from "lucide-react";

export default function UploadScreen({ onBack, onGoChat }) {
  return (
    <section className="flex-1 flex flex-col lg:flex-row overflow-hidden">
      {/* Left upload panel */}
      <div className="w-full lg:w-2/5 border-r border-slate-100 p-6 space-y-6 bg-slate-50 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="text-sky-600 w-4 h-4" />
            <h2 className="text-sm font-semibold text-slate-800">
              CSV Database Uploader
            </h2>
          </div>
          <button
            onClick={onBack}
            className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <label className="block text-slate-600">Database name</label>
          <input
            type="text"
            placeholder="student_analytics_db"
            className="w-full p-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
          />
          <p className="text-[11px] text-slate-400">
            This logical database will contain tables created from your CSV
            files.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-slate-600 font-medium flex items-center gap-2">
            <UploadCloud className="text-sky-500 w-4 h-4" />
            Upload CSV files
          </p>
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center bg-white hover:bg-slate-50 cursor-pointer"
          >
            <FolderUp className="text-sky-500 w-6 h-6 mb-2" />
            <p className="text-xs text-slate-600">Drop CSV files here</p>
            <p className="text-[11px] text-slate-400">or click to browse</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".csv"
            multiple
            className="hidden"
          />
          <p className="text-[11px] text-slate-400">
            Each CSV will map to a table name you specify.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-slate-600 font-medium flex items-center gap-2">
            <GitBranch className="text-emerald-500 w-4 h-4" />
            Relationship detection
          </p>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs bg-slate-900 text-slate-50 hover:bg-slate-800 transition">
            <Sparkles className="w-3.5 h-3.5" />
            Detect relationships (mock)
          </button>
          <p className="text-[11px] text-slate-400">
            In a real app this would inspect columns and infer foreign keys
            between tables.
          </p>
        </div>

        <button
          onClick={onGoChat}
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs bg-sky-600 text-white hover:bg-sky-700 transition"
        >
          <Brain className="w-3.5 h-3.5" /> Save mapping and open AI chat
        </button>
      </div>

      {/* Right mock display */}
      <div className="flex-1 p-6 bg-white overflow-y-auto text-xs">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-slate-700 flex items-center gap-2">
            <Table className="text-sky-500 w-4 h-4" /> Uploaded files and table
            mapping
          </p>
          <span className="text-[11px] text-slate-400">Static mock data</span>
        </div>

        <div className="space-y-3">
          {["students.csv", "courses.csv"].map((file, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center justify-between gap-3 border border-slate-100 rounded-2xl px-3 py-2.5 bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <FileText
                  className={`${
                    i === 0 ? "text-sky-500" : "text-emerald-500"
                  } w-4 h-4`}
                />
                <div>
                  <p className="text-slate-700 text-xs font-medium">{file}</p>
                  <p className="text-[11px] text-slate-400">
                    {i === 0 ? "245 rows, 6 columns" : "40 rows, 4 columns"}{" "}
                    (sample)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Table</span>
                <input
                  type="text"
                  defaultValue={i === 0 ? "students" : "courses"}
                  className="w-28 p-1.5 border border-slate-200 rounded-lg text-[11px] focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>
          ))}

          <div className="mt-2 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/70 px-3 py-2.5 flex items-start gap-2">
            <Link2 className="text-emerald-500 w-4 h-4 mt-[2px]" />
            <div>
              <p className="text-[11px] text-emerald-800 font-medium">
                Suggested relationship (mock)
              </p>
              <p className="text-[11px] text-emerald-700">
                <span className="font-semibold">students.course_id</span> looks
                like a foreign key referencing{" "}
                <span className="font-semibold">courses.id</span>.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 pt-2">
          This panel is static mock data. Wire it to your backend to populate
          from real CSV uploads.
        </p>
      </div>
    </section>
  );
}
