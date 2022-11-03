import "./Views.scss";


export default function Views(){
    return (
      <>
        <section className="views">
          <h1 className="views__title">BMX Rampafe: 2021 Highlights</h1>
          <section>
            <div>
              <p className="views__author">By Red Crow</p>
              <p className="views__date">07/11/2021</p>
            </div>
            <div>
              <span className="views__icon-views"></span>
              <span className="views__icon-likes"></span>
            </div>
            <p className="views__p">
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
      </>
    );
}