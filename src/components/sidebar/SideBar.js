import './SideBar.scss'
import {Link} from "react-router-dom";

export default function SideBar({ videos}) {
console.log(videos);
  return (
    <aside className="sidebar">
      <section>
        <h2 className="sidebar__title">Next Videos</h2>

        <article className="sidebar__wrap-video">
          {videos.map((video) => (
            <section className="sidebar__wrap-word" key={video.id}>
              <Link to = {`/videos/${video.id}`}>
                <video
                  control="controls"
                  poster={video.image}
                  className="sidebar__nextv"
                />
              </Link>
              <div className="sidebar__subtitle-wrap">
                <h3 className="sidebar__subtitle">{video.title}</h3>
                <p className="sidebar__author">{video.channel}</p>
              </div>
            </section>
          ))}
        </article>
      </section>
    </aside>
  );
};
