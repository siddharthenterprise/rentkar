import React, { Component } from 'react'
import rental from '../images/changes_icon-01.png';
import listing from '../images/changes_icon-02.png';
import shareCredit from '../images/changes_icon-03.png';
import verification from '../images/icons/covid safety-07.png';
import support from '../images/changes_icon-05.png';
import settings from '../images/icons/catogories-42.png';
import './user_dash.css';
import { Card, Image } from "semantic-ui-react";

const icons = [rental, listing, shareCredit, verification, support, settings]
const iconDesc = ['My Rentals', 'My Listings', 'Share Credits', 'Verification', 'Help & Support', 'Settings']

export class User_dash extends Component {
    render() {

        const DetailsCard = ({ index }) => (
            <Card
                className="detailsCard"
            >
                <Card.Content>
                    <Image
                        src={icons[index]}
                        wrapped
                        ui={false}
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
                                <i class="far fa-edit"></i>
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