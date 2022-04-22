import './App.css';
import Projects from './components/projects/Projects.js';
import Header from './components/header/Header.js';
import About from './components/about/About.js';
import Technologies from './components/technologies/Technologies.js'
import Footer from './components/footer/Footer.js';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Mario's Portfolio"
  }, [])

  return (
    <div className="App">
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
