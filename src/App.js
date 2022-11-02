import "../src/app.scss"
import Component from './components/component/Component';
import Header from './components/Header/Header';
import HeroVideo from "./components/HeroVideo/HeroVideo";
import Main from "./components/Main/Main";



function App() {
  return (
    <div className="App">
      {/* <Component /> */}
      <Header />
      <HeroVideo />
      <Main />
    </div>
  );
}

export default App;
