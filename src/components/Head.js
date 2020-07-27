import React, { Component } from 'react'
import './head.css'
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png'
import map from '../images/map.png';


export class Head extends Component {
    render() {
        return (
            <div class="container">
                <div className='main'>
                    <div className='image'>
                        <img src={logo}></img>
                    </div>
                    <div className='but'>
                        <button><img src={map}></img> Mumbai</button>
                    </div>
                    <div className='searc'>
                        <input name='search' placeholder='Search for instruments,gaming gears,camera as...'></input>
                        <a><i class="fas fa-search"></i></a>
                        {/* <i class="fas fa-search"></i> */}


                    </div>
                    <div className='but'>
                        <button><i class="fas fa-shopping-bag"></i> Bag</button>
                    </div>
                    <div className='but' id='sign'>
                        <button>Login/Sign Up</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default Head
