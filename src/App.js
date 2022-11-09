import "../src/App.scss"

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from './components/header/Header';

import HomePage from "./pages/home-page/HomePage";
import UploadPage from "./pages/upload-page/UploadPage";

// const SEARCH_URL = `https://project-2-api.herokuapp.com/videos?apiKey=${process.env.REACT_APP_API_KEY}`;

const SEARCH_URL = `https://project-2-api.herokuapp.com/videos?api_key={{BRAINFLIX__KEY}}`;

const searchByVideoId = (videoId) => `${SEARCH_URL}&i=${videoId}`;
const searchByVideoName = (searchKeyword) => `${SEARCH_URL}&s=${searchKeyword}`;


export default function App() {

const [videos, setVideos] = useState([]);
const [videoDetails, setVideoDetails] = useState({});
const [defaultSearch] = useState("MBX");


const handleSearchVideos = async (event) => {
    event.preventDefault();
    const searchKeyword = event.target.searchVideoInput.value;
    const { data } = await axios.get(searchByVideoName(searchKeyword));
    setVideos(data);
    setVideoDetails({});
    event.target.reset();
  };



const searchVideoByVideoId = async (videoId) =>{
  const {data} = await axios.get(searchByVideoId(videoId));
  setVideoDetails(data);
};



useEffect(() => {
  const fetchData = async () =>{
    try{
    const {data} = await axios.get(searchByVideoName(defaultSearch));
    setVideos(data);
          
    }catch(error){
      console.log('Error',error);
    }
        };

  fetchData();
},[defaultSearch]);

  return (
    <>
      <div className="App__block-bg"></div>
      <div className="App">
        <BrowserRouter>
          <Header searchVideos={handleSearchVideos} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  videos={videos}
                  videoDetails={videoDetails}
                  searchVideoByVideoId={searchVideoByVideoId}
                  searchByVideoName={searchByVideoName}
                />
              }
            />
            <Route path="brainFlix" element={<Navigate to="/" />} />
            <Route path="upload" element={<UploadPage />} />
            <Route
              path="videos"
              element={
                <HomePage
                  videos={videos}
                  videoDetails={videoDetails}
                  searchVideoByVideoId={searchVideoByVideoId}
                  searchByVideoName={searchByVideoName}
                />
              }
            />
            <Route
              path="videos/:videoId"
              element={
                <HomePage
                  videos={videos}
                  videoDetails={videoDetails}
                  searchVideoByVideoId={searchVideoByVideoId}
                  searchByVideoName={searchByVideoName}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="App__block-bg"></div>
    </>
  );
}

