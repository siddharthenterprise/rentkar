import React, { Component } from 'react';
import { about } from '../images/about.png';
import { search } from '../images/search.png';
import { home } from '../images/about.png';


import './Float.css';

export class Floatnav extends Component {
    render() {
        return (
            <div className="floatnav">
                <div class="mtop">
                    <nav class="fixed-bottom text-center dark customnav">
                        <div class="d-flex justify-content-between">
                            <div class="container" id="home_float">
                                <img src={require('../images/home.png')} className="img-thumbnail" />
                            </div>
                            <div class="container">

                                <img src={require('../images/search.png')} className="img-thumbnail" />
                            </div>
                            <div class="container">
                                <img src={require('../images/bagb.png')} className="img-thumbnail" />
                            </div>
                            <div class="container">
                                <img src={require('../images/about.png')} className="img-thumbnail" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Floatnav
