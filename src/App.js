import "../src/app.scss"
import Component from './components/component/Component';
import Header from './components/header/Header';
import HeroVideo from "./components/heroVideo/HeroVideo";
import Main from "./components/main/Main";



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
