import "./form.scss";

const Form = () =>{
    return (
      <>
        <form className="form">
          <label htmlFor="textArea"></label>
          <textarea
            id="textArea"
            name="textArea"
            cols="20"
            rows="5"
            placeholder="Add a new comment"
            minlentgth="3"
            maxLength="300"
          ></textarea>

          <button className="input__btn">
            <span className="input__btn-icon"></span>
            <span className="input__btn-name">Upload</span>
          </button>
          
        </form>
      </>
    );
}

export default Form;