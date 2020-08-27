import React, { Component } from 'react'

import './user_dash.css';

export class User_dash extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="useropt">
                    <div className="user_detail">
                        <div className="first">
                            <div>
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </div>
                            <div className="user_name">
                                Username
                            </div>
                            <div className="userlocation">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>Mumbai
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
                        <div>

                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default User_dash
