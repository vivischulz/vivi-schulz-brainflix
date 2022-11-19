import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACK_END, defaultVideoId } from "../../utils/api";

import HeroVideo from "../../components/heroVideo/HeroVideo";
import Views from "../../components/views/Views";
import Relatives from "../../components/relatives/Relatives";
import SideBar from "../../components/sidebar/SideBar";

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();


  const [videos, setVideos] = useState([]);

  const VIDEO_ID_URL = (videoId) => `${BACK_END}/api/videos/${videoId}`;

  useEffect(() => {
    const fetchAllVideos = async () => {
      try{
        const {data} = await axios.get(`${BACK_END}/api/videos`);
        const dataExcludeDefault = data.filter(d => d.id !== defaultVideoId);
        setVideos(dataExcludeDefault);
      } catch (err) {
        console.log("Error", err);
      }
    };
    
    const fetchDisplayVideo = async () =>{
      try{
        const {data} = await axios.get(VIDEO_ID_URL(defaultVideoId));
        setSelectedVideo(data);
      }catch(err){
        console.log("Error", err);
      }
    }

    fetchDisplayVideo();
    fetchAllVideos();
  },[]);

  useEffect(() => {
    if (videoId) {
      const fetchdefaultVideo = async () => {
        try {
          const { data } = await axios.get(`${BACK_END}/api/videos`);
          const dataExcludeDefault = data.filter(
            (d) => d.id === defaultVideoId
          );
          const fullVideos = [...data, dataExcludeDefault];
          setVideos(fullVideos);
        } catch (err) {
          console.log("Error", err);
        }
      };

      const fetchSelectedVideo = async () =>{
        try{
          const {data} =await axios.get(VIDEO_ID_URL(videoId));
          setSelectedVideo(data);
        } catch(err){
        console.log("error", err);
        }
    }
    fetchdefaultVideo();
    fetchSelectedVideo();
  }
}, [videoId]);

  const selectedVideoId = selectedVideo.id;

  return (
    <>
      <HeroVideo selectedVideo={selectedVideo}/>
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
