import "./Relatives.scss";
import {useState, useEffect} from "react";
import CommentForm from "../commentForm/CommentForm";
import Comment from "../comment/Comment";
import axios from "axios";
import { BACK_END } from "../../utils/api";

export default function Relatives({ selectedVideo, selectedVideoId }) {
  const { comments } = selectedVideo;
  const [updatedComments, setUpdatedComments] = useState({});

  axios
    .get(`${BACK_END}/api/videos`)
    .then(({ data }) => console.log("checklink", data));

  const SELECTED_VIDEO_ID_URL = `https://project-2-api.herokuapp.com/videos/${selectedVideoId}/comments?api_key={{BRAINFLIX__KEY}}`;
  
  const addComment = (text) => {

    const commentInput = {
      name: 'Vivi',
      comment: text,
    };

    if (commentInput !== "") {
       axios.post(SELECTED_VIDEO_ID_URL, commentInput).then(({data}) => {
       setUpdatedComments(data);
       comments.push(data);
      });
    }
  };

  
  useEffect(() => {
    if (!updatedComments){return}
    setUpdatedComments(updatedComments);
    },[updatedComments,comments]);

   const getSortTime = (timestamp) => {
    return comments.sort((a, b) => b.timestamp - a.timestamp);
   };

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
            <Comment
              comment={comment}
              key={comment.id}
              sortTime={getSortTime(comment.timestamp)}
            />
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
