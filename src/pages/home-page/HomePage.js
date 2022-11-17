import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACK_END, defaultVideoId } from "../../utils/api";

import HeroVideo from "../../components/heroVideo/HeroVideo";
import Views from "../../components/views/Views";
import Relatives from "../../components/relatives/Relatives";
import SideBar from "../../components/sidebar/SideBar";

export default function HomePage({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState({});
  const {videoId} = useParams();


  const VIDEO_ID_URL = (videoId) => `${BACK_END}/api/videos/${videoId}`;

  useEffect(() => {
    axios
      .get(VIDEO_ID_URL(defaultVideoId))
      .then(({data}) => {
        setSelectedVideo(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (videoId) {
      axios
        .get(VIDEO_ID_URL(videoId))
        .then(({ data }) => {
          setSelectedVideo(data);
        })
        .catch((error) => console.log(error));
    }
  }, [videoId]);

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
