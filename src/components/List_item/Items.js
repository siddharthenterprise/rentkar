import React, { Component } from 'react'
import { guitar } from './guitar.png';

import './Item.css';

export class Item extends Component {

    image = {
        height: '120px',
        width: '100px',
        borderRadius: '5px',
        // backgroundImage: 'url(' + guitar + ')'

    }

    selected = [];

    // itemstyle = {
    //     margin: '15px',
    //     borderRadius: '5px',
    //     boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
    //     backgroundImage: 'url(' + {guitar} + ')'
    // }
    items = [
        <div className='abc' style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>,
        <div style={this.image} ></div>
    ]



    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    changeStyle = (e, data) => {
        if (!this.selected.includes(data)) {
            e.target.style.boxShadow = `inset 0 0 0 1000px rgba(143,227,205,0.9)`;
            this.selected.push(data)
        }
        else {
            e.target.style.boxShadow = `inset 0 0 0 1000px rgba(143,227,205,0)`;
            this.selected.pop(data);
        }
        console.log(this.selected);
        // alert(e.target.style.borderRadius = `2px`);
    }
    render() {
        return (
            <div className='chooseitems'>

                <h1>Choose the items below </h1>
                <div className='items'>
                    {
                        this.items.map((item, index) => {
                            console.log(index);
                            return (
                                <div className='item' data={index} onClick={((e) => this.changeStyle(e, index))}>{item}</div>
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
