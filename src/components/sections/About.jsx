import { aboutData } from '../../data/portfolioData';
import Marquee from '../ui/Marquee';
import SectionStars from '../effects/SectionStars';

export default function About() {
  return (
    <section id="about" className="panel" aria-labelledby="about-title">
      <SectionStars />
      <Marquee />
      <div className="wm" aria-hidden="true">
        BRIEFING
      </div>
      <div className="panel-inner">
        <div className="mission-tag">
          <span className="t-num">{aboutData.logNum}</span>{' '}
          <span className="scramble">{aboutData.tag}</span>
        </div>
        <h2 className="sec-title split" id="about-title">
          {aboutData.title} <em>{aboutData.titleAccent}</em>
        </h2>
        <div className="about-grid">
          <p 
            className="about-text masklines"
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          />
          <div className="about-image-wrapper reveal">
            <img 
              src={aboutData.image} 
              alt="About Me" 
              className="about-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
