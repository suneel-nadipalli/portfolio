'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening' | 'night' | null>(null);

  useEffect(() => {
    // For now, set a fixed time for testing. Replace later with dynamic logic.
    setTimeOfDay('evening');
  }, []);

  const imageMap: Record<string, string> = {
    morning: '/images/banners/bg-morning.png',
    afternoon: '/images/banners/bg-afternoon.png',
    evening: '/images/banners/bg-evening-v4.png', // Use your resized final image
    night: '/images/banners/bg-night.png',
  };

  if (!timeOfDay) return null;

  return (
    <section className="w-full bg-black overflow-hidden flex justify-center">
      <div style={{ width: '100%', maxWidth: '1920px', height: 'auto', position: 'relative' }}>
        <Image
          src={imageMap[timeOfDay || 'evening']}
          alt={`Beach at ${timeOfDay}`}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          style={{
            imageRendering: 'pixelated',
          }}
        />

        {/* Overlay on top of the image */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40 z-10"
          style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'absolute' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to My World
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Exploring balance between creativity & code
          </p>
          <span className="mt-2 text-sm opacity-70">Time: {timeOfDay}</span>
        </div>
      </div>
    </section>
  );
}
