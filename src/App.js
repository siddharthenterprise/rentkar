import React from 'react';
import { Head } from './components/Head';
import './App.css';
import { Slideshow } from './components/Slider';
import { Body } from './components/body';
import { Footer } from './components/Footer';
import { Floatnav } from './components/Floatnav';
import { Know_more } from './components/Know_more';
import { Category } from './components/Category';
import { User_dash } from './components/User_dash';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Floatnav className='floatnav' />
        <Head />
        <div className="PageContent">
          <Route exact path="/rentkar" render={props => (
            <React.Fragment>
              <Slideshow />
              <Body />
            </React.Fragment>

          )} />
          <Route path="/knowmore" render={props => (<Know_more />)}></Route>
          <Route path="/category" render={props => (<Category />)}></Route>
          <Route path="/about" render={props => (<User_dash />)}></Route>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;