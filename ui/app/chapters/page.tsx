'use client';

import { useEffect, useState } from 'react';
import Cartridge from '@/components/Cartridge';
import { chapters } from './data';
import { useRouter } from 'next/navigation';

const COLUMN_COUNT = 3;

export default function ChapterSelect() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const activeIndex = hoveredIndex ?? selectedIndex;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setSelectedIndex(prev => (prev + 1) % chapters.length);
        setHoveredIndex(null); // clear hover
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex(prev => (prev - 1 + chapters.length) % chapters.length);
        setHoveredIndex(null);
      } else if (e.key === 'ArrowDown') {
        setSelectedIndex(prev => Math.min(prev + COLUMN_COUNT, chapters.length - 1));
        setHoveredIndex(null);
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex(prev => Math.max(prev - COLUMN_COUNT, 0));
        setHoveredIndex(null);
      } else if (e.key === 'Enter') {
        router.push(chapters[selectedIndex].href);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, router]);

  return (
    <main className="min-h-screen bg-black text-green-400 vt323-font flex flex-col items-center px-6 py-20 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl">🎮 THE SANDBOX</h1>
        <p className="text-3xl opacity-80">Select a cartridge to load</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {chapters.map((c, i) => (
          <Cartridge
            key={i}
            label={c.label}
            href={c.href}
            description={c.description}
            isSelected={i === activeIndex}
            isHovered={i === hoveredIndex}
            onHover={() => setHoveredIndex(i)}
            onUnhover={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </main>
  );
}
