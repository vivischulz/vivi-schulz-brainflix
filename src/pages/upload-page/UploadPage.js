import "./UploadPage.scss";
import {useNavigate} from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();

   const handleSubmit = (event) =>{
    event.preventDefault();
    alert('Your video is submitted!');
    navigate('/');  
  }

  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={handleSubmit}>
          <section className="upload--wrap-lg">
            <section className="upload__section">
              <article className="upload__thumbnail">
                <h2 className="upload__subtitle upload__subtitle--margin-b">
                  Video Thumbnail
                </h2>
                <div className="upload__image"></div>
              </article>
              <section className="upload__user-input">
                <h2 className="upload__subtitle">Title Your Video</h2>
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
                <h2 className="upload__subtitle">Add a video description</h2>
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
          </section>
          <section className="upload__btn-group ">
            <button
              className="upload__btn upload__btn--publish "
              type="submit"
            >
              <span className="upload__btn-icon"></span>
              <span className="upload__btn-name upload__btn-name--with-icon">
                Publish
              </span>
            </button>
            <button className="upload__btn upload__btn--cancel">
              <span className="upload__btn-name">Cancel</span>
            </button>
          </section>
        </form>
      </section>
    </>
  );
}
