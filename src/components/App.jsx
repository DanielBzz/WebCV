import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import EducationAndExperience from './EducationExp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <EducationAndExperience />
      <Footer />
    </div>
  );
}

export default App;
