import { skills } from './data'
import { Icon } from '@iconify/react'

export default function SkillsTab() {
  return (
    <div className="skills-holo-shelves">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="holo-shelf-row">
          <div className="floating-badge-row">
            {items.map(skill => (
              <div key={skill.label} className="holo-badge">
                <div className="holo-disc" />
                <div className="holo-beam" />
                <Icon icon={skill.icon} className="holo-icon" />
                <div className="holo-label">{skill.label}</div>
              </div>
            ))}
          </div>
          <div className="engraved-label"><span>{category}</span></div>
        </div>
      ))}
    </div>
  )
}
