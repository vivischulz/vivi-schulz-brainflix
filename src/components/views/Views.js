import "./Views.scss";


export default function Views({video}){
    const {title, channel, timestamp, description, ...rest} = video;
    return (
      <>
        <section className="views">
          <h1 className="views__title">{title}</h1>
          <section>
            <div>
              <p className="views__author">By {channel}</p>
              <p className="views__date">{timestamp}</p>
            </div>
            <div>
              <span className="views__icon-views"></span>
              <span className="views__icon-likes"></span>
            </div>
            <p className="views__p">
             {description}
            </p>
          </section>
        </section>
      </>
    );
}