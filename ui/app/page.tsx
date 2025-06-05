'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cartridge from '@/components/Cartridge';
import { chapters } from './data';

const COLUMN_COUNT = 3;

export default function HomePage() {
  const fullText = '🕹️ Welcome to The Sandbox';
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const activeIndex = hoveredIndex ?? selectedIndex;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setIsTypingComplete(true), 300); // slight pause before fade
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isTypingComplete) return;

      if (e.key === 'ArrowRight') {
        setSelectedIndex(prev => (prev + 1) % chapters.length);
        setHoveredIndex(null);
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
  }, [selectedIndex, router, isTypingComplete]);

  return (
    <main className="min-h-screen bg-black text-green-400 vt323-font flex flex-col items-center px-6 py-20 space-y-10">
      <h1
        className={`text-3xl md:text-5xl tracking-widest ${
          isTypingComplete ? 'animate-fade-blink' : ''
        }`}
      >
        {typedText}
       
      </h1>

      {isTypingComplete && (
        <>
          <div className="text-xl md:text-2xl opacity-80 -mt-4">📼 Insert a Cartridge</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4">
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
        </>
      )}
    </main>
  );
}
