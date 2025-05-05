"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { getCurrentPage } from "@/utils/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = getCurrentPage(pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </Button>
      <aside className={`w-64 bg-white border-r p-4 fixed md:static inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}>
        <div className="mb-8">
          <Image src="/logo.png" alt="LMH Communication Logo" width={150} height={50} />
        </div>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className={`justify-start ${currentPage === "Home" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/")}>Home</Button>
          <Button variant="ghost" className={`justify-start ${currentPage === "Program Data" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/program-data")}>Program Data</Button>
          <Button variant="ghost" className={`justify-start ${currentPage === "View Report" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/view-report")}>View Report</Button>
          <Button variant="ghost" className={`justify-start ${currentPage === "Event Calendar" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/event-calendar")}>Event Calendar</Button>
          <Button variant="ghost" className={`justify-start ${currentPage === "Speaker Directory" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/speaker-directory")}>Speaker Directory</Button>
          <Button variant="ghost" className={`justify-start ${currentPage === "Program Library" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/program-library")}>Program Library</Button>
          <Button variant="ghost" className={`justify-start ${currentPage === "Resource Docs" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/resource-docs")}>Resource Docs</Button>
        </nav>
      </aside>
    </>
  );
} 