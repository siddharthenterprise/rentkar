import React, { Component, useState } from 'react'
import './body.css';
import { Card, Icon, Feed, Image, Button } from "semantic-ui-react";



function Corousel({ imgname }) {

    return (
        <div className='catcard'>
            <Card className='ccard'>
                <Image src={imgname} wrapped ui={false} />
                <Card.Content
                    className='cathead'>
                    <Card.Header>Fender Bullet Strat</Card.Header>
                    <Card.Meta>
                        <span className="date">Starting at</span>
                    </Card.Meta>
                    <Card.Description>
                        <i class="fas fa-rupee-sign"></i>****/day
                                     </Card.Description>
                    <Button>ADD TO CART</Button>
                </Card.Content>
            </Card>
        </div>
    );
}



export default Corousel;
