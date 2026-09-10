import { marqueeItems } from '../../data/portfolioData';

function MarqueeContent() {
  const content = marqueeItems.map((item, i) => (
    <span key={item}>
      {i % 2 === 0 ? <b>{item}</b> : item}
      {' '}
      <i>◆</i>{' '}
    </span>
  ));

  return (
    <>
      <span>{content}</span>
      <span aria-hidden="true">{content}</span>
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="marquee">
        <MarqueeContent />
      </div>
    </div>
  );
}
