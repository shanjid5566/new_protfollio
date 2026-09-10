import { siteConfig } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer>
      {siteConfig.name.toUpperCase()} · {siteConfig.address.toUpperCase()}, DHAKA ·{' '}
      <b>ALL SYSTEMS NOMINAL</b> · © {siteConfig.year}
    </footer>
  );
}
