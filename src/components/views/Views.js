import "./Views.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export const getDate = (stamps) => {
  const d = new Date(stamps);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
  const day = (d.getDate() < 10 ? "0" : "") + d.getDate();

  return `${month}/${day}/${year}`;
};


export default function Views(){
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
    }, []);

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


    const {title, channel, timestamp, description, views, likes} = selectedVideo;

    

    return (
      <>
        <section className="views">
          <h1 className="views__title">{title}</h1>
          <section className="views__detail">
            <div className="views__detail--left">
              <p className="views__author">By {channel}</p>
              <p className="views__date">{getDate(timestamp)}</p>
            </div>
            <div className="views__detail--right">
              <div className="views__views">
                <span className="views__icon views__icon-views"></span>
                <div className="views__word">{views}</div>
              </div>
              <div className="views__likes">
                <span className="views__icon views__icon-likes"></span>
                <div className="views__word">{likes}</div>
              </div>
            </div>
          </section>
          <p className="views__p">{description}</p>
        </section>
      </>
    );
}