import "./Relatives.scss";
import { useState, useEffect } from "react";
import { BACK_END } from "../../utils/api";
import CommentForm from "../commentForm/CommentForm";
import Comment from "../comment/Comment";
import axios from "axios";

export default function Relatives({ selectedVideo, selectedVideoId }) {
  const { comments } = selectedVideo;
  const [updatedComments, setUpdatedComments] = useState({});

  const SELECTED_VIDEO_ID_URL = `${BACK_END}/api/videos/${selectedVideoId}/comments`;

  const addComment = (text) => {
    const commentInput = {
      comment: text,
    };

    if (commentInput !== "") {
      axios.post(SELECTED_VIDEO_ID_URL, commentInput).then(({ data }) => {
        setUpdatedComments(data);
        comments.push(data);
      });
    }
  };

  useEffect(() => {
    if (!updatedComments) {
      return;
    }
    setUpdatedComments(updatedComments);
  }, [updatedComments, comments]);

  const getSortTime = () => {
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
