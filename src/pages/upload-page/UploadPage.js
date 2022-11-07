import "./UploadPage.scss";

export default function UploadPage() {
  return (
    <>
      <h1>Upload Video</h1>
      <section className="upload__section">
        <article className="upload__thumbnail">
            <h2 className="upload__title">Video Thumbnail</h2>
            <img src="#" alt="#"></img>
        </article>
        <section className="upload__user-input">
          <h2 className="upload__title">Title Your Video</h2>
          <label htmlFor="titleViedeo">
            <input
              id="titleViedeo"
              name="titleViedeo"
              placeholder="Add a title to your video"
              minLength="3"
              maxLength="300"
              className="upload__textarea"
            ></input>
          </label>
          <h2 className="upload__title">Add a video description</h2>
          <label htmlFor="textArea">
            <input
              id="textArea"
              name="textArea"
              placeholder="Add a description to your video"
              minLength="3"
              maxLength="300"
              className="upload__textarea upload__textarea--more-height"
            ></input>
          </label>
        </section>
      </section>

      <button className="upload__btn">
        <span className="upload__btn-icon"></span>
        <span className="upload__btn-name">Publish</span>
      </button>

      <button className="upload__btn">
        <span className="upload__btn-name">Cancel</span>
      </button>
    </>
  );
}
