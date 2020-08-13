import React, { Component } from 'react';
import { about } from '../images/about.png';
import { search } from '../images/search.png';
import { home } from '../images/about.png';


import './Float.css';

export class Floatnav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: require('../images/home.png'),
            search: require('../images/search.png'),
            bag: require('../images/bagb.png'),
            about: require('../images/about.png')
        }
    }

    onHome = (e) => {
        this.setState({ home: require('../images/home.png') });
        this.setState({ bag: require('../images/bagb.png') });
        // this.setState({ about: require('../images/bagb.png') });

    }
    onSearch = (e) => {
        this.setState({ home: require('../images/homeo.png') });
        this.setState({ bag: require('../images/bagb.png') });

    }
    onBag = (e) => {
        this.setState({ home: require('../images/homeo.png') });
        this.setState({ bag: require('../images/bag.png') });
    }
    onAbout = (e) => {
        this.setState({ home: require('../images/homeo.png') });
        this.setState({ bag: require('../images/bagb.png') });
    }


    render() {
        return (
            <div className="floatnav">
                <div class="mtop">
                    <nav class="fixed-bottom text-center dark customnav">
                        <div class="d-flex justify-content-between">
                            <div class="container" id="home_float" onClick={this.onHome}>
                                <img src={this.state.home} className="img-thumbnail" />
                            </div>
                            <div class="container" onClick={this.onSearch}>

                                <img src={this.state.search} className="img-thumbnail" />
                            </div>
                            <div class="container" onClick={this.onBag}>
                                <img src={this.state.bag} className="img-thumbnail" />
                            </div>
                            <div class="container" onClick={this.onAbout}>
                                <img src={this.state.about} className="img-thumbnail" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Floatnav
