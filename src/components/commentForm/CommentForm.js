import {useState} from "react"
import "../relatives/Relatives.scss";

export default function CommentForm({ handleSubmit, submitLabel }) {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;

  const onSubmit = event =>{
    event.preventDefault();
    handleSubmit(text);
    setText("");
  }

  return (
    <form className="form__form form__form--left-md" onSubmit={onSubmit}>
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <button className="form__btn" disabled={isTextareaDisabled}>
        {submitLabel}
        <span className="form__btn-icon"></span>
        <span className="form__btn-name">comment</span>
      </button>
    </form>
  );
}
