import "./Relatives.scss";
import { useState, useEffect } from "react";
import { BACK_END } from "../../utils/api";
import axios from "axios";
import Comments from "../comments/Comments";

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


  const handleDelete = (event, commentId) => {
    event.preventDefault();
 
    axios
      .delete(`${BACK_END}/api/videos/${selectedVideoId}/${commentId}`)
      .then(({data}) => {
     
        const backendComments = data.comments;
        const updateCommentsAfterDelete = backendComments.filter(
          (comment) => comment.id !== commentId
        );
        setUpdatedComments(updateCommentsAfterDelete);
      
        comments.splice(0, comments.length, ...updateCommentsAfterDelete);
  
      });
  };

  return (
    <Comments
      handleDelete={handleDelete}
      addComment={addComment}
      comments={comments}
    />
  );
}
