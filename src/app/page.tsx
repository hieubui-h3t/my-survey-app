"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import '@/config/cognito';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check for existing session on component mount
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        router.push('/dashboard'); // Redirect to dashboard if user is already signed in
      }
    } catch (err) {
      // No existing session, stay on login page
      console.log('No existing session');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      
      if (isSignedIn) {
        router.push('/dashboard'); // Redirect to dashboard after successful login
      } else if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        router.push('/confirm-signup'); // Redirect to confirmation page if needed
      }
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('already a signed in user')) {
          router.push('/dashboard'); // Redirect to dashboard if user is already signed in
        } else {
          setError(err.message);
        }
      } else {
        setError('An error occurred during sign in');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/forest-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" />
      </div>

      {/* Left text */}
      <div className="flex-1 flex flex-col justify-center pl-16 max-w-2xl">
        <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
          Your stories,<br />
          voices,<br />
          and journeys
        </h1>
        <p className="text-white text-lg">
          True stories from patients and caregivers taking us on their journeys, our employees describing their work, and scientists working on the forefront of research.
        </p>
      </div>

      {/* Right card */}
      <div className="flex-1 flex justify-center items-center pr-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
          <div className="flex justify-left mb-4">
            <Image src="/logo.png" alt="L&M Healthcare" width={180} height={40} />
          </div>
          <p className="text-gray-600 mb-6">
            Welcome to the Speakers' Bureau Web Site. This web site has all of the information and resources that Lundbeck Account Managers need to schedule a Speaker Meeting and also includes the information a speaker will need as a member of the Lundbeck Speakers' Bureau.
          </p>
          <form onSubmit={handleSubmit}>
            <label className="block font-semibold mb-1">Enter your information to login</label>
            {error && (
              <div className="mb-4 p-2 text-sm text-red-600 bg-red-50 rounded">
                {error}
              </div>
            )}
            <div className="mb-4">
              <input
                type="text"
                placeholder="User Name"
                className="w-full border rounded-lg px-3 py-2 mt-2"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-3 py-2"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm">Remember Me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg mb-2"
            >
              Login
            </button>
            <div className="text-center">
              <a href="/forgot-password" className="text-teal-600 hover:underline text-sm">Forgot Password</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
