'use client';

import React from 'react';
import './styles.css';

interface SDCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function SDCard({ title, description, tags }: SDCardProps) {
  return (
    <div className="sdcard-shell">
      <div className="sdcard-tab" />
      <div className="sdcard-body">
        <h3 className="sdcard-title">{title}</h3>
        <p className="sdcard-description">{description}</p>
        <div className="sdcard-tags">
          {tags.map((tag, i) => (
            <span className="sdcard-tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}