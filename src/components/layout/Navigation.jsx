import { useEffect, useState } from 'react';
import { navLinks } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/scrollToSection';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (event, href) => {
    setOpen(false);
    scrollToSection(event, href);
  };

  return (
    <nav aria-label="Main navigation" className={open ? 'is-open' : ''}>
      <div className="nav-logo">
        SHANJID<b>.SYS</b>
        <span className="nav-logo-status"> // ONLINE</span>
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <ul className="nav-links" id="nav-menu">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(event) => handleNav(event, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
