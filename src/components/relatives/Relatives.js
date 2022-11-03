import "./Relatives.scss";

export default function Relatives(){

return(
    <>
        {/*--- Comments -------- */}
          <section className="form">
            <p className="form__comment-count"> 3 comments</p>
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

          <section className="comment">
            <article className="comment__section">
              <div className="comment__message-wraper">
                <div className="comment__message-image"></div>
              </div>
              <section className="comment__message">
                <p className="comment__message-user">UMicheal Lyons</p>
                <p className="comment__message-date">08/09/2021</p>

                <p className="comment__message-content">
                  They BLEW the ROOF off at their last event, once everyone
                  started figuring out they were going. This is still simply the
                  greatest opening of an event I have EVER witnessed.
                </p>
              </section>
            </article>

          </section>
    </>
)

}