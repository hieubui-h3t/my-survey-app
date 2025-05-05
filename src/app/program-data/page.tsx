"use client";

import Survey from "@/components/Survey";
import Sidebar from "@/components/sidebar";

export default function ProgramData() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">Program Data</h1>
        <Survey />
      </div>
    </div>
  );
} 