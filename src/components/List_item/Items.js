import React, { Component } from 'react'
import guitar from './guitar.png';

import './Item.css';

export class Item extends Component {
    image = {
        height: '120px',
        width: '100px',
        borderRadius: '5px'

    }
    items = [
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>,
        <img style={this.image} src={guitar}></img>
    ]
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <div className='chooseitems'>

                <h1>Choose the items below </h1>
                <div className='items'>
                    {
                        this.items.map((item, index) => {
                            return (
                                <div className='item'>{item}</div>
                            )
                        })
                    }
                </div>

                <div className='buttons'>
                    <button className='but1' onClick={this.back}>Previous</button>
                    <button className='but2' onClick={this.continue}>Next</button>
                </div>
            </div>

        )
    }
}

export default Item
