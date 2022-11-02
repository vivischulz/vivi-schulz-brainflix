import "./HeroVideo.scss";

const HeroVideo = () => {

return (
  <>
    <div className="hv">
      <video
        control="controls"
        src="true"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        className="hv__video"
      />

      <section className="hv--control-wrap">
        <span className="hv__icon--container">
          <span className="hv__icon-play"></span>
        </span>

        <span className="hv__control-bar"></span>

        <div className="hv__control-on-top"></div>
        <span className="hv__control-time">0:00/4:01</span>

        <span className="hv__icon--container-extend">
          <span className="hv__fullscreen"></span>
          <span className="hv__valueup"></span>
        </span>
      </section>

    </div>
  </>
);

}

export default HeroVideo;
