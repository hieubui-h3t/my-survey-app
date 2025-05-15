"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { getCurrentPage } from "@/utils/navigation";
import { useState } from "react";
import { signOut } from 'aws-amplify/auth';

export default function Sidebar({ username }: { username: string }) {
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
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "Dashboard" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/dashboard")}>Dashboard</Button>
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "Program Data" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/program-data")}>Program Data</Button>
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "View Report" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/view-report")}>View Report</Button>
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "Event Calendar" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/event-calendar")}>Event Calendar</Button>
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "Speaker Directory" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/speaker-directory")}>Speaker Directory</Button>
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "Program Library" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/program-library")}>Program Library</Button>
          <Button variant="ghost" className={`cursor-pointer justify-start ${currentPage === "Resource Docs" ? "bg-[#0D9488] text-white" : ""}`} onClick={() => router.push("/resource-docs")}>Resource Docs</Button>
        </nav>
        <UserProfileDropdown username={username} />
      </aside>
    </>
  );
}

function UserProfileDropdown({ username }: { username: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const role = "Representative";
  const avatarUrl = "https://api.dicebear.com/7.x/adventurer/svg?seed=lmh_user";

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="absolute bottom-4 left-4 w-[90%] flex flex-col items-start">
      {/* Dropdown menu (opens upward) */}
      {open && (
        <div className="mb-2 w-full bg-white border rounded-lg shadow-lg z-50" style={{ position: 'absolute', bottom: '60px' }}>
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setOpen(false); router.push('/profile'); }}>
            <span className="mr-2">{/* Profile icon */}<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg></span>
            Profile
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setOpen(false); router.push('/playbook'); }}>
            <span className="mr-2">{/* Playbook icon */}<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/></svg></span>
            Launch Playbook
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>
            <span className="mr-2">{/* Logout icon */}<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/><path d="M9 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/></svg></span>
            Log out
          </button>
        </div>
      )}
      {/* Profile section */}
      <div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 relative bg-white" onClick={() => setOpen(!open)}>
        <img src={avatarUrl} alt="avatar" className="w-12 h-12 rounded-full border" />
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 leading-tight truncate text-lg">{username}</div>
          <div className="text-xs text-gray-500 truncate">{role}</div>
        </div>
        <svg className={`w-5 h-5 text-gray-400 transition-transform ${open ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );
} 