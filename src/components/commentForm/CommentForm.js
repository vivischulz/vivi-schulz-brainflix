import {useState} from 'react';

export default function CommnetForm({handleCommentAdd}){
   const [newComment, setNewComment] = useState('');

    const handleFormSubmit = (e) =>{
    e.preventDefault();

    handleCommentAdd(newComment);
    
    setNewComment('');
};

const handleFormInput = (e) =>{
    setNewComment(e.target.value);
};

return(
<form className="form__form form__form--left-md" onSubmit = {handleFormSubmit}>
  <div className="form__text-title-wrap">
    <h2 className="form__title">Join the Conversation</h2>
    <label htmlFor="textArea">COMMENT</label>
    <textarea
      id="textArea"
      name="textArea"
      placeholder="Add a new comment"
      minLength="3"
      maxLength="300"
      onChange={handleFormInput}
      value={newComment}
    ></textarea>
  </div>

  <button className="form__btn">
    <span className="form__btn-icon"></span>
    <span className="form__btn-name">comment</span>
  </button>
</form>

);
}