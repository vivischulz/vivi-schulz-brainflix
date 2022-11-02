import "./HeroVideo.scss";

const HeroVideo = () => {

return (
  <>
    <div className="hero">
      <video
        control="controls"
        src="true"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        className="hero__video"
      />

      <section className="hero--control-wrap">
        <span className="hero__icon--container">
          <span className="hero__icon-play"></span>
        </span>

        <span className="hero__control-bar"></span>

        <div className="hero__control-on-top"></div><span className="hero__control-time">0:00/4:01</span>

        <span className="hero__icon--container-extend">
          <span className="hero__fullscreen"></span>
          <span className="hero__valueup"></span>
        </span>

      </section>
    </div>
  </>
);

}

export default HeroVideo;
