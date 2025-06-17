'use client';

import { useState } from 'react';
import Cartridge from '@/components/Cartridge';
import { cartridgeData } from './data';

export default function TestPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-green-400 vt323-font flex flex-col items-center px-6 py-20 space-y-10">
      <h1 className="text-3xl md:text-5xl tracking-widest">Cartridge Test</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4">
        {cartridgeData.map((c, i) => (
          <Cartridge
            key={i}
            label={c.label}
            href={c.href}
            description={c.description}
            isHovered={i === hoveredIndex}
            onHover={() => setHoveredIndex(i)}
            onUnhover={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </main>
  );
}
