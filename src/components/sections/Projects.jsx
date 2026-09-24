import { projectsData } from '../../data/portfolioData';
import SectionStars from '../effects/SectionStars';

export default function Projects() {
  const total = projectsData.projects.length;

  return (
    <section id="launchpad" className="panel" aria-labelledby="projects-title">
      <SectionStars />
      <div className="wm" aria-hidden="true">
        MISSIONS
      </div>
      <div className="panel-inner">
        <div className="mission-tag">
          <span className="t-num">{projectsData.logNum}</span>{' '}
          <span className="scramble">{projectsData.tag}</span>
        </div>
        <h2 className="sec-title split" id="projects-title">
          {projectsData.title} <em>{projectsData.titleAccent}</em> →
        </h2>
      </div>
      <div className="hwrap" id="hwrap">
        <div className="htrack" id="htrack">
          {projectsData.projects.map((project) => (
            <article
              className="launch tilt"
              data-index={project.index}
              key={project.title}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="l-head">
                <h3 itemProp="name">{project.title}</h3>
                <span className="l-tag">{project.tag}</span>
              </div>
              <p itemProp="description">{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" itemProp="url">
                {project.domain}
              </a>
            </article>
          ))}
        </div>
      </div>
      {/* <div className="h-progress" aria-hidden="true">
        <span>MISSION FEED</span>
        <div className="h-bar">
          <i id="hbar" />
        </div>
        <span id="hcount">
          01 / {String(total).padStart(2, '0')}
        </span>
      </div> */}
    </section>
  );
}
