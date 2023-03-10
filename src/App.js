import './App.scss';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import Roadmap from './components/roadmap/Roadmap';
import ContentSlider from './components/content-slider/ContentSlider';
import Author from './components/author/Author';
import Footer from './components/Footer';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
          <Roadmap />
          <ContentSlider />
          <Author />
      </main>
      <Footer />
      <Timer />
    </div>
    
  );
}

export default App;
