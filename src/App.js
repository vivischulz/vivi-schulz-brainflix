
import "../src/App.scss";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {BACK_END} from "../src/utils/api";

import Header from './components/header/Header';

import HomePage from "./pages/home-page/HomePage";
import UploadPage from "./pages/upload-page/UploadPage";

// const VIDEOS_URL = `https://project-2-api.herokuapp.com/videos?api_key={{BRAINFLIX__KEY}}`;
// const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function App() {

const [videos, setVideos] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${BACK_END}/api/videos`);
   
      setVideos(data);
    } catch (error) {
      console.log("Error", error)
    }
  };
  fetchData();
}, []);

  return (
    <>

      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage videos={videos} />
              }
            />
            <Route path="brainFlix" element={<Navigate to="/" />} />
            <Route path="upload" element={<UploadPage />} />
            <Route
              path="videos"
              element={
                <HomePage videos={videos}/> } />
            <Route
              path="videos/:videoId"
              element={
                <HomePage
                  videos={videos} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
  
    </>
  );
}


