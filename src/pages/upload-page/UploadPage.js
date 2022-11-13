import "./UploadPage.scss";
import {useNavigate} from "react-router-dom";
import React, {useRef} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function UploadPage() {
  const navigate = useNavigate();
  const formRef = useRef();
  
  const successToast = () =>{
    toast("succes custom Toast", {
      className:"Your video is submitted",
      draggable:true,
      position:toast.POSITION.TOP_CENTER
    });
  }

   const handleSubmit_submit = (event) =>{
    event.preventDefault();
   
    successToast("Your video is submitted!");
    setTimeout(() => navigate("/"), 5000);
    formRef.current.reset();
  }

   const handleSubmit_cancel = (event) =>{
    event.preventDefault();
    navigate("/");
    formRef.current.reset();
   }

  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form ref={formRef}>
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
              onClick={handleSubmit_submit}
            >
              <span className="upload__btn-icon"></span>
              <span className="upload__btn-name upload__btn-name--with-icon">
                Publish
              </span>
            </button>
            <button
              className="upload__btn upload__btn--cancel"
              type="submit"
              onClick={handleSubmit_cancel}
            >
              <span className="upload__btn-name">Cancel</span>
            </button>
          </section>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}
