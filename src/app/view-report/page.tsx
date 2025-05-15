"use client";

import dynamic from 'next/dynamic';
import Sidebar from "@/components/sidebar";
import { useCognitoUser } from '@/hooks/useCognitoUser';

const SurveyCreatorComponent = dynamic(
  () => import('@/components/SurveyCreator'),
  { ssr: false }
);

export default function ViewReport() {
  const { user, loading } = useCognitoUser();
  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar username={user.signInDetails.loginId} />
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
        <div className="bg-white rounded-lg shadow">
          <SurveyCreatorComponent />
        </div>
      </main>
    </div>
  );
} 