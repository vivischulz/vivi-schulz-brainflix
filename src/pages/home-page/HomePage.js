import HeroVideo from '../../components/heroVideo/HeroVideo';
import Views from '../../components/views/Views';
import Relatives from '../../components/relatives/Relatives';
import SideBar from '../../components/sidebar/SideBar';

export default function HomePage({
  videos

}) {
  return (
    <>
      <HeroVideo />
      <section className="App__wrap">
        <section className="App__wrap-left">
          <Views  />
          <Relatives
            
          
          />
        </section>
        <SideBar videos={videos} />
      </section>
    </>
  );
}