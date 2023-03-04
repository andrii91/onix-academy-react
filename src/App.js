import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
// import Roadmap from './components/Roadmap';
import ContentSlider from './components/ContentSlider';
import Author from './components/Author';
import Footer from './components/Footer';

// import CursorStyle from './components/CursorStyle';

function App() {
  return (
    <div className="App">
      {/* <CursorStyle /> */}
      <Header />
      <Hero />
      <main>
          {/* <Roadmap /> */}
          <ContentSlider />
          <Author />
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
