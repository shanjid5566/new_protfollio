import { skillsData } from '../../data/portfolioData';
import SkillChip from '../ui/SkillChip';
import SectionStars from '../effects/SectionStars';

export default function Skills() {
  return (
    <section id="skills" className="panel" aria-labelledby="skills-title">
      <SectionStars />
      <div className="wm" aria-hidden="true">
        SYSTEMS
      </div>
      <div className="panel-inner">
        <div className="mission-tag">
          <span className="t-num">{skillsData.logNum}</span>{' '}
          <span className="scramble">{skillsData.tag}</span>
        </div>
        <h2 className="sec-title split" id="skills-title">
          {skillsData.title} <em>{skillsData.titleAccent}</em>
        </h2>
        <div className="sys-grid">
          {skillsData.categories.map((cat) => (
            <div className="sys tilt reveal" key={cat.title}>
              <h4>{cat.title}</h4>
              <div className="chip-row">
                {cat.chips.map((chip) => (
                  <SkillChip key={chip} label={chip} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
