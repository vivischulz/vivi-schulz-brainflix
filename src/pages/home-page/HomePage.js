import HeroVideo from '../../components/heroVideo/HeroVideo';
import Views from '../../components/views/Views';
import Relatives from '../../components/relatives/Relatives';
import SideBar from '../../components/sidebar/SideBar';

export default function HomePage ({videoDetails, videos, myClick}){
    return (
      <>
        <HeroVideo video={videoDetails} />
        <section className="App__wrap">
          <section className="App__wrap-left">
            <Views video={videoDetails} />
            <Relatives comments={videoDetails.comments} />
          </section>
          <SideBar videos={videos} onVideoClick={myClick} />
        </section>
      </>
    );
}