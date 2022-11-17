import './SideBar.scss'
import { Link, useParams } from "react-router-dom";
import { defaultVideoId } from '../../utils/api';

export default function SideBar({videos}) {

  const {videoId} = useParams();

   const displayVideos = (videoId) => {
     return videos.filter((video) => (video.id !== videoId )&& (video.id !== defaultVideoId));
   };
   
  const filterVideos = displayVideos(videoId);

  return (
    <aside className="sidebar">
      <section>
        <h2 className="sidebar__title">Next Videos</h2>

        <article className="sidebar__wrap-video">
          {filterVideos.map((video) => (
            <section className="sidebar__wrap-word" key={video.id}>
              <Link to={`/videos/${video.id}`}>
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
