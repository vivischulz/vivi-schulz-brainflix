import "./UploadPage.scss";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import { BACK_END } from "../../utils/api";
import axios from "axios";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function UploadPage({videos}) {
  const navigate = useNavigate();
  const formRef = useRef();
  
  const [titleVideo, setTitleVideo] = useState("");
  const [textArea, setTextArea] = useState("");
  const [unsplashImage, setUnsplashImage]=useState("");
  const isPublishButtonDisabled = (titleVideo.length === 0) || (textArea.length === 0);

   const handleSubmit_submit = (event) =>{
    event.preventDefault();
    handleUploadVideo(titleVideo, textArea);
    navigate("/");
  }

   const handleSubmit_cancel = (event) =>{
    event.preventDefault();
    navigate("/");
   }

     useEffect(() => {
       axios
         .get(`https://api.unsplash.com/photos/random?&client_id=${UNSPLASH_KEY}`)
         .then(({ data }) => {
           setUnsplashImage(data.urls.regular);
         })
         .catch((err) => console.log(err));
     }, []);

   const handleUploadVideo = (titleVideo, textArea) => {

     const videoInput = {
       title: titleVideo,
       description: textArea,
       image: unsplashImage,
     };

     if (videoInput !== "") {
     
       axios
         .post(`${BACK_END}/api/videos`, videoInput)
         .then((res) => {
         console.log(res);
         })
         .catch(err=>console.log(err));
   };

  }
 
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form ref={formRef}>
          <section className="upload--wrap-lg">
            <section className="upload__section">
              <article className="upload__thumbnail">
                <h2 className="upload__subtitle upload__subtitle--margin-b">
                  Video Thumbnail
                </h2>

                <div className="upload__image"></div>
              </article>
              <section className="upload__user-input">
                <h2 className="upload__subtitle">Title Your Video</h2>
                <label htmlFor="titleViedeo">
                  <input
                    id="titleViedeo"
                    name="titleViedeo"
                    placeholder="Add a title to your video"
                    minLength="3"
                    maxLength="300"
                    className="upload__textarea"
                    value={titleVideo}
                    onChange={(e) => setTitleVideo(e.target.value)}
                  ></input>
                </label>
                <h2 className="upload__subtitle">Add a video description</h2>
                <label htmlFor="textArea">
                  <input
                    id="textArea"
                    name="textArea"
                    placeholder="Add a description to your video"
                    minLength="3"
                    maxLength="300"
                    className="upload__textarea upload__textarea--more-height"
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                  ></input>
                </label>
              </section>
            </section>
          </section>
          <section className="upload__btn-group ">
            <button disabled = {isPublishButtonDisabled}
              className="upload__btn upload__btn--publish "
              type="submit"
              onClick={handleSubmit_submit}
            >
              <span className="upload__btn-icon"></span>
              <span className="upload__btn-name upload__btn-name--with-icon">
                Publish
              </span>
            </button>
            <button
              className="upload__btn upload__btn--cancel"
              type="submit"
              onClick={handleSubmit_cancel}
            >
              <span className="upload__btn-name">Cancel</span>
            </button>
          </section>
        </form>
      </section>
    </>
  );
}
