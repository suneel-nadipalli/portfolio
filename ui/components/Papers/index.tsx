'use client'

import { papers } from './data'
import Disc from '../Disc'
import './styles.css'

export default function Papers() {
  return (
    <section className="casefile-container" data-watermark="[ P A P E R S ]">
      <div className="casefile-tab">Papers</div>

      <div className="papers-stream-grid">
        {papers.map((paper, index) => (
          <Disc
            key={index}
            title={paper.title}
            // description={paper.description}
            tags={paper.tags}
          />
        ))}
      </div>
    </section>
  )
}
