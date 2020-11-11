import React, { Component, useState, useContext } from 'react'
import './body.css';
import { Card, Icon, Feed, Image, Button } from "semantic-ui-react";
import { ProductContext } from '../components/ProductContext';



function Corousel({ imgname }) {
    const [product, setproduct] = useContext(ProductContext);
    const addcart = (name, price) => {
        setproduct(prevproduct => [...prevproduct, { name: 'Fender Bullet Strat', price: 100, duration: 5 }]);
    }
    return (
        <div className='catcard' >
            <Card className='ccard' href = "/product">
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
                    <Button onClick={addcart}>ADD TO BAG</Button>
                </Card.Content>
            </Card>
        </div>
    );
}



export default Corousel;
