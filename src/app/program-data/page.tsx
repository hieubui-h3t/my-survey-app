"use client";

import Survey from "@/components/Survey";
import Sidebar from "@/components/sidebar";
import { useCognitoUser } from '@/hooks/useCognitoUser';

export default function ProgramData() {
  const { user, loading } = useCognitoUser();
  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar username={user.signInDetails.loginId} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">Program Data</h1>
        <Survey />
      </div>
    </div>
  );
} 