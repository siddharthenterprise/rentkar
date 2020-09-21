import React, { Component } from 'react'
import Popup from "reactjs-popup";
import { Grid, Header } from 'semantic-ui-react';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './head.css'
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png'
import map from '../images/map.png';
import bag from '../images/bag.png';
import mumbai from '../images/Mumbai.png';
import pune from '../images/PuneC.png';
import mumbaig from '../images/Mumbaig.png';
import puneg from '../images/PuneCG.png';
import bar from "../images/icons/new icin-16.png";




export class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalshow: false,
            mumbai: true,
            pune: false,
            drop: true,
            mumbai_image: mumbai,
            pune_image: puneg
        };
        this.myRef = React.createRef();

    }
    onfocus = (e) => {
        this.setState({ drop: !this.state.drop });
    }
    onChangeMumbai = (e) => {
        this.setState({ mumbai: true });
        this.setState({ pune: false })
        this.setState({ pune_image: puneg })
        this.setState({ mumbai_image: mumbai })
        document.getElementById('city').click();

        console.log(this.state.mumbai);
    }
    onChangePune = (e) => {

        // this.setState({ m: this.state.mumbai, m: false });
        this.setState({ pune: true });
        this.setState({ mumbai: false });
        this.setState({ mumbai_image: mumbaig });
        this.setState({ pune_image: pune });
        document.getElementById('city').click();
        // e.target.close();


        // document.getElementsByClassName('pop').style.display = 'none';

    }
    render() {
        let addModalclose = () => { this.setState({ addModalshow: false }) };
        return (
            <div class="container fixed-top">
                <div className='main'>
                    <div className='image'>
                        <img src={logo}></img>
                    </div>
                    <div className='but' id="navmap">
                        <Popup className="pop" trigger={<button id="city"><img src={map}></img> {this.state.mumbai ? 'Mumbai' : 'Pune'} </button>} flowing hoverable>
                            <Grid className="popup_of_place" stretched divided rows={2}>
                                <Grid.Row className="popup_of_place1" onClick={this.onChangeMumbai} textAlign="left">
                                    <img className="imgage" src={this.state.mumbai_image} alt="hey" />
                                    <div className='header'>Mumbai</div>
                                    {this.state.mumbai === true ? <i class="fas fa-check" /> : null}
                                </Grid.Row>
                                <Grid.Row className="popup_of_place1" onClick={this.onChangePune} textAlign="left">
                                    <img className="imgage" src={this.state.pune_image} alt="hey" />
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
                        <Link to="/category"><button><img src={bag}></img>Bag</button></Link>
                    </div>
                    <div className='but' id='sign'>
                        <button onClick={() => this.setState({ addModalshow: true })}>Login/Sign Up</button>
                        <Login
                            show={this.state.addModalshow}
                            onHide={addModalclose} />
                    </div>
                    <div className="bar">
                        {/* <i class="fas fa-bars"></i> */}
                        <img src={bar} />
                    </div>

                </div>
            </div>

        )
    }
}

export default Head