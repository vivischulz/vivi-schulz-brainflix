import "./HeroVideo.scss";

const HeroVideo = () => {

return (
  <>
    <div className="hv">
      <div className="hv__video-wrap">
        <video
          control="controls"
          src="true"
          controls
          poster="https://i.imgur.com/l2Xfgpl.jpg"
          className="hv__video"
        />

        <section className="hv--control-wrap">
          <div className="hv__icon-play--container">
            <span className="hv__icon-play"></span>
          </div>

          <div className="hv__control-bar--container">
            <div className="hv__control-on-top"></div>
            <span className="hv__control-time">0:00/4:01</span>
          </div>

          <div className="hv__screen-value--container">
            <div className="hv__fullscreen"></div>
            <div className="hv__valueup"></div>
          </div>
        </section>
      </div>
    </div>
  </>
);

}

export default HeroVideo;
