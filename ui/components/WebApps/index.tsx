// app/webapps/index.tsx
'use client'

import { useState } from 'react'
import { webapps } from './data'
import Cartridge from '../Cartridge'
import './styles.css'

export default function WebApps() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="casefile-container" data-watermark="[ W E B A P P S ]">
      <div className="casefile-tab">WebApps</div>

      <div className="webapps-stream-grid">
        {webapps.map((app, index) => (
          <Cartridge
            key={index}
            title={app.title}
            description={app.description}
            tags={app.tags}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onUnhover={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  )
}

