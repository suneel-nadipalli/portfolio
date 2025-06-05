'use client';

import { useState } from 'react';
import './background.css';
import { sectionData, coreSkillsData, otherToolsList } from './data';
import NavBar from '@/components/NavBar';

type TabKey = 'Background' | 'Skills';

export default function BackgroundPage() {
  const tabs: TabKey[] = ['Background', 'Skills'];
  const [activeTab, setActiveTab] = useState<TabKey>('Background');
  const [showOtherTools, setShowOtherTools] = useState(false);

  return (
    <div className="terminal-container">
      <NavBar />
      <div className="terminal-window">
        <div className="page-title">Casefile: The Sandbox Architect</div>

        <div className="tab-header lowered-tabs">
          {tabs.map(tab => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="terminal-content">
          {activeTab === 'Background' && (
            <div className="background-grid">
              <div className="profile-details">
                {sectionData.Background.map((item, i) => (
                  <div key={i}>
                    <span className="label">{item.label}:</span> {item.value}
                  </div>
                ))}
                <div className="blinking-cursor">▌</div>
              </div>

              <div className="profile-pic-box">
                <span>[Profile Image Placeholder]</span>
              </div>
            </div>
          )}

          {activeTab === 'Skills' && (
            <div className="skills-tab">
              {coreSkillsData.map((group, i) => (
                <div key={i} className="skill-category">
                  <div className="category-title">{group.category}</div>
                  <div className="skill-grid">
                    {group.skills.map((skill, j) => (
                      <div key={j} className="skill-badge">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="other-tools-toggle" onClick={() => setShowOtherTools(prev => !prev)}>
                🧰 Other Tools & Languages {showOtherTools ? '▲' : '▼'}
              </div>

              {showOtherTools && (
                <div className="skill-category">
                  <div className="skill-grid">
                    {otherToolsList.map((tool, i) => (
                      <div key={i} className="skill-badge other">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="blinking-cursor">▌</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
