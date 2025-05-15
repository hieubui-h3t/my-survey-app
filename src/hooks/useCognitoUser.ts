import { useEffect, useState } from 'react';
import { getCurrentUser, signOut as cognitoSignOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export function useCognitoUser(redirectTo: string = '/') {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      router.push(redirectTo);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await cognitoSignOut();
      router.push(redirectTo);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return { user, loading, signOut };
} 