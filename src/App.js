import "../src/App.scss"

import {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Header from './components/header/Header';

import HomePage from "./pages/home-page/HomePage";
import UploadPage from "./pages/upload-page/UploadPage";

import bfVideos from "../src/data/videos.json";
import bfVideoDetails from "../src/data/video-details.json";

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
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  videos={videos}
                  videoDetails={videoDetails}
                  myClick={handleClick}
                />
              }
            />
            <Route path="brainFlix" element={<Navigate to="/" />} />
            <Route path="upload" element={<UploadPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="App__block-bg"></div>
    </>
  );
}

