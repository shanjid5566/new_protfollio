import { educationData } from '../../data/portfolioData';
import SectionStars from '../effects/SectionStars';

export default function Education() {
  return (
    <section id="education" className="panel" aria-labelledby="education-title">
      <SectionStars />
      <div className="wm" aria-hidden="true">
        ACADEMY
      </div>
      <div className="panel-inner">
        <div className="mission-tag">
          <span className="t-num">{educationData.logNum}</span>{' '}
          <span className="scramble">{educationData.tag}</span>
        </div>
        <h2 className="sec-title split" id="education-title">
          {educationData.title} <em>{educationData.titleAccent}</em>
        </h2>
        <div className="edu-row">
          {educationData.items.map((item) => (
            <article className="edu reveal" key={item.degree}>
              <div className="deg">{item.degree}</div>
              <div className="inst">{item.institution}</div>
              <div className="meta">
                {item.meta}
                {item.highlight && (
                  <>
                    {' '}
                    <b>{item.highlight}</b>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
