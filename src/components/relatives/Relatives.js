import "./Relatives.scss";
import { useState, useEffect } from "react";
import { BACK_END } from "../../utils/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../comments/Comments";

export default function Relatives({ selectedVideo, selectedVideoId }) {
  const { comments } = selectedVideo;
  const [updatedComments, setUpdatedComments] = useState({});

  const SELECTED_VIDEO_ID_URL = `${BACK_END}/api/videos/${selectedVideoId}/comments`;

  //AddComment function is working, however I am not figuring out how to write it into JSON yet
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

  // useEffect(() => {
  //   if (!updatedComments) {
  //     return;
  //   }
  //   setUpdatedComments(updatedComments);
  // }, [updatedComments, comments]);


    const { commentId } = useParams();

//Therefore Delete comment function can not have update comment to work with
    const onDeleteSubmit = (event) => {
      event.preventDefault();
      if (!updatedComments) {
        return;
      }
      axios.delete(`${BACK_END}/api/videos/${selectedVideoId}/${commentId}`)
      .then(res=>{
      console.log(res);

        // const updateCommentsAfterDelete = comments.filter(
        //   (comment) => comment.id !== commentId
        // );
        // setUpdatedComments(updateCommentsAfterDelete);
      })
      
    };


  return (
    <Comments
      onSubmit={onDeleteSubmit}
      addComment={addComment}
      comments={comments}
    />
  );

}
