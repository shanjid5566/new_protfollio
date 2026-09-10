import { SiGithub, SiGmail, SiWhatsapp } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';
import { contactData, siteConfig } from '../../data/portfolioData';
import IconLink from '../ui/IconLink';
import SectionStars from '../effects/SectionStars';

export default function Contact() {
  return (
    <section id="contact" className="panel" aria-labelledby="contact-title">
      <SectionStars />
      <div className="wm" aria-hidden="true">
        COMMS
      </div>
      <div className="panel-inner">
        <div className="mission-tag" style={{ justifyContent: 'center' }}>
          <span className="t-num">{contactData.logNum}</span>{' '}
          <span className="scramble">{contactData.tag}</span>
        </div>
        <h2 className="sec-title split" id="contact-title">
          {contactData.title} <em>{contactData.titleAccent}</em>
        </h2>
        <p className="sub reveal">{contactData.subtitle}</p>
        <div className="comm-links reveal">
          <IconLink
            href={`mailto:${siteConfig.email}`}
            icon={SiGmail}
            label={`Email ${siteConfig.email}`}
            variant="cream"
          />
          <IconLink
            href={siteConfig.whatsapp}
            icon={SiWhatsapp}
            label="WhatsApp"
            variant="ghost"
            external
          />
          <IconLink
            href={siteConfig.github}
            icon={SiGithub}
            label="GitHub"
            variant="ghost"
            external
          />
          <IconLink
            href={siteConfig.linkedin}
            icon={FaLinkedinIn}
            label="LinkedIn"
            variant="ghost"
            external
          />
        </div>
      </div>
    </section>
  );
}
