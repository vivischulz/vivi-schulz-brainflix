import './SideBar.scss'

export default function SideBar (){
  return (
    <>
      <main className="main">
        <section className="main__ml">
          {/*---Hero-video views-------- */}
          <section className="main__ml-hv-info">
            <h1 className="main__ml-hv-title">BMX Rampafe: 2021 Highlights</h1>
            <section>
              <div>
                <p className="main__ml-hv-author">By Red Crow</p>
                <p className="main__ml-hv-date">07/11/2021</p>
              </div>
              <div>
                <span className="main__ml-hv-icon-views"></span>
                <span className="main__ml-hv-icon-likes"></span>
              </div>
              <p className="main__ml-hv-views">
                On a gusty day in Southern Utah, a group of 25 daring mountain
                bikers blew the doors off what is possible on two wheels,
                unleashing some of the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run before the
                conditions made it impossible to ride, that was all that was
                needed for event veteran Kyle Strait, who won the event for the
                second time -- eight years after his first Red Cow Rampage title
              </p>
            </section>
          </section>
          {/*--- Comments -------- */}
          <section className="main__form">
            <p className="main__form__comment-count"> 3 comments</p>
            <div className="main__form__section">
              <div className="main__form__form-image"></div>
              <form className="main__form__form">
                <h2 className="main__form__title">Join the Conversation</h2>
                <label htmlFor="textArea">COMMENT</label>
                <textarea
                  id="textArea"
                  name="textArea"
                  placeholder="Add a new comment"
                  minLength="3"
                  maxLength="300"
                ></textarea>

                <button className="main__form__btn">
                  <span className="main__form__btn-icon"></span>
                  <span className="main__form__btn-name">comment</span>
                </button>
              </form>
            </div>
          </section>

          <section className="main__comment">
            <article className="main__comment__section">
              <div className="main__comment__message-wraper">
                <div className="main__comment__message-image"></div>
              </div>
              <section className="main__comment__message">
                <p className="main__comment__message-user">UMicheal Lyons</p>
                <p className="main__comment__message-date">08/09/2021</p>

                <p className="main__comment__message-content">
                  They BLEW the ROOF off at their last event, once everyone
                  started figuring out they were going. This is still simply the
                  greatest opening of an event I have EVER witnessed.
                </p>
              </section>
            </article>

          </section>
        </section>
        {/*--- Next Videos -------- */}
        <section className="main__mr">
          <h2 className="main__mr-title">Next Videos</h2>
          <article className="main__mr-nextv-wrap">
            <video
              control="controls"
              src="true"
              controls
              poster="https://i.imgur.com/5qyCZrD.jpg"
              className="main__mr-nextv"
            />
            <div className="main__mr-subtitle-wrap">
              <h3 className="main__mr-subtitle">
                Become A Travel Pro In One Easy Lesson
              </h3>
              <p className="main__mr-author">Todd Welch</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};
