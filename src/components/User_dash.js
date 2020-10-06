import React, { Component } from 'react'

import rental_s from '../images/icons/rental_s.png';
import listing_s from '../images/icons/listing_s.png';
import shareCredit_s from '../images/icons/shareCredit_s.png';
import verification_s from '../images/icons/verification_s.png';
import support_s from '../images/icons/support_s.png';
import settings_s from '../images/icons/settings_s.png';
import support_person from "../images/supportPerson.png"
import down_arrow from "../images/down_arrow.png"
import ques from "../images/ques.png"
import whatsAppSupport from "../images/whatsAppSupport.png"
import phone from "../images/phone.png"
import selectedPage from "../images/selectedPage.png"
import unSelectedPage from "../images/unselectedPage.png"
import camera from "../images/camera.png"
import uploadSelfie from "../images/uploadSelfie.png"

import rental_g from '../images/icons/rental_g.png';
import listing_g from '../images/icons/listing_g.png';
import shareCredit_g from '../images/icons/shareCredit_g.png';
import verification_g from '../images/icons/verification_g.png';
import support_g from '../images/icons/support_g.png';
import settings_g from '../images/icons/settings_g.png';

import pencil from '../images/icons/pencil_white.png';
import pencil_b from '../images/icons/pencil.png';
import guitar from "../images/guitar2.png";
import person from '../images/person.png'
import add from "../images/add.png"
import upload from "../images/upload.png"
import edit from "../images/edit.png"
import radio_button from "../images/radio_button.png"

import './user_dash.css';
import { Button, Card, Image } from "semantic-ui-react";

const icons = [rental_s, listing_s, verification_s, support_s, settings_s]
const icons_g = [rental_g, listing_g, verification_g, support_g, settings_g]
const iconDesc = ['My Rentals', 'My Listings', 'Verification', 'Help & Support', 'Settings']

class My_bag extends Component {
    render() {
        const Order_card = () => (
            <div class="buttons_mobileview">
                <div class="image_detail">
                    <div class="image">
                        <img src={guitar} alt="product" />
                    </div>
                    <div class="detail">
                        <div class="name">
                            <div class="main_head">
                                <div>
                                    <h4 style={{ 'fontWeight': '700' }}>Fender Bullet Stratocaster</h4>
                                </div>
                                <div>
                                    <h6 style={{ 'color': 'red', fontWeight: '600' }}>Hurry? Only few in stock</h6>
                                </div>
                            </div>
                            <div class="edit_order">
                                <h6 style={{ 'color': '#1bacf4' }}><a>Edit Order<img src={pencil_b}></img></a><span> | </span><a style={{ 'color': 'red' }}>Remove<i class="fas fa-trash-alt"></i></a></h6>
                            </div>
                        </div>
                        <div class="price">
                            <div class="rent">
                                <div className="name__">
                                    <h6 >Rent</h6>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: "600" }}><i class="fas fa-rupee-sign    "></i>  190 /Day</h4>
                                </div>
                            </div>
                            <div class="tenure">
                                <div className="name__">
                                    <h6>Tenure <i class="far fa-clock"></i></h6>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: "600" }}>2 Weeks</h4>
                                </div>
                            </div>
                            {/* <div class="deposit">
                            <div className="name__">
                                <h6>Deposit</h6>
                            </div>

                            <h4 style={{ fontWeight: "600" }}>0</h4>
                        </div> */}

                        </div>
                        <div class="total">
                            <div class="mybag_button">
                                <div class="placeorder">
                                    <button className="but1">Place Order</button>
                                </div>
                                <div class="saveforlater">
                                    <button className="but2">Save for Later</button>
                                </div>

                            </div>

                            <div>
                                <div class="total_price">
                                    <h4 style={{ fontWeight: "600" }}>Total: <i class="fas fa-rupee-sign    "></i> 2660</h4>
                                    <h6 style={{ fontWeight: "600", color: "#1bacf4" }} className="pricebreakdown"><i class="fas fa-exclamation-circle"></i>Price Breakdown</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div class="mobile_button">
                    <div class="mybag_button">
                        <div class="placeorder">
                            <button className="but1">Place Order</button>
                        </div>
                        <div class="saveforlater">
                            <button className="but2">Save for Later</button>
                        </div>
                        <div class="saveforlater">
                            <button className="but2">Remove</button>
                        </div>
                    </div>

                    <div>
                        <div class="total_price">
                            <h4 style={{ fontWeight: "600" }}>Total: <i class="fas fa-rupee-sign    "></i> 2660</h4>
                            <h6 style={{ fontWeight: "600", color: "#1bacf4" }} className="pricebreakdown"><i class="fas fa-exclamation-circle"></i>Price Breakdown</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div>
                <div className="order_card">
                    <Order_card />

                </div>
                <div className="order_card">
                    <Order_card />
                </div>
                <div className="checkout">
                    <div className="cost">
                        <h6>Total:  &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-rupee-sign    "></i>5460 &nbsp;&nbsp;|&nbsp;&nbsp; Delivery by 21 September <i class="fa fa-truck" aria-hidden="true"></i></h6>
                    </div>
                    <div class="cost_mobile">
                        <h6>Total:  &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-rupee-sign    "></i>5460 <br></br> Delivery by 21 September <i class="fa fa-truck" aria-hidden="true"></i></h6>

                    </div>

                    <div className="checkout_button">
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        );
    }
}

