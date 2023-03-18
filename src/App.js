import './App.scss';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import Roadmap from './components/roadmap/Roadmap';
import ContentSlider from './components/content-slider/ContentSlider';
import Author from './components/author/Author';
import Footer from './components/Footer';
import Timer from './components/Timer';
import Image from "./components/image/Image";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
          <Roadmap />
          <ContentSlider />
          <Author />

          <div className='row'>
            <div className="col-2"> <Image src='https://picsum.photos/200/200' /> </div>
            <div className="col-2"> <Image src='https://picsum.photos/200/200' /> </div>
            <div className="col-2"> <Image src='https://picsum.photos/' /> </div>
            <div className="col-2"> <Image src='https://picsum.phoatos/200/200' /> </div>
          </div>
      </main>
      <Footer />
      <Timer />
    </div>
    
  );
}

export default App;
