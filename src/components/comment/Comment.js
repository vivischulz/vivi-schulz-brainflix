import { getDate } from "../../components/views/Views";

export default function Comment({ comment}) {
  return (
    <article className="comment__section" key={comment?.id}>
      <div className="comment__message-wraper">
        <div className="comment__message-image"></div>
      </div>
      <section className="comment__message">
        <div>
          <p className="comment__message-user">{comment?.name}</p>
          <p className="comment__message-date">{getDate(comment?.timestamp)}</p>
          <p className="comment__message-content">{comment?.comment}</p>
        </div>
        <button className="comment__message-button">Delete</button>
      </section>
    </article>
  );
}
