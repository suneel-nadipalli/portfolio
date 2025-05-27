'use client';

import { useState, useRef, useEffect } from 'react';
import { backgroundTree } from './data';
import './background.css';

type Token = {
  id: string;
  icon: string;
  title: string;
  content: string;
  parentIds: string[];
};

export default function BackgroundSkillTreePage() {
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set(['gamer']));
  const [coins, setCoins] = useState(11);
  const [previewToken, setPreviewToken] = useState<Token | null>(null);
  const tokenRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [lines, setLines] = useState<
    { from: string; to: string; x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  const handleUnlockAll = () => {
    const allIds = backgroundTree.flatMap(section =>
      section.tiers.flatMap(tier => tier.map(token => token.id))
    );
    setUnlocked(new Set(allIds));
  };

  const handleUnlockToken = (tokenId: string, parentIds: string[] = []) => {
    const hasAllParentsUnlocked = parentIds.every(pid => unlocked.has(pid));
    if (!unlocked.has(tokenId) && coins > 0 && hasAllParentsUnlocked) {
      setUnlocked(prev => new Set(prev).add(tokenId));
      setCoins(prev => prev - 1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newLines: typeof lines = [];

      backgroundTree.forEach(section =>
        section.tiers.flat().forEach(token => {
          const childEl = tokenRefs.current[token.id];
          const isChildUnlocked = unlocked.has(token.id);
          if (!childEl || !isChildUnlocked || !token.parentIds?.length) return;

          token.parentIds.forEach(parentId => {
            const parentEl = tokenRefs.current[parentId];
            const isParentUnlocked = unlocked.has(parentId);
            if (!parentEl || !isParentUnlocked) return;

            const parentRect = parentEl.getBoundingClientRect();
            const childRect = childEl.getBoundingClientRect();

            newLines.push({
              from: parentId,
              to: token.id,
              x1: parentRect.left + parentRect.width / 2 + window.scrollX,
              y1: parentRect.top + parentRect.height / 2 + window.scrollY,
              x2: childRect.left + childRect.width / 2 + window.scrollX,
              y2: childRect.top + childRect.height / 2 + window.scrollY,
            });
          });
        })
      );

      setLines(newLines);
    }, 100);

    return () => clearTimeout(timeout);
  }, [unlocked]);

  return (
    <div className="skilltree-container">
      <div className="coin-tally">
        🪙 <span>{coins}</span>
      </div>

      <svg className="skilltree-lines">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#00FF7F"
            strokeWidth="2.5"
            strokeOpacity="0.9"
          />
        ))}
      </svg>

      <h1 className="skilltree-title">🧠 The Sandbox Skill Tree</h1>

      <div className="skilltree-flex-wrapper">
        <div className={`skilltree-grid ${previewToken ? 'shift-left' : ''}`}>
          {backgroundTree.map(section => (
            <div key={section.id} className="skilltree-section">
              <div className="skilltree-section-title">
                {section.icon} {section.label}
                <div className="skilltree-underline" />
              </div>

              {section.tiers.map((tier, i) => (
                <div key={i} className="skilltree-tier">
                  {tier.map(token => {
                    const isUnlocked = unlocked.has(token.id);
                    const canUnlock =
                      coins > 0 && token.parentIds.every(pid => unlocked.has(pid));

                    return (
                      <div
                        key={token.id}
                        ref={el => {
                          tokenRefs.current[token.id] = el;
                        }}
                        onMouseEnter={() => setPreviewToken(token)}
                        onMouseLeave={() => setPreviewToken(null)}
                        onClick={() => handleUnlockToken(token.id, token.parentIds)}
                        className={`skilltree-token ${
                          isUnlocked
                            ? 'unlocked'
                            : canUnlock
                            ? 'can-unlock'
                            : 'locked'
                        }`}
                      >
                        <div className="token-icon">{token.icon}</div>
                        <div className="token-title">{token.title}</div>
                        {!isUnlocked && (
                          <div className="token-locked-label">
                            🔒 {canUnlock ? '1🪙' : 'Locked'}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {previewToken && (
          <div className="side-preview-panel">
            <div className="side-preview-title">
              {previewToken.icon} {previewToken.title}
            </div>
            <div className="side-preview-content">
              {unlocked.has(previewToken.id)
                ? previewToken.content
                : '🔒 This skill is locked.'}
            </div>
          </div>
        )}
      </div>

      <div className="unlock-all-container">
        <button onClick={handleUnlockAll} className="unlock-all-button">
          🔓 Unlock All
        </button>
      </div>
    </div>
  );
}
