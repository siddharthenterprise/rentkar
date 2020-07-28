import React, { Component, useState } from 'react'
import guitar from '../images/guitar.png';
import Corousel from './corousel';


function Slide_corousel() {
    const [x, setX] = useState(65);
    let whats_hot = [<Corousel imgname={guitar} />,
    <Corousel imgname={guitar} />,
    <Corousel imgname={guitar} />,
    <Corousel imgname={guitar} />,
    <Corousel imgname={guitar} />];
    const left_but = {
        backgroundColor: 'white',
        padding: '5px 10px',
        borderRadius: '20px',
        margin: '2vw'
    }
    const goleft = () => {
        if ((x) < 65) {
            setX(x + 100)
        }

    };
    const goright = () => {
        if (x > -165) {
            setX(x - 100)
        }

    };
    return (
        <div>
            <div style={{ display: `flex`, flexDirection: `row`, overflow: `hidden` }}>
                {whats_hot.map((item, index) => {

                    return (
                        <div key={index} className="sliide" style={{ transform: `translateX(${x}%)`, transition: `0.5s` }}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className='slide_button' style={{ position: `absolute`, marginLeft: `70vw`, PaddingBottom: `20vh` }}>
                <a style={left_but} onClick={goleft} ><i class="fas fa-chevron-left"></i></a>
                <a style={left_but} onClick={goright} ><i class="fas fa-chevron-right"></i></a>

            </div>
        </div>

    );
}

export default Slide_corousel;
