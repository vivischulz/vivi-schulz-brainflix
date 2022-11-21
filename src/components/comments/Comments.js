import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";

export default function Comments({ comments, addComment, handleDelete }) {
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
              handleDelete={handleDelete}
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
