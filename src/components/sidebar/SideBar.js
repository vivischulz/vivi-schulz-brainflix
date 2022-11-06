import './SideBar.scss'

export default function SideBar ({videos, myClick}){
  
  return (
    <aside className="sidebar">
      <section>
        <h2 className="sidebar__title">Next Videos</h2>

        <article className="sidebar__wrap-video">
          {videos.map((video) => (
            <section className="sidebar__wrap-word" key={video.id}>
              
                <video
                  control="controls"
                  poster={video.image}
                  onClick={(clickEvnt) => myClick(clickEvnt, video.id)}
                  className="sidebar__nextv"
                />
          
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
