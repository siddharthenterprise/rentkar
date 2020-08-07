import React, { Component } from 'react'
import Popup from "reactjs-popup";
import { Grid, Header } from 'semantic-ui-react';
import Login from './Login';

import './head.css'
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png'
import map from '../images/map.png';
import bag from '../images/bag.png';
import mumbai from '../images/mumbai.png';
import pune from '../images/pune.png';




export class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalshow: false,
            mumbai: true,
            pune: false,
            drop: true
        };

    }
    onfocus = (e) => {
        this.setState({ drop: !this.state.drop });
    }
    onChangeMumbai = (e) => {
        this.setState({ mumbai: true });
        this.setState({ pune: false })
        console.log(this.state.mumbai);
    }
    onChangePune = (e) => {

        // this.setState({ m: this.state.mumbai, m: false });
        this.setState({ pune: true });
        this.setState({ mumbai: false });

        console.log(this.state);

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
                        <Popup className="pop" trigger={<button onFocus={this.onfocus}><img src={map}></img> Mumbai </button>} flowing hoverable>
                            <Grid className="popup_of_place" stretched divided rows={2}>
                                <Grid.Row className="popup_of_place1" onClick={this.onChangeMumbai} textAlign="left">
                                    <img className="imgage" src={mumbai} alt="hey" />
                                    <div className='header'>Mumbai</div>
                                    {this.state.mumbai === true ? <i class="fas fa-check" /> : null}
                                </Grid.Row>
                                <Grid.Row className="popup_of_place1" onClick={this.onChangePune} textAlign="left">
                                    <img className="imgage" src={pune} alt="hey" />
                                    <div className='header'>Pune</div>

                                    {this.state.pune === true ? <i class="fas fa-check" /> : null}
                                </Grid.Row>
                            </Grid>
                        </Popup>
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
