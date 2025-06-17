'use client';

import { skills } from '@/components/Skills/data'; // Adjust if path differs
import { Icon } from '@iconify/react';
import Wrapper from '../Wrapper';
import './styles.css';

export default function Skills() {
  return (
    <Wrapper title="Skills" variant="glass">
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
            <div className="engraved-label">{category}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}