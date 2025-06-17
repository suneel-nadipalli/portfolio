'use client';

import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroAnimationProps) {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = '🕹️ Welcome to The Sandbox';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 600);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, onComplete]);

  return (
    <div className={`fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out 
      ${isComplete ? 'scale-75 top-16 left-1/2 translate-x-[-50%] translate-y-0 opacity-0' : 'scale-100 opacity-100'}
    `}>
      <h1 className="text-green-400 text-5xl vt323-font tracking-widest animate-fade-blink">
        {typedText}
      </h1>
    </div>
  );
}
