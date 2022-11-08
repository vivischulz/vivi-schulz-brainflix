import "./HeroVideo.scss";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HeroVideo({ searchVideoByVideoId, videos}) {
 
  const { videoId } = useParams();
  const { image } = videos;
  useEffect(() => {
    searchVideoByVideoId(videoId);
  }, [videoId]);

  return (
    <div className="hv">
      <div className="hv__video-wrap">
        <video
          control="controls"
          src="true"
          controls
          poster={image}
          className="hv__video"
        />
      </div>
    </div>
  );
}


