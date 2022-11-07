import "../src/app.scss"
import Header from './components/header/Header';

import {useState} from 'react';

import bfVideos from "../src/data/videos.json";
import bfVideoDetails from "../src/data/video-details.json";

import HomePage from "./pages/home-page/HomePage";


export default function App() {

  
  const getbfVideos = (videoId) => {
    return bfVideos.filter((video)=> video.id !== videoId)
  };
  const getbfVideosDetail = (videoId) => {
    return bfVideoDetails.find(
      (video) => video.id === videoId
      );
    }
 

const [videoId,setVideoId] = useState(bfVideos[0].id);
const [videos,setVideos] = useState(getbfVideos(videoId));
const [videoDetails,setVideoDetails] = useState(getbfVideosDetail(videoId));

const handleClick = (clickEvnt, videoIdClickedOn) =>{
  clickEvnt.preventDefault();
  setVideoId(videoIdClickedOn);
  setVideos(getbfVideos(videoIdClickedOn));
  setVideoDetails(getbfVideosDetail(videoIdClickedOn));
};

  return (
    <>
      <div className="App__block-bg"></div>
      <div className="App">
        <Header />
        <HomePage videos = {videos} videoDetails = {videoDetails} myClick = {handleClick}/>
      </div>
      <div className="App__block-bg"></div>
    </>
  );
}

