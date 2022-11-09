import "./HeroVideo.scss";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HeroVideo() {
 const [selectedVideo, setSelectedVideo] = useState({});
 const params = useParams();

   useEffect(() => {
     axios
       .get(
         `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key={{BRAINFLIX__KEY}}`
       )
       .then((response) => {
         setSelectedVideo(response.data);
       })
       .catch((error) => console.log(error));
   }, [ ]);

  useEffect(() => {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${params.videoId}?api_key={{BRAINFLIX__KEY}}`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        })
        .catch((error) => console.log(error));
    
  }, [params]);

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


