'use client'
import { useState } from 'react'
import BackgroundTab from './Background'
import SkillsTab from './Skills'
import './styles.css'

type Tab = 'Bio' | 'Skills'

export default function Bio() {
  const [activeTab, setActiveTab] = useState<Tab>('Bio')
  const tabs: Tab[] = ['Bio', 'Skills']

  return (
    <section className="casefile-container" data-watermark={`[ ${activeTab.toUpperCase()} ]`}>
      <div className="casefile-tab">BACKGROUND</div>

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
        {activeTab === 'Bio' && <BackgroundTab />}
        {activeTab === 'Skills' && <SkillsTab />}
      </div>
    </section>
  )
}
