import "./Relatives.scss";
import {getDate} from '../../components/views/Views';
import CommentForm from '../commentForm/CommentForm';

export default function Relatives({ comments, handleCommentAdd }) {

  console.log(comments);
  return (
    <>
      <section className="form">
        <p className="form__comment-count"> {comments.length} Comments</p>
        <div className="form__section form__section-md">
          <div className="form__form-image"></div>
          <CommentForm handleCommentAdd={handleCommentAdd} />
        </div>
      </section>
      {comments.length > 0 ? (
        <section className="comment comment--message-block">
          {comments.map((comment) => (
            <article className="comment__section" key={comment.id}>
              <div className="comment__message-wraper">
                <div className="comment__message-image"></div>
              </div>
              <section className="comment__message">
                <p className="comment__message-user">{comment.name}</p>
                <p className="comment__message-date">
                  {getDate(comment.timestamp)}
                </p>
                <p className="comment__message-content">{comment.comment}</p>
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
