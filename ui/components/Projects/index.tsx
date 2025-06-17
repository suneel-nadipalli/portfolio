'use client';

import { projects } from './data';
import SDCard from '@/components/SDCard';

export default function Projects() {
  return (
    <section className="casefile-container" data-watermark="[ P R O J E C T S ]">
      <div className="casefile-tab">Projects</div>

      <div className="project-stream-grid">
        {projects.map((project, index) => (
          <SDCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}