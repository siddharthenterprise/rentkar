import React, { Component, useState, useEffect, useContext } from 'react'
import Popup from "reactjs-popup";
import { Grid, Header } from 'semantic-ui-react';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './head.css'
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png'
import map from '../images/map.png';
import bag from '../images/bag.png';
import mumbai_c from '../images/Mumbai.png';
import pune_c from '../images/PuneC.png';
import mumbaig from '../images/Mumbaig.png';
import puneg from '../images/PuneCG.png';
import bar from "../images/icons/new icin-16.png";

import { ProductContext } from '../components/ProductContext';




export const Head = (props) => {
    const [product, setproduct] = useContext(ProductContext);
    const [count, setcount] = useState();
    useEffect(() => {
        setcount(product.length);


    }, [product])


    const [addModalshow, setaddModalshow] = useState(false);
    const [mumbai, setmumbai] = useState(true);
    const [pune, setpune] = useState(false);
    const [drop, setdrop] = useState(true);
    const [mumbai_image, setmumbai_image] = useState(mumbai_c);
    const [pune_image, setpune_image] = useState(puneg);

    const onfocus = (e) => {

        setdrop(!drop);
    }
    const onChangeMumbai = (e) => {
        setmumbai(true);
        setpune(false);
        setpune_image(puneg);

        setmumbai_image(mumbai_c);

        document.getElementById('city').click();
    }
    const onChangePune = (e) => {

        // this.setState({ m: this.state.mumbai, m: false });
        setmumbai(false);
        setpune(true);
        setpune_image(pune_c);

        setmumbai_image(mumbaig);


        document.getElementById('city').click();
        // e.target.close();


        // document.getElementsByClassName('pop').style.display = 'none';

    }

    let addModalclose = () => { setaddModalshow(false) };
    return (
        <div class="container fixed-top">
            <div className='main'>
                <div className='image'>
                    <img src={logo}></img>
                </div>
                <div className='but' id="navmap">
                    <Popup className="pop" trigger={<button id="city"><img src={map}></img> {mumbai ? 'Mumbai' : 'Pune'} </button>} flowing hoverable>
                        <Grid className="popup_of_place" stretched divided rows={2}>
                            <Grid.Row className="popup_of_place1" onClick={onChangeMumbai} textAlign="left">
                                <img className="imgage" src={mumbai_image} alt="hey" />
                                <div className='header'>Mumbai</div>
                                {mumbai === true ? <i class="fas fa-check" /> : null}
                            </Grid.Row>
                            <Grid.Row className="popup_of_place1" onClick={onChangePune} textAlign="left">
                                <img className="imgage" src={pune_image} alt="hey" />
                                <div className='header'>Pune</div>

                                {pune === true ? <i class="fas fa-check" /> : null}
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
                    <Link to="/category"><button><img src={bag}></img>Bag<span style={{ position: 'relative', top: '-10px', right: '-8px', padding: '5px 10px', borderRadius: '100%', background: 'red', color: 'white', marginRight: '-25px' }}>{count}</span></button></Link>
                </div>
                <div className='but' id='sign'>
                    <button onClick={() => setaddModalshow(true)}>Login/Sign Up</button>
                    <Login
                        show={addModalshow}
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

export default Head