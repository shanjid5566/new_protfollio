import { scrollToSection } from '../../utils/scrollToSection';

export default function RollingButton({
  href,
  label,
  variant = 'cream',
  external = false,
  icon: Icon,
  className = '',
}) {
  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const line = (
    <span className="btn-line">
      {Icon ? <Icon className="btn-icon" aria-hidden="true" /> : null}
      {label}
    </span>
  );

  return (
    <a
      className={`btn btn-${variant} magnetic ${className}`}
      href={href}
      onClick={(event) => scrollToSection(event, href)}
      {...props}
    >
      <span className="roll">
        <span>
          {line}
          {line}
        </span>
      </span>
    </a>
  );
}
