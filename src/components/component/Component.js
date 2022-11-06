import "./component.scss";

const Component = () => {
  return (
    <>
      <button className="input__btn">
        <span className="input__btn-icon"></span>
        <span className="input__btn-name">Upload</span>
      </button>

      <div className="avatar"></div>
      <button className="btn">Demo </button>
      <div className="logo">BrainFlix</div>
      <svg className="icon">
        <use href="../../assets/images/icons/search" title="search"></use>
      </svg>
      <div className="icon icon--search"></div>
      <div className="icon icon--views"></div>
      <div className="icon icon--likes"></div>
      <div className="icon icon--upload"></div>

      <section className="input">
        {/*---search group---*/}
        <div className="input__search">
          <div className="input__search-group">
            <span className="input__search-icon"></span>
            <input
              type="text"
              className="input__search-name"
              placeholder="Search"
              name="search"
              autoFocus
            />
          </div>
          <div className="input__avatar1"></div>
        </div>

        {/*---button group---*/}
        <button className="input__btn">
          <span className="input__btn-icon"></span>
          <span className="input__btn-name">Upload</span>
        </button>
        <div className="input__avatar2"></div>
      </section>

      {/*---------------form--------------*/}

      <section className="form">
        <div className="form__section">
          <div className="form__form-image"></div>
          <form className="form__form">
            <h3 className="form__title">Join the Conversation</h3>
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
              They BLEW the ROOF off at their last event, once everyone started
              figuring out they were going. This is still simply the greatest
              opening of an event I have EVER witnessed.
            </p>
          </section>
        </article>

        <article className="comment__section">
          <div className="comment__message-wraper">
            <div className="comment__message-image"></div>
          </div>
          <section className="comment__message">
            <p className="comment__message-user">Gary Wong</p>
            <p className="comment__message-date">07/15/2021</p>

            <p className="comment__message-content">
              Every time I see him shred I feel so motivated to get off my couch
              and hop on my board. He’s so talented! I wish I can ride like him
              one day so I can really enjoy myself!
            </p>
          </section>
        </article>

        <article className="comment__section">
          <div className="comment__message-wraper">
            <div className="comment__message-image"></div>
          </div>
          <section className="comment__message">
            <p className="comment__message-user">Theodore Duncan</p>
            <p className="comment__message-date">07/11/2021</p>

            <p className="comment__message-content">
              How can someone be so good!!! You can tell he lives for this and
              loves to do it every day. Every time I see him I feel instantly
              happy! He’s definitely my favorite ever!
            </p>
          </section>
        </article>
      </section>
    </>
  );
};
export default Component;