class MyListing extends Component {
    render() {
        const Order_card = () => (
            <div class="image_detail">
                <div class="image">
                    <img src={guitar} alt="product" />
                </div>
                <div class="detail">
                    <div class="name">
                        <div class="main_head">
                            <div>
                                <h4 style={{ 'fontWeight': '700' }}>Fender Bullet Stratocaster</h4>
                            </div>
                            <div>
                                <h6 style={{ 'color': ' #19eeb5', fontWeight: '600', fontSize: '15px' }}>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </h6>
                            </div>
                        </div>

                    </div>
                    <div class="product__status">
                        <div>
                            <h6 style={{ 'color': '#1bacf4', textAlign: 'initial', fontWeight: 'bold', cursor: 'pointer' }}><i class="fas fa-circle"></i> &nbsp; Your Product is Live</h6>
                        </div>
                        <div>
                            <h6 style={{ 'color': 'red', textAlign: 'initial', fontWeight: 'bold', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i> &nbsp; Remove</h6>
                        </div>

                    </div>

                </div>
            </div >
        )
        return (
            <div>
                <div className="my__listing">
                    <Order_card />

                </div>
                <div className="my__listing">
                    <Order_card />
                </div>
            </div>
        );
    }

}

class Verification extends Component {
    render() {
        return (<div className="right_content">
            <div className="verificationList">
                <div className="listItem">
                    <div>
                        <Image className="verifyImage1" src={person} />
                    </div>
                    <p>Personal Information</p>
                    <div className="changeButton">
                        <Image src={edit} />
                        <p>Change</p>
                    </div>
                </div>
                <div className="listItem">
                    <Image className="verifyImage1" src={add} />
                    <p>ADD A SELFIE (Upload your selfie)</p>
                </div>
                <div className="listItem">
                    <Image className="verifyImage2" src={upload} />
                    <p>Upload Documents (Verification with Driving License / Passport)</p>
                </div>
                <div className="listItem">
                    <Image className="verifyImage2" src={upload} />
                    <p>Verify Instantly with Aadhar Card</p>
                </div>
                <div id="financialVerification" className="listItem">
                    <Image className="verifyImage2" src={upload} />
                    <p>Financial Verification (Upload bank statement for 3 months)</p>
                </div>
            </div>
            <div className="verificationProgressComplete">
                <div className="progressDiv">
                    <Image className="vButton1" src={radio_button} />
                    <p>10%</p>
                </div>
                <div className="vl1" />
                <div className="progressDiv">
                    <Image className="vButton2" src={radio_button} />
                    <p>80%</p>
                </div>
                <div className="vl2" />
                <div className="progressDiv">
                    <Image className="vButton2" src={radio_button} />
                    <p>100%</p>
                </div>
            </div>
        </div>)
    }
}

class MobileVerification extends Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    

    render(){

        const Verify_detail_card = (props) => {
            return (
                <div className="verify_detail_card">
                    <div class="verify__userdetail">
                        <div class="name">
                            <p>{props.name}</p>
                        </div>
                        <div class="userName">
                            <h6>{props.username}</h6>
                        </div>
                    </div>
                    <div class="verify__change">
                        <h6 style={{ 'color': '#1bacf4', fontSize: '12px' }}><a>Change<img src={pencil_b}></img></a></h6>
                    </div>
                </div>);
        }

        const Address_detail_card = (props) => {
            return (
                <div className="verify_detail_card">
                    <input className = "addressDetail" for="text" placeholder = {props.placeholder}/>
                </div>
            );
        }


        return (
            <div className="mobileVerification">
                <div className = "verifyPage1">
                    <div className = "Page">
                        <h2>Personal Verification</h2>
                        <Verify_detail_card name = {"Name"} username = {"Arnab Dey"} />
                        <Verify_detail_card name = {"Date of Birth"} username = {"31/03/2001"} />
                        <Address_detail_card line = { 1 } placeholder = "Address Line 1"/>
                        <p className = "Label">Enter Address</p>
                        <Address_detail_card line = { 2 } placeholder = "Address Line 2"/>
                        <Button onClick = {() => { 
                            document.getElementsByClassName('verifyPage2')[0].style.display = "block"
                            document.getElementsByClassName('verifyPage1')[0].style.display = "none"
                            }
                        }>Continue</Button>
                        <p className = "Label" style = {{ marginTop: "20px", textAlign: "center", marginBottom: "20px"}}>Verification Score : 10%</p>
                        <div className = "selections">
                            <img src = { selectedPage}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                        </div>
                    </div>
                </div>
                <div className = "verifyPage2">
                    <div className = "Page">
                        <h2>Selfie Verification</h2>
                        <Card className="selfieCard">
                            <Card.Content>
                                <Image
                                    src={camera}
                                    wrapped
                                    ui={false}
                                    onClick={() => {  }}
                                />
                                <p>Take a Selfie</p>
                            </Card.Content>
                        </Card>
                        <Button className = "selfieButton" style = {{ opacity: "0.3", background: "#fff", color: "#000"}}>
                            <div className = "buttonContent">
                                <img src={uploadSelfie}/>
                                <p>Upload a Selfie</p>
                            </div>
                        </Button>
                        <Button className = "selfieButton" style = {{ opacity: "0.3", background: "#fff", color: "#000", marginTop: "20px"}}>
                            <div className = "buttonContent">
                                <img src={pencil_b} style ={{width: "70px", marginTop: "-10px"}}/>
                                <p style = {{marginTop: "-10px"}}>Change Selfie</p>
                            </div>
                        </Button>
                        <Button style = {{ opacity: "0.3"}} onClick = {() => { 
                            document.getElementsByClassName('verifyPage3')[0].style.display = "block"
                            document.getElementsByClassName('verifyPage2')[0].style.display = "none"
                            }
                        }>Continue</Button>
                        <p className = "Label" style = {{ marginTop: "20px", textAlign: "center", marginBottom: "20px"}}>Verification Score : 50%</p>
                        <div className = "selections">
                            <img src = { unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = { selectedPage}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                        </div>
                    </div>
                </div>
                <div className = "verifyPage3">
                    <div className = "Page">
                        <h2>Identity Verification</h2>
                        <Button className = "selfieButton" style = {{ background: "#fff", color: "#000", marginTop: "20px"}}>
                            <div className = "buttonContent">
                                <img src={uploadSelfie}/>
                                <p>Upload Driving License</p>
                            </div>
                        </Button>
                        <h6>OR</h6>
                        <Button className = "selfieButton" style = {{ background: "#fff", color: "#000", marginTop: "20px"}}>
                            <div className = "buttonContent">
                                <img src={uploadSelfie} />
                                <p style = {{marginTop: "-10px"}}>Update Passport</p>
                            </div>
                        </Button>
                        <h6>OR</h6>
                        <Button className = "selfieButton" style = {{ background: "#fff", color: "#000", marginTop: "20px"}}>
                            <div className = "buttonContent">
                                <img src={uploadSelfie} />
                                <p style = {{marginTop: "-10px"}}>Verify instantly with Aadhaar Card</p>
                            </div>
                        </Button>
                        <Button >Complete Verification</Button>
                        <Button className = "selfieButton" 
                                style = {{ background: "#fff", color: "#000", marginTop: "20px"}}
                                onClick = {() => { 
                                    document.getElementsByClassName('verifyPage4')[0].style.display = "block"
                                    document.getElementsByClassName('verifyPage3')[0].style.display = "none"
                                    }
                                }>
                            Continue with your Order
                        </Button>
                        <p className = "Label" style = {{ marginTop: "20px", textAlign: "center", marginBottom: "20px"}}>Verification Score : 10%</p>
                        <div className = "selections">
                            <img src = { unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = { selectedPage}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                        </div>
                    </div>
                </div>
                <div className = "verifyPage4">
                    <div className = "Page">
                        <h2>Financial Verification</h2>
                        <Button className = "selfieButton" style = {{ background: "#fff", color: "#000", marginTop: "10px"}}>
                            <div className = "buttonContent">
                                <img src={uploadSelfie}/>
                                <p>Upload Bank Statement</p>
                            </div>
                        </Button>
                        <p className = "Label" style = {{marginTop: "5px"}}>Upload Bank Statement for 3 months</p>
                        <Button style = {{ marginTop: "300px" }} onClick = {() => { } }>Finish</Button>
                        <p className = "Label" style = {{ marginTop: "20px", textAlign: "center", marginBottom: "20px"}}>Verification Score : 100%</p>
                        <div className = "selections">
                            <img src = { unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = {unSelectedPage} style = {{ border: "none", width: "20px", height: "20px"}}></img>
                            <img src = { selectedPage}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Settings extends Component {
    render() {
        const Setting_detail_card = (props) => {
            return (
                <div className="setting_detail_card">
                    <div class="setting__userdetail">
                        <div class="name">
                            <p>{props.name}</p>
                        </div>
                        <div class="userName">
                            <h6>{props.username}</h6>
                        </div>
                    </div>
                    <div class="setting__change">
                        <h6 style={{ 'color': '#1bacf4', fontSize: '12px' }}><a>Change<img src={pencil_b}></img></a></h6>
                    </div>
                </div>);
        }
        return (
            <div className="settings">
                <div class="setting__profile">
                    <div class="profile_photo">
                        <img class="user_icon" src={require('../images/float_nav/abouto.png')} aria-hidden="true"></img>
                    </div>
                    <div class="profile__name__address">
                        <div class="name">
                            Arnab Dey
                        </div>
                        <div class="location">
                            <i class="fa fa-map-marker"></i><p>Mumbai</p>
                        </div>
                    </div>
                </div>
                <Setting_detail_card name={"Name"} username={"Siddharth"} />
                <Setting_detail_card name={"Email"} username={"sid@rentkar.com"} />
                <Setting_detail_card name={"Mobile Number"} username={"982304234"} />
                <Setting_detail_card name={"Date Of Birth"} username={"31/03/2001"} />
                <Button>Change Password</Button>
            </div>
        );
    }
}

class Support extends Component{

    constructor(props){
        super(props)
        this.state = {
            drop1: 0,
            drop2: 0
        }

        this.dropMenu1 = this.dropMenu1.bind(this)
    }

    dropMenu1(){
        if(this.state.drop1 == 1){
            this.setState({drop1: 0})
            document.getElementById("dropContent1").style.display = "none"
        }
        else{
            document.getElementById("dropContent1").style.display = "block"
            this.setState({ drop1: 1 })
        }
    }

    dropMenu2(){
        if(this.state.drop2 == 1){
            this.setState({drop2: 0})
            document.getElementById("dropContent2").style.display = "none"
        }
        else{
            document.getElementById("dropContent2").style.display = "block"
            this.setState({ drop2: 1 })
        }
    }

    render(){
        return (
            <div className = "supportScreen">
                <div className="supportButtonDiv">
                    <button className="supportButton" onClick = { () => this.dropMenu1() }>
                        <div className = "buttonContent">
                            <img className = "iconImage" src = { support_person }/>
                            <p>Generate a quick request</p>
                            <img src = { down_arrow }  style = {{ marginLeft: "auto", marginRight: "0px", paddingLeft: "5px"  }}/>
                        </div>
                    </button>
                    <div id = "dropContent1" className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className="supportButtonDiv">
                    <button className="supportButton">
                        <div className = "buttonContent">
                            <img className = "iconImage" src = { phone } style = {{ width: "20px", height: "30px" }}/>
                            <p>Call Us</p>
                        </div>
                    </button>
                </div>

                <div className="supportButtonDiv">
                    <button className="supportButton">
                        <div className = "buttonContent">
                            <img className = "iconImage" src = { whatsAppSupport }/>
                            <p>Ping us on WhatsApp</p>
                        </div>
                    </button>
                </div>

                <div className="supportButtonDiv">
                    <button className="supportButton" onClick = { () => this.dropMenu2() }>
                        <div className = "buttonContent">
                            <i className = "iconImage fa fa-question-circle" />
                            <p>FAQs</p>
                            <img src = { down_arrow }  style = {{ marginLeft: "auto", marginRight: "0px", paddingLeft: "5px" }}/>
                        </div>
                    </button>
                    <div id = "dropContent2" className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        )
    }
}


export class User_dash extends Component {

    constructor(props) {
        super(props);
        var w = window.screen.width
        if(w < 992)
            this.state = {
                index: -1
            }
        else
        this.state = {
            index: 0
        }
    }

    changeIndex(index) {
        this.setState({
            index: index,
        })
        var w = window.screen.width
        if(w < 992)
            document.getElementsByClassName('useropt')[0].style.display = 'none'
            document.getElementsByClassName('right_screen')[0].style.display = 'block'
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
                <div class="right_screen">
                    <div class="userdash">
                        <div class="userdash_header">
                            <p style={{ marginTop: "5px" }}>Home</p>
                            <h3 style={{ paddingLeft: "10px", paddingRight: "10px" }}>{">"}</h3>
                            <p style={{ marginTop: "5px" }}>My Account
                            </p>
                            <h3 style={{ paddingLeft: "10px", paddingRight: "10px" }}>{">"}</h3>
                            <p style={{ marginTop: "5px", color: "#1bacf4" }}>{iconDesc[this.state.index]}</p>
                            {this.state.index == 1 ? <Button className="mylisting__button">ADD +</Button> : null}
                            {this.state.index == 2 ? <p style={{ marginTop: "5px", color: "#0B90D3", marginLeft: "auto", marginRight: "0px" }}>Verification status: 100%</p> : null}
                        </div>
                    </div>
                    {this.state.index == 1 ? <MyListing /> : null}
                    {this.state.index == 0 ? <My_bag /> : null}
                    {this.state.index == 2 ? <Verification /> : null}
                    {this.state.index == 2 ? <MobileVerification /> : null}
                    {this.state.index == 3 ? <Support /> : null}
                    {this.state.index == 4 ? <Settings /> : null}

                </div>
            </div>
        )
    }
}

export default User_dash