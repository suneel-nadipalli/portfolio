'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { paperData } from './data';
import './papers.css';

type Paper = {
  title: string;
  abstract: string;
  link: string;
};


export default function PapersSection() {
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  const toggleFolder = (folder: string) => {
    setSelectedPaper(null);
    setExpandedFolder(expandedFolder === folder ? null : folder);
  };

  return (
    <div className="papers-terminal">
      <h2 className="papers-heading">📁 Casefile: Research Papers</h2>

      <div className="papers-folder-grid">
        {Object.entries(paperData).map(([folder, papers]) => (
          <div key={folder} className="folder-block">
            <div
              className={`folder-icon ${expandedFolder === folder ? 'open' : ''}`}
              onClick={() => toggleFolder(folder)}
            >
              <Icon icon="mdi:folder" className="icon" />
              <span className="folder-label">{folder}</span>
            </div>

            {expandedFolder === folder && (
              <div className="file-list">
                {papers.map((paper, idx) => (
                  <div
                    key={idx}
                    className={`file-entry ${selectedPaper === paper ? 'active' : ''}`}
                    onClick={() => setSelectedPaper(paper)}
                  >
                    <Icon icon="mdi:file-document-outline" className="file-icon" />
                    <span>{paper.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedPaper && (
        <div className="paper-details">
          <h3>{selectedPaper.title}</h3>
          <p>{selectedPaper.abstract}</p>
          <a href={selectedPaper.link} target="_blank" rel="noopener noreferrer">
            View Full Paper ↗
          </a>
        </div>
      )}
    </div>
  );
}
