import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import HeroVideo from "../../components/heroVideo/HeroVideo";
import Views from "../../components/views/Views";
import Relatives from "../../components/relatives/Relatives";
import SideBar from "../../components/sidebar/SideBar";

export default function HomePage({ videos}) {
  const [selectedVideo, setSelectedVideo] = useState({});
  const params = useParams();

  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const VIDEO_ID_URL = (videoId) =>
    `https://project-2-api.herokuapp.com/videos/${videoId}?api_key={{BRAINFLIX__KEY}}`;

  useEffect(() => {
    axios
      .get(VIDEO_ID_URL(defaultVideoId))
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (params.videoId) {
     
      axios
        .get(VIDEO_ID_URL(params.videoId))
        .then((response) => {
          setSelectedVideo(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [params]);


  const selectedVideoId = selectedVideo.id;

  return (
    <>
      <HeroVideo selectedVideo={selectedVideo} />
      <section className="App__wrap">
        <section className="App__wrap-left">
          <Views selectedVideo={selectedVideo} />
          <Relatives
            selectedVideo={selectedVideo}
            selectedVideoId={selectedVideoId}
          />
        </section>
        <SideBar videos={videos} />
      </section>
    </>
  );
}
