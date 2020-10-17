import React from 'react';
import { ProductProvider } from './components/ProductContext';

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
  var w = window.screen.width
  return (
    <Router>
      <ProductProvider>
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
            <Route path="/category" render={props => (<Category index={props.location.index} index_product={props.location.index_product} />)}></Route>
            <Route path='/mylisting' render={props => (<User_dash ind={1} />)} />
            <Route path='/verification' render={props => (<User_dash ind={2} />)} />
            <Route path='/settings' render={props => (<User_dash ind={4} />)} />
            <Route path='/support' render={props => (<User_dash ind={3} />)} />
            {w < 992 ? <Route exact path="/home" render={props => (<User_dash ind={-1} />)} /> : null}
            <Route exact path="/about" render={props => (<User_dash ind={0} />)} />
          </div>
        </div>
      </ProductProvider>
      <Footer />
    </Router >
  );
}

export default App;