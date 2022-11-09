import HeroVideo from '../../components/heroVideo/HeroVideo';
import Views from '../../components/views/Views';
import Relatives from '../../components/relatives/Relatives';
import SideBar from '../../components/sidebar/SideBar';

export default function HomePage({
  videos,
  videoDetails,
  searchVideoByVideoId,
  searchByVideoName
}) {
  return (
    <>
      <HeroVideo videos={videos} 
      searchByVideoName={searchByVideoName} />
      <section className="App__wrap">
        <section className="App__wrap-left">
          <Views video={videoDetails} />
          <Relatives
            videoDetails={videoDetails}
            searchVideoByVideoId={searchVideoByVideoId}
          />
        </section>
        <SideBar videos={videos} />
      </section>
    </>
  );
}