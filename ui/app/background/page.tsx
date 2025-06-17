'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import './background.css';
import { bioData, skills } from '../../components/Bio/data';

type TabKey = 'Background' | 'Skills';

export default function BackgroundPage() {
  const tabs: TabKey[] = ['Background', 'Skills'];
  const [activeTab, setActiveTab] = useState<TabKey>('Background');

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        {/* <div className="page-title">Casefile: The Sandbox Architect</div>/ */}

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
                {bioData.Background.map((item, i) => (
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
            <div className="skills-holo-shelves">
            {Object.entries(skills).map(([category, skills]) => (
              <div key={category} className="holo-shelf-row">
                <div className="floating-badge-row">
                  {skills.map(skill => (
                    <div key={skill.label} className="holo-badge">
                      <div className="holo-disc" />
                      <div className="holo-beam" />
                      <Icon icon={skill.icon} className="holo-icon" />
                      <div className="holo-label">{skill.label}</div>
                    </div>
                  ))}
                </div>
                <div className="engraved-label">{category}</div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
