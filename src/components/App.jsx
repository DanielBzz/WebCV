import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
