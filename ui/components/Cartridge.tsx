'use client';

import Link from 'next/link';

export default function Cartridge({
  label,
  href,
  description,
  isSelected = false,
  isHovered = false,
  onHover,
  onUnhover,
}: {
  label: string;
  href: string;
  description: string;
  isSelected?: boolean;
  isHovered?: boolean;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const showPreview = isHovered;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
      className="relative"
    >
      <Link href={href} className="group">
        <div
          className={`relative w-56 h-36 bg-gray-800 border-4 rounded-md shadow-md transition transform group-hover:-translate-y-1 group-hover:shadow-xl ${
            isSelected ? 'ring-4 ring-green-400 drop-shadow-[0_0_12px_rgba(0,255,0,0.8)]' : 'border-gray-700'
          }`}
        >
          {/* Notch */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-3 bg-black rounded-t-sm" />

          {/* Default Label */}
          <div
            className={`absolute inset-4 bg-gray-900 border border-gray-700 rounded p-2 flex flex-col justify-center items-center text-center text-green-400 font-mono tracking-wide leading-snug transition-opacity duration-200 ${
              showPreview ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="text-sm md:text-base">{label}</span>
          </div>

          {/* Hover Preview */}
          <div
            className={`absolute inset-4 bg-gray-950 border border-green-700 rounded p-2 flex flex-col justify-center items-center text-center text-green-300 font-mono tracking-tight leading-snug text-xs transition-opacity duration-200 ${
              showPreview ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-sm mb-1">{label}</span>
            <span className="opacity-80">{description}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
