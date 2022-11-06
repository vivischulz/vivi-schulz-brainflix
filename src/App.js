import "../src/app.scss"
import Header from './components/header/Header';
import HeroVideo from "./components/heroVideo/HeroVideo";
import Views from "./components/views/Views";
import SideBar from "./components/sidebar/SideBar";
import Relatives from "./components/relatives/Relatives";

import {useState} from 'react';

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
  setVideoId(videoIdClickedOn);
  setVideos(getbfVideos(videoIdClickedOn));
  setVideoDetails(getbfVideosDetail(videoIdClickedOn));
  setCommentList(getbfVideosDetail(videoIdClickedOn));
};

 const [commentList, setCommentList] = useState(videoDetails.comments);

  const handleCommentAdd = (commentData) => {
    setCommentList([...commentList, { comment: commentData }]);
  };

  return (
    <>
      <div className="App__block-bg"></div>
      <div className="App">
        <Header />
        <HeroVideo video={videoDetails} />
        <section className="App__wrap">
          <section className="App__wrap-left">
            <Views video={videoDetails} />
            <Relatives
              comments={commentList}
              handleCommentAdd={handleCommentAdd}
            />
          </section>
          <SideBar videos={videos} myClick={handleClick} />
        </section>
      </div>
      <div className="App__block-bg"></div>
    </>
  );
}

