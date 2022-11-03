import "./Relatives.scss";
import {getDate} from '../../components/views/Views';

export default function Relatives({ comments }) {
  return (
    <>
      <section className="form">
        <p className="form__comment-count"> {comments.length} comments</p>
        <div className="form__section">
          <div className="form__form-image"></div>
          <form className="form__form">
            <h2 className="form__title">Join the Conversation</h2>
            <label htmlFor="textArea">COMMENT</label>
            <textarea
              id="textArea"
              name="textArea"
              placeholder="Add a new comment"
              minLength="3"
              maxLength="300"
            ></textarea>

            <button className="form__btn">
              <span className="form__btn-icon"></span>
              <span className="form__btn-name">comment</span>
            </button>
          </form>
        </div>
      </section>
      {comments.length > 0 ?(
      <section className="comment comment--message-block">
        {comments.map((comment) => (
          <article className="comment__section" key={comment.id}>
            <div className="comment__message-wraper">
              <div className="comment__message-image"></div>
            </div>
            <section className="comment__message">
              <p className="comment__message-user">{comment.name}</p>
              <p className="comment__message-date">{getDate(comment.timestamp)}</p>
              <p className="comment__message-content">{comment.comment}</p>
            </section>
          </article>
        ))}
      </section>
      ):(
      <section className="comment__no-data-container">
        <p className="comment__no-data">No Comments</p>
      </section>
      )}
    </>
  );
}
