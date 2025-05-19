'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => router.push('/chapters/loading'), 1000); // ⬅️ changed route
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-green-400 vt323-font">
      <h1 className="text-3xl md:text-5xl mb-10 tracking-widest animate-pulse">
        🕹️ Welcome to The Sandbox
      </h1>

      <div className="space-y-4 text-xl md:text-2xl">
        <button
          onClick={handleStart}
          className="bg-transparent border-2 border-green-400 px-6 py-2 hover:bg-green-700 transition-all"
        >
          ▶️ Start New Game
        </button>

        <button className="bg-transparent border-2 border-green-400 px-6 py-2 hover:bg-green-700 transition-all">
          ⏩ Continue
        </button>

        <button className="bg-transparent border-2 border-green-400 px-6 py-2 hover:bg-green-700 transition-all">
          ⚙️ Settings
        </button>
      </div>

      {isStarting && (
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center text-4xl animate-fade">
          Loading...
        </div>
      )}
    </main>
  );
}
