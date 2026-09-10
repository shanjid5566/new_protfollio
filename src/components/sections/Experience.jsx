import { experienceData } from '../../data/portfolioData';
import SectionStars from '../effects/SectionStars';

export default function Experience() {
  return (
    <section id="experience" className="panel" aria-labelledby="experience-title">
      <SectionStars />
      <div className="wm" aria-hidden="true">
        FLIGHT LOG
      </div>
      <div className="panel-inner">
        <div className="mission-tag">
          <span className="t-num">{experienceData.logNum}</span>{' '}
          <span className="scramble">{experienceData.tag}</span>
        </div>
        <h2 className="sec-title split" id="experience-title">
          {experienceData.title} <em>{experienceData.titleAccent}</em>
        </h2>
        <div className="log">
          {experienceData.items.map((item) => (
            <article className="log-item reveal" key={item.role + item.when}>
              <div className="when">{item.when}</div>
              <h3>{item.role}</h3>
              <div className="org">{item.org}</div>
              {item.bullets.map((bullet) => (
                <p key={bullet}>{bullet}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
