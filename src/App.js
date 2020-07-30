import React from 'react';
import { Head } from './components/Head';
import './App.css';
import { Slideshow } from './components/Slider';
import { Body } from './components/body';
import { Footer } from './components/Footer';
import { Floatnav } from './components/Floatnav';

function App() {
  return (
    <div className="App">
      <Floatnav className='floatnav' />
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
