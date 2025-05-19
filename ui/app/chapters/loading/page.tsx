'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingScreen() {
  const [dots, setDots] = useState('');
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 400);

    const timeout = setTimeout(() => {
      router.push('/chapters');
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-[Press_Start_2P] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-5xl mb-6">🕹️ THE SANDBOX</h1>
      <p className="text-sm md:text-base">Insert cartridge{dots}</p>
    </div>
  );
}
