'use client'

import './styles.css'

interface CartridgeProps {
  title: string
  description: string
  tags: string[]
  isHovered?: boolean
  onHover?: () => void
  onUnhover?: () => void
}

export default function Cartridge({
  title,
  description,
  // tags,
  isHovered = false,
  onHover,
  onUnhover
}: CartridgeProps) {
  return (
    <div
      className="cartridge-wrapper"
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
    >
      <div className="cartridge-container">
        {/* Notch with pins */}
        <div className="cartridge-notch">
          <div className="circuit-pins">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="circuit-pin" />
            ))}
          </div>
        </div>

        <div className={`cartridge-label ${isHovered ? 'hidden' : 'visible'}`}>
          <span>{title}</span>
          {/* <div className="cartridge-tags">
            {tags.map((tag, i) => (
              <span key={i} className="cartridge-tag">{tag}</span>
            ))}
          </div> */}
        </div>

        <div className={`cartridge-preview ${isHovered ? 'visible' : 'hidden'}`}>
          {/* <span className="cartridge-title">{title}</span> */}
          {isHovered && <span className="cartridge-description">{description}</span>}
        </div>
      </div>
    </div>
  )
}
