'use client';

import React from 'react';
import './styles.css';

interface DiscProps {
  title: string;
}

export default function Disc({ title }: DiscProps) {
  return (
    <div className="umd-wrapper">
      <div className="umd-disc">
        <div className="umd-disc-ring" />
        <div className="umd-disc-center" />
      </div>
        <div className="umd-label-tape">{title}</div>

    </div>
  );
}
