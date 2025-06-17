'use client';

import { useState } from 'react';
import Intro from '@/components/Intro';
import Bio from '@/components/Bio';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import WebApps from '@/components/WebApps';
import Papers from '@/components/Papers';

export default function HomePage() {
  const [showMain, setShowMain] = useState(false);

return (
  <main className="min-h-screen bg-black text-green-400 vt323-font relative">
    {!showMain && <Intro onComplete={() => setShowMain(true)} />}

    {showMain && (
      <>
        <NavBar />

        <div className="flex flex-col items-center px-4 py-8 space-y-12">
          <div className="text-5xl tracking-wide text-center font-bold">
            🕹️ Welcome to The Sandbox
          </div>

          {/* Small intro section */}
          <p className="text-lg text-green-300 opacity-80 max-w-xl text-center mt-4">
            A retro-themed vault of experiments, ideas, and intelligent creations.
          </p>

          {/* Bio component */}
          <Bio />

          {/* Projects section */}
          <Projects />

          {/* WebApps section */}
          <WebApps />

          {/* Papers section */}
          <Papers />

        </div>
      </>
    )}
  </main>
);

}
