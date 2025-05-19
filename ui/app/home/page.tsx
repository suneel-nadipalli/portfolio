'use client';

import HeroBanner from '@/components/HeroBanner';

export default function HomePage() {

  return (
    <main className="min-h-screen font-vt323 text-green-200">
      {/* 🔆 Hero Banner */}
      <HeroBanner />

      {/* 👇 Placeholder for about section */}

      {/* 👇 Placeholder for timeline section */}
      <section className="px-6 py-20 bg-black text-white">
        <h2 className="text-3xl mb-10 text-center">My Journey</h2>
        {/* We'll fill this out in Step 2 */}
      </section>
    </main>
  );
}
