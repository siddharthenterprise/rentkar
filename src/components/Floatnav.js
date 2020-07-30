import React, { Component } from 'react';
import './Float.css';

export class Floatnav extends Component {
    render() {
        return (
            <div className="floatnav">
                <div class="mtop"><nav class="fixed-bottom text-center dark customnav"><div class="d-flex justify-content-between"><div class="container"><i class="fas fa-home fa-2x fa-gradient"></i></div><div class="container"><i class="fas fa-search fa-2x"></i></div><div class="container"><i class="fas fa-shopping-bag fa-2x"></i></div><div class="container"><i class="fas fa-user fa-2x"></i></div></div></nav></div>
            </div>
        )
    }
}

export default Floatnav
