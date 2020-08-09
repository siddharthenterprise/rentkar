import React, { Component } from 'react'
import sanitise from "../images/covid sefty web-03.png";
import hygienic from "../images/covid sefty web-04.png";
import imgcovid from "../images/covid.png";
import lock from "../images/lock.png";
import bag from "../images/bag+.png";
import tick from "../images/tick_circle.png";
import VPlayer from './VPlayer';
import Testimonials from './Testimonials';
import cust1 from '../images/cust1.png';
import cust2 from '../images/cust2.png';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import KnowImg from '../images/share.png';




import './know_more.css';
import { Header } from 'semantic-ui-react';

export class Know_more extends Component {
    render() {
        return (
            <div className="father">
                <div className='wrap'>
                    <div className='intro'>
                        <h2 className='headers'>JOIN OUR COMMUNITY OF LENDERS SHARING THEIR ITEMS</h2>
                        <div className='introPara'>
                            <div>
                                <p>Share any underused products lying down at your home securely.</p>
                                <p>From mobile phones, cameras, Gaming consoles, furniture and anything that you can think of can be shared and earned a passive income from.</p>
                                <p>Make your investments recover securely.</p>
                                <Button className='listingButton' floated='left'>Start Listing</Button>
                            </div>
                            <div>
                                <img src={KnowImg} />
                            </div>
                        </div>
                    </div>


                </div>
                <div className='videos'>
                    <div>
                        <VPlayer numb={0} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <div>
                        <VPlayer numb={1} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                </div>

                <div className='Testimonials'>
                    <h2 className='headers'>LENDER'S TESTIMONIALS</h2>
                    <div className='customer'>
                        <div>
                            <Card className='descr'>
                                <div>
                                    <img src={cust2}></img>
                                </div>
                                <div className='straight'>

                                    <div className='name_rating'>
                                        <div >
                                            <h4>Shivam Wadhwa</h4>
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
                                <div>
                                    <img src={cust1}></img>
                                </div>
                                <div className='straight'>

                                    <div className='name_rating'>
                                        <div >
                                            <h4>Shivam Wadhwa</h4>
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
                <div className="covid">
                    <div>
                        <img src={imgcovid} />
                    </div>
                    <div className='covid_text'>
                        <h4>Safety precaution during COVID-19</h4>
                        <p>We are taking additional steps and precautionary measures to protect our community from COVID-19</p>
                        <button id='button_knowmore'>Know more</button>

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
                <div className='processes'>
                    <div>
                        <h1>HOW DO WE MAKE THIS PROCESS SECURE ?</h1>
                    </div>
                    <div className="process">
                        <div className="single_card">
                            <div className='immga'>
                                <img src={lock}></img>
                            </div>
                            <div className="text">
                                <div>
                                    <h3>HIGHLY SECURE</h3>
                                </div>
                                <div>
                                    <p>We stand completely liable for any damages caused to your product.
                                    We also have a strong verified customer base for seamless transaction.
                                    Your product is perfectly secure in our hands. TRUST is our core value.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single_card">
                            <div className='immga'>
                                <img src={tick}></img>
                            </div>
                            <div className="text">
                                <div>
                                    <h3> HIGHLY SECURE</h3>
                                </div>
                                <div>
                                    <p> We stand completely liable for any damages caused to your product.
                                    We also have a strong verified customer base for seamless transaction.
                                    Your product is perfectly secure in our hands. TRUST is our core value.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single_card">
                            <div className='immga'>
                                <img src={bag}></img>
                            </div>
                            <div className="text">
                                <div>
                                    <h3> HIGHLY SECURE</h3>
                                </div>
                                <div>
                                    <p> We stand completely liable for any damages caused to your product.
                                    We also have a strong verified customer base for seamless transaction.
                                    Your product is perfectly secure in our hands. TRUST is our core value.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ecosystem">
                    <div>
                        <h1>BE A PART OF THE ECOSYSTEM</h1>
                    </div>
                    <div>
                        <p>Let’s say you have a gaming console and do not have the games that another borrower
                        needs we help you to connect the dots to get the most out of your product.
</p>
                    </div>
                    <div className='buut'>
                        <button>Start Listing</button>
                    </div>

                </div>
                <div className="ecosystem" >
                    <div>
                        <h1>REFERRAL PROGRAM</h1>
                    </div>
                    <div>
                        <p>Get Your friends to share their product and earn 200 Share credit when its leased out for
                        the first time
</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Know_more

// import React from 'react'
// import Head from './Head'
// import './KnowMore.css'
// import { Button } from 'semantic-ui-react'
// import KnowImg from '../images/share.png';
// import Covid from './Covid';
// import VPlayer from './VPlayer';
// import Testimonials from './Testimonials';
// import maintenance from '../images/tick_circle.png';
// import delivery from '../images/bag+.png';
// import lock from '../images/lock.png';

// export class Know_more extends React.Component {
//     render() {

//         return (
//             <div className='KnowPage'>
//                 <div className='intro'>
//                     <h2 className='headers'>JOIN OUR COMMUNITY OF LENDERS SHARING THEIR ITEMS</h2>
//                     <div className='introPara'>
//                         <div>
//                             <p>Share any underused products lying down at your home securely.</p>
//                             <p>From mobile phones, cameras, Gaming consoles, furniture and anything that you can think of can be shared and earned a passive income from.</p>
//                             <p>Make your investments recover securely.</p>
//                             <Button className='listingButton' floated='left'>Start Listing</Button>
//                         </div>
//                         <div>
//                             <img src={KnowImg} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='videos'>
//                     <div>
//                         <VPlayer numb={0} />
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
//                     </div>
//                     <div>
//                         <VPlayer numb={1} />
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
//                     </div>
//                 </div>
//                 <div className='Testimonials'>
//                     <Testimonials />
//                 </div>
//                 <Covid />
//                 <h2 className='headers'>HOW DO WE MAKE THIS PROCESS SECURE ?</h2>
//                 <div>
//                     <div className='points'>
//                         <img src={lock} />
//                         <div>
//                             <h4>HIGHLY SECURE</h4>
//                             <p>We stand completely liable for any damages caused to your product.</p>
//                             <p>We also have a strong verified customer base for seamless transaction.</p>
//                             <p>Your product is perfectly secure in our hands. TRUST is our core value.</p>
//                         </div>
//                     </div>
//                     <div className='points'>
//                         <img src={delivery} />
//                         <div>
//                             <h4>INCLUDED DELIVERY AND PICKUP</h4>
//                             <p>Once you have listed your item, you need not worry about the pick up </p>
//                             <p>and delivery of your products. We securely manage the total logistics</p>
//                             <p>of the product for free</p>
//                         </div>
//                     </div>
//                     <div className='points'>
//                         <img src={maintenance} />
//                         <div>
//                             <h4>REGULAR MAINTENANCE</h4>
//                             <p>Once you have listed your item, you need not worry about the pick up </p>
//                             <p>and delivery of your products. We securely manage the total logistics</p>
//                             <p>of the product for free</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>)
//     }
// }
// export default Know_more;

// /*

//             <h2 className = 'headers'>BE A PART OF THE ECOSYSTEM</h2>
//             <div className = 'ecosystem'>
//                 <p>Let’s say you have a gaming console and do not have the games that another borrower
//                 needs we help you to connect the dots to get the most out of your product.</p>
//                 <Button className='listingButton' floated = 'left'>Start Listing</Button>
//             </div>
// */


// import React from 'react'
// import './KnowMore.css'
// import { Button } from 'semantic-ui-react'
// import KnowImg from '../images/share.png';
// import VPlayer from './VPlayer';
// import cust1 from '../images/cust1.png';
// import cust2 from '../images/cust2.png';
// import { Card } from 'semantic-ui-react';
// import './testimonials.css'



// export class Know_more extends React.Component {
//     render() {
//         return (
//             <div className="ayush">

//             </div>
//         )
//     }
// }
// export default Know_more