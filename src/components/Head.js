import React, { Component } from 'react'
import Popup from "reactjs-popup";

import Login from './Login';

import './head.css'
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png'
import map from '../images/map.png';
import bag from '../images/bag.png';



export class Head extends Component {
    constructor(props) {
        super(props);
        this.state = { addModalshow: false };
    }
    render() {
        let addModalclose = () => { this.setState({ addModalshow: false }) };
        return (
            <div class="container">
                <div className='main'>
                    <div className='image'>
                        <img src={logo}></img>
                    </div>
                    <div className='but' id="navmap">
                        <button><img src={map}></img> Mumbai</button>
                    </div>
                    <div className='searc'>
                        <input name='search' placeholder='Search for instruments,gaming gears,camera as...'></input>
                        <a><i class="fas fa-search"></i></a>
                        {/* <i class="fas fa-search"></i> */}


                    </div>
                    <div className='but' id="bag">
                        <button><img src={bag}></img>Bag</button>
                    </div>
                    <div className='but' id='sign'>
                        <button onClick={() => this.setState({ addModalshow: true })}>Login/Sign Up</button>
                        <Login
                            show={this.state.addModalshow}
                            onHide={addModalclose} />
                    </div>
                    <div className="bar">
                        <i class="fas fa-bars"></i>
                    </div>

                </div>
            </div>

        )
    }
}

export default Head
