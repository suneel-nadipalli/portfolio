'use client';

import React from 'react';
import './styles.css';

type Variant = 'filled' | 'transparent' | 'glass';

interface SectionWrapperProps {
  title?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({
  title,
  variant = 'transparent',
  children,
  className = ''
}: SectionWrapperProps) {
  return (
    <section className={`section-wrapper ${variant} ${className}`}>
      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
}
