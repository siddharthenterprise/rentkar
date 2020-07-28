import React, { Component, useState } from 'react'
import { Card, Icon, Feed, Image, Button } from "semantic-ui-react";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './body.css';

import sanitise from "../images/covid sefty web-03.png";
import hygienic from "../images/covid sefty web-04.png";
import imgcovid from "../images/covid.png";
import musical from '../images/musical.jpg';
import gaming from '../images/gaming.jpg';
import guitar from '../images/guitar.png';
import share from '../images/share.png';
import icon1 from '../images/changes_icon-01.png';
import icon2 from '../images/changes_icon-02.png';
import icon3 from '../images/changes_icon-03.png';
import icon4 from '../images/changes_icon-04-2.png';
import icon5 from '../images/changes_icon-05.png';
import cust1 from '../images/cust1.png';
import cust2 from '../images/cust2.png';
import wave from '../images/wave.png';


import Corousel from './corousel';
import Slide_corousel from './Slide_corousel';



export class Body extends Component {

    render() {
        // 


        // const goLeft = () => {
        //     setX(x + 100);
        // };
        // const goRight = () => {
        //     setX(x - 100);
        // };


        return (
            <div>
                <div className="covid">
                    <div>
                        <img src={imgcovid} />
                    </div>
                    <div className='covid_text'>
                        <h4>Safety precaution during COVID-19</h4>
                        <p>We are taking additional steps and precautionary measures to protect our community from COVID-19</p>
                    </div>
                    <div className="card">
                        <div className="card1">
                            <img src={sanitise} />
                            <div>
                                <h5>Sanitised Products</h5>
                                <h7 id='alag'>Know more <i class="fas fa-chevron-circle-right"></i></h7>
                            </div>
                        </div>
                        <div className="card2">
                            <img src={hygienic} />
                            <div>
                                <h5>Hygienic deliveries</h5>
                                <h7 id='alag'>Know more <i class="fas fa-chevron-circle-right"></i></h7>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list'>
                    <div className='Heading'>
                        <h1>EXPLORE CATEGORIES</h1>
                    </div>
                    <div className='category'>
                        <div className='catcard'>
                            <Card className='ccard'>
                                <Image src={gaming} wrapped ui={false} />
                                <Card.Content
                                    className='cathead'>
                                    <Card.Header>GAMING</Card.Header>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className='catcard'>
                            <Card className='ccard'>
                                <Image src={musical} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header >MUSICAL</Card.Header>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className='catcard'>
                            <Card className='ccard'>
                                <Image src={gaming} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header >CAMERAS</Card.Header>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className='catcard'>
                            <Card className='ccard'>
                                <Image src={musical} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header >LAPTOP</Card.Header>
                                </Card.Content>
                            </Card>
                        </div>

                    </div>
                </div>
                <div className='list2'>
                    <div className='Heading'>
                        <h1>WHAT'S HOT?</h1>
                    </div>

                    <div className='category'>

                        <Slide_corousel />

                    </div>


                </div>
                <div className='list3'>
                    <div className='final'>


                        <div className='para'>
                            <div>
                                <h1>LIST YOUR ITEM</h1>
                            </div>
                            <h4>We help you share</h4>
                            <p>Join our community of lenders sharing their products all around the city.We help you with delivery,pick up and total security of your peoducts</p>
                            <div className='button'>
                                <Button className='button1'>Learn more</Button>
                                <Button className='button2'>List an item</Button>
                            </div>
                        </div>
                        <div>
                            <img src={share}></img>
                        </div>

                    </div>
                </div>
                <div className='list4'>
                    <div className='final'>


                        <div className='para'>
                            <div>
                                <h1>START EARNING NOW</h1>
                            </div>
                            <h4>Earn from the products shared securely around the city</h4>
                            <p>Also get 100 INR Share credit on listing each item and 250 INR Share Credit on getting your friend on board to list their items</p>

                        </div>
                        <div className='button'>
                            <Button className='button1'>Start Earning </Button>
                            <Button className='button2'>Learn more</Button>
                        </div>

                    </div>
                </div>

                <div className='promise'>
                    <div>
                        <h4>OUR PROMISES</h4>
                    </div>
                    <div className='parts'>
                        <div>
                            <Card className='same_card'>
                                <img className='logos' src={icon1} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header><h4>No Security Deposit</h4></Card.Header>
                                    <Card.Description>
                                        <p>Rent is the only fee you pay</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='same_card'>
                                <img className='logos' src={icon2} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header><h4>No Security Deposit</h4></Card.Header>
                                    <Card.Description>
                                        <p>Rent is the only fee you pay</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='same_card'>
                                <img className='logos' src={icon3} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header><h4>Spend less, Explore more</h4></Card.Header>
                                    <Card.Description>
                                        <p>Rent is the only fee you pay</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='same_card'>
                                <img className='logos' src={icon4} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header><h4>Share & Earn</h4></Card.Header>
                                    <Card.Description>
                                        <p>Rent is the only fee you pay</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='same_card'>
                                <img className='logos' src={icon5} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header><h4>Live Lighter</h4></Card.Header>
                                    <Card.Description>
                                        <p>Rent is the only fee you pay</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>

                </div>
                <div className='customers'>
                    <div className='custom'>
                        <div className='special'>
                            <h4>NOTE FROM OUR HAPPY CUSTOMER</h4>
                        </div>
                        <div className='customer'>

                            <div>
                                <Card className='descr'>
                                    <div className='straight'>
                                        <div>
                                            <img src={cust1}></img>
                                        </div>
                                        <div className='name_rating'>
                                            <div >
                                                <h4>Shivam Wadhwa</h4>
                                            </div>
                                            <div>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Ordered Yamaha acoustic guitar through
                                            rentkar, they offer great gadgets at a very
                                            cheap price 🤘🏽. Highly recommended.
                                        </p>
                                    </div>
                                </Card>
                            </div>
                            <div>
                                <Card className='descr'>
                                    <div className='straight'>
                                        <div>
                                            <img src={cust2}></img>
                                        </div>
                                        <div className='name_rating'>
                                            <div >
                                                <h4>Shivam Wadhwa</h4>
                                            </div>
                                            <div>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Rentkar is really good!! The quality of the
                                            product is brilliant. The service is also
                                            spot on. They make sure that the product
                                            is delivered as well as picked up on time.
                                            Highly recommended..
                                        </p>
                                    </div>
                                </Card>
                            </div>
                            <div>
                                <Card className='descr'>
                                    <div className='straight'>
                                        <div>
                                            <img src={cust1}></img>
                                        </div>
                                        <div className='name_rating'>
                                            <div >
                                                <h4>Shivam Wadhwa</h4>
                                            </div>
                                            <div>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Rentkar is really good!! The quality of the
                                            product is brilliant. The service is also
                                            spot on. They make sure that the product
                                            is delivered as well as picked up on time.
                                            Highly recommended..
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;