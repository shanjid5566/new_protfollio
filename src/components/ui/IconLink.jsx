export default function IconLink({
  href,
  icon: Icon,
  label,
  variant = 'ghost',
  external = false,
}) {
  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      className={`btn btn-icon-only btn-${variant} magnetic`}
      href={href}
      aria-label={label}
      title={label}
      {...props}
    >
      <Icon className="btn-icon-lg" aria-hidden="true" />
    </a>
  );
}
