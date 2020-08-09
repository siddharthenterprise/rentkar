import React from 'react';
import { Head } from './components/Head';
import './App.css';
import { Slideshow } from './components/Slider';
import { Body } from './components/body';
import { Footer } from './components/Footer';
import { Floatnav } from './components/Floatnav';
import { Know_more } from './components/Know_more';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Floatnav className='floatnav' />
        <Head />
        <Route exact path="/rentkar" render={props => (
          <React.Fragment>
            <Slideshow />
            <Body />
          </React.Fragment>
        )} />
        <Route path="/knowmore" render={props => (<Know_more />)}></Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
