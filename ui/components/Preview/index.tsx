'use client';

import React from 'react';
import './styles.css';

interface PreviewCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function PreviewCard({ title, description, tags }: PreviewCardProps) {
  return (
    <div className="cartridge-shell">
      <div className="cartridge-fill">
        <div className="cartridge-bridge" />
        <div className="cartridge-content">
          <h3 className="cartridge-title">{title}</h3>
          <p className="cartridge-description">{description}</p>
          <div className="cartridge-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="cartridge-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}