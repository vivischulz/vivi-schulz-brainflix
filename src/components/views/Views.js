import "./Views.scss";


export default function Views({video}){
    const {title, channel, timestamp, description, views, likes, ...rest} = video;
    return (
      <>
        <section className="views">
          <h1 className="views__title">{title}</h1>
          <section className="views__detail">
            <div className="views__detail--left">
              <p className="views__author">By {channel}</p>
              <p className="views__date">{timestamp}</p>
            </div>
            <div className="views__detail--right">
              <div class="views__views">
                <span className="views__icon views__icon-views"></span>
                <sapn className="views__word">{views}</sapn>
              </div>
              <div class="views__likes">
                <span className="views__icon views__icon-likes"></span>
                <sapn className="views__word">{likes}</sapn>
              </div>
            </div>
          </section>
          <p className="views__p">{description}</p>
        </section>
      </>
    );
}