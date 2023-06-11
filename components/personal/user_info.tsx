// pages/profile.tsx

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is not logged in, redirect to login page
    if (!session && !loading) {
      router.push('/login');
    }
  }, [session, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null; // Or display an appropriate message
  }

  return (
    <div>
      <h2>Welcome, {session.user.name}</h2>
      <p>Email: {session.user.email}</p>
      {/* Display other profile information */}
    </div>
  );
};

export default ProfilePage;
