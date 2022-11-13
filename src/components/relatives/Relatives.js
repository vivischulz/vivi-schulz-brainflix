import "./Relatives.scss";
import {useState, useEffect} from "react";
import CommentForm from "../commentForm/CommentForm";
import { getDate } from "../../components/views/Views";
import axios from "axios";

export default function Relatives({ selectedVideo, selectedVideoId }) {
  const { comments } = selectedVideo;
  
 const [updatedComments, setUpdatedComments] = useState({});
  // console.log(updatedComments);

  const SELECTED_VIDEO_ID_URL = `https://project-2-api.herokuapp.com/videos/${selectedVideoId}/comments?api_key={{BRAINFLIX__KEY}}`;
  
  const addComment = (text) => {

    const commentInput = {
      name: selectedVideo.title,
      comment: text,
    };

    if (commentInput !== "") {

      axios.post(SELECTED_VIDEO_ID_URL, commentInput).then(({data}) => {
       setUpdatedComments(data);
       comments.push(data);
       console.log("updatedComments", updatedComments);
       console.log("comments", comments);
      });
    }
  };

  
  useEffect(() => {
    if (!updatedComments){return}
    setUpdatedComments(updatedComments);
    console.log("updatedComments-useEffect",updatedComments);
    
    console.log("comments-useEffect", comments);
    // return comments.sort(
    //   (a, b) =>
    //     (a.timestamp - b.timestamp)
    // );
    },[updatedComments,comments]);


  return (
    <>
      <section className="form">
        <p className="form__comment-count">{comments?.length} Comments</p>
        <div className="form__section form__section-md">
          <div className="form__form-image"></div>
          <CommentForm submitLabel="Comment" handleSubmit={addComment} />
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
