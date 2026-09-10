export default function Preloader() {
  return (
    <div id="loader">
      <div className="l-curtain c1" />
      <div className="l-curtain c2" />
      <div className="l-inner">
        <div className="l-top">MISSION CONTROL // BOOT SEQUENCE</div>
        <div className="l-count">
          <span id="lcount">000</span>
          <small>%</small>
        </div>
        <div className="l-bar">
          <i id="lbar" />
        </div>
        <div className="l-status" id="lstatus">
          INITIATING LAUNCH SEQUENCE
        </div>
      </div>
    </div>
  );
}
