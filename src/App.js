import React from 'react';
import { Head } from './components/Head';
import './App.css';
import { Slideshow } from './components/Slider';
import { Body } from './components/body';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Head />
      <React.Fragment>
        <Slideshow />
        <Body />
        <Footer />
      </React.Fragment>
    </div>


  );
}

export default App;
