import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import logo1 from '../images/slide1.jpg';
import logo2 from '../images/slide2.jpg';
import logo3 from '../images/slide3.jpg';
// import logo4 from '../images/slide3.jpg';
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';
import './slide/slide.css';

const fadeImages = [
    logo1, logo2, logo3
];

export class Slideshow extends Component {
    render() {
        return (
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[0]} />
                        </div>

                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[1]} />
                        </div>

                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[2]} />
                        </div>

                    </div>
                </Fade>
            </div>
        )
    }
}
export default Slideshow;