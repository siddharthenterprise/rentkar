import React, { Component } from 'react'

import rental_s from '../images/icons/rental_s.png';
import listing_s from '../images/icons/listing_s.png';
import shareCredit_s from '../images/icons/shareCredit_s.png';
import verification_s from '../images/icons/verification_s.png';
import support_s from '../images/icons/support_s.png';
import settings_s from '../images/icons/settings_s.png';

import rental_g from '../images/icons/rental_g.png';
import listing_g from '../images/icons/listing_g.png';
import shareCredit_g from '../images/icons/shareCredit_g.png';
import verification_g from '../images/icons/verification_g.png';
import support_g from '../images/icons/support_g.png';
import settings_g from '../images/icons/settings_g.png';

import pencil from '../images/icons/pencil_white.png';

import './user_dash.css';
import { Card, Image } from "semantic-ui-react";

const icons = [rental_s, listing_s, shareCredit_s, verification_s, support_s, settings_s]
const icons_g = [rental_g, listing_g, shareCredit_g, verification_g, support_g, settings_g]
const iconDesc = ['My Rentals', 'My Listings', 'Share Credits', 'Verification', 'Help & Support', 'Settings']



export class User_dash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    changeIndex(index) {
        this.setState({
            index: index,
        })
    }

    render() {

        const DetailsCard = ({ index }) => (
            <Card
                className="detailsCard"
            >
                <Card.Content>
                    <Image
                        src={this.state.index == index ? icons[index] : icons_g[index]}
                        wrapped
                        ui={false}
                        onClick={() => { this.changeIndex(index) }}
                    />
                    <p>{iconDesc[index]}</p>
                </Card.Content>
            </Card>
        );

        return (
            <div className="dashboard">
                <div className="useropt">
                    <div className="user_detail">
                        <div className="first">
                            <div>
                                <img class="user_icon" src={require('../images/float_nav/abouto.png')} aria-hidden="true"></img>
                            </div>
                            <div className="user_name">
                                Username
                            </div>
                            <div className="userlocation">
                                <i class="fa fa-map-marker" aria-hidden="true"></i><p>Mumbai</p>
                            </div>
                        </div>
                        <div className="second">
                            <div className="mail">
                                <h4>userxyz@gmail.com</h4>
                                <h4>7000232401</h4>
                            </div>
                            <div className="marker">
                                <img id="pencil" src={pencil}></img>
                            </div>
                        </div>
                    </div>
                    <div className='details'>
                        {
                            iconDesc.map((item, index) => {
                                return <div>
                                    <DetailsCard index={index} />
                                </div>
                            })
                        }
                    </div>
                    <div className='buttons'>
                        <a href='#'>Terms & Conditions</a>
                        <a href='#'>Insurance Policy</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default User_dash