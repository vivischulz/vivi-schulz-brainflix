import './SideBar.scss'

export default function SideBar (){
  return (
    <>
      {/*--- Next Videos -------- */}
      <section className="sidebar">
        <section>
          <h2 className="sidebar__title">Next Videos</h2>
          <article className="sidebar__wrap">
            <video
              control="controls"
              src="true"
              controls
              poster="https://i.imgur.com/5qyCZrD.jpg"
              className="sidebar__nextv"
            />
            <div className="sidebar__subtitle-wrap">
              <h3 className="sidebar__subtitle">
                Become A Travel Pro In One Easy Lesson
              </h3>
              <p className="sidebar__author">Todd Welch</p>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
