import "./Relatives.scss";
import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {getDate} from '../../components/views/Views';

export default function Relatives() {
    
  const [selectedVideo, setSelectedVideo] = useState({});
  const params = useParams();
  const { comments } = selectedVideo;


     useEffect(() => {
       axios
         .get(
           `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key={{BRAINFLIX__KEY}}`
         )
         .then((response) => {
           setSelectedVideo(response.data);
           console.log(`default video`, response.data);
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
           console.log(response.data);
         })
         .catch((error) => console.log(error));
     }, [params]);
      
  return (
    <>
      <section className="form">
        <p className="form__comment-count">{comments?.length} Comments</p>
        <div className="form__section form__section-md">
          <div className="form__form-image"></div>
          <form className="form__form form__form--left-md">
            <div className="form__text-title-wrap">
              <h2 className="form__title">Join the Conversation</h2>
              <label htmlFor="textArea">COMMENT</label>
              <input
                id="textArea"
                name="textArea"
                placeholder="Add a new comment"
                minLength="3"
                maxLength="300"
                className="form__textarea"
              ></input>
            </div>

            <button className="form__btn">
              <span className="form__btn-icon"></span>
              <span className="form__btn-name">comment</span>
            </button>
          </form>
        </div>
      </section>
      {comments?.length > 0 ? (
        <section className="comment comment--message-block">
          {comments?.map((comment) => (
            <article className="comment__section" key={comment?.id}>
              <div className="comment__message-wraper">
                <div className="comment__message-image"></div>
              </div>
              <section className="comment__message">
                <p className="comment__message-user">{comment?.name}</p>
                <p className="comment__message-date">
                  {getDate(comment?.timestamp)}
                </p>
                <p className="comment__message-content">{comment?.comment}</p>
              </section>
            </article>
          ))}
        </section>
      ) : (
        <section className="comment__no-data-container">
          <p className="comment__no-data">No Comments</p>
        </section>
      )}
    </>
  );
}
