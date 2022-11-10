import "./HeroVideo.scss";

export default function HeroVideo({selectedVideo}) {

  return (
    <div className="hv">
      <div className="hv__video-wrap">
        <video
          control="controls"
          src="true"
          controls
          poster={selectedVideo.image}
          className="hv__video"
        />
      </div>
    </div>
  );
}


