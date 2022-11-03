import "../src/app.scss"
import Header from './components/header/Header';
import HeroVideo from "./components/heroVideo/HeroVideo";
import Views from "./components/views/Views";
import SideBar from "./components/sidebar/SideBar";
import Relatives from "./components/relatives/Relatives";

// import {useState} from 'react';

// import bfVideos from "../src/data/videos.json";
// import bfVideoDetails from "../src/data/video-details.json";


export default function App() {
  // const defaultId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  
  // const getbfVideos = (videoId) => {
  //   return bfVideos.filter((video)=> video.id !== videoId)
  // };
  // const getbfVideosDetail = (videoId) => {
  //   return bfVideoDetails.find(
  //     (video) => video.id === videoId
  //     );
  //   }

  // const [videoId, setVideoId] = useState(bfVideos[0].id);
  // const [videos, setVideos] = useState(getbfVideosDetail(videoId));
  

  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <section className="App__wrap">
        <section className="App__wrap-left">
          <Views />
          <Relatives />
        </section>
        <SideBar />
      </section>
    </div>
  );
}

