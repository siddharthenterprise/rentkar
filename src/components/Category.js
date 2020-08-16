import React, { Component } from 'react'
import Corousel from './corousel';
import guitar from '../images/guitar2.png';
import search_boy from '../images/search_boy.png';

// import './category.css';
import { Card, Image } from "semantic-ui-react";
import category1 from '../images/category1.png';
import category2 from '../images/category2.png';
import category3 from '../images/category3.png';
import category4 from '../images/category4.png';
import selectedCategory1 from '../images/selectedCategory1.png';
import selectedCategory2 from '../images/selectedCategory2.png';
import selectedCategory3 from '../images/selectedCategory3.png';
import selectedCategory4 from '../images/selectedCategory4.png';
import arrow from '../images/arrow.jpeg';

import './category.css';

const categories = ['Music', 'Gaming', 'Laptop', 'Photography'];
const sub = ['Packages', 'Deals', 'PC Gaming', 'Console'];
const img = [selectedCategory1, selectedCategory2, selectedCategory3, selectedCategory4];
const selectedImg = [category1, category2, category3, category4];

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whats_hot: [<Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            <Corousel imgname={guitar} />,
            ],
            category: 0,
            sub: 0,
        };
        this.categorySelect = this.categorySelect.bind(this);
    }

    componentDidMount() {
        document.getElementById('sub0').style.opacity = '1';
    }

    subSelect(index) {
        for (var i = 0; i < 4; i++) {
            if (i == index)
                document.getElementById(('sub' + index.toString())).style.opacity = '1';
            else
                document.getElementById(('sub' + i.toString())).style.opacity = '0';
        }
        this.setState((prevState) => {
            return {
                category: prevState.category,
                sub: index,
            }
        })
    }

    categorySelect(index) {
        this.setState((prevState) => {
            return {
                category: index,
                sub: prevState.sub,
            }
        })
    }



    render() {


        const SubCard = ({ index }) => (
            <Card className="subCard" onClick={() => { this.subSelect(index) }}>
                <Card.Content>
                    <Image src={this.state.sub == index ? selectedImg[index] : img[index]} wrapped ui={false} />
                    <p>{sub[index]}</p>
                </Card.Content>
            </Card>
        );


        return (
            <div className="category_overview">
                <div className="categorizeHead">
                    <div className='pagePath'>
                        <p style={{ marginTop: '5px' }}>Home</p>
                        <h3 style={{ paddingLeft: '10px', paddingRight: '10px' }}>{">"}</h3>
                        <p style={{ marginTop: '5px' }}>{categories[this.state.category]}</p>
                        <h3 style={{ paddingLeft: '10px', paddingRight: '10px' }}>{">"}</h3>
                        <p style={{ marginTop: '5px' }}>{sub[this.state.sub]}</p>
                    </div>
                    <div className='categories'>
                        <button id='musicButton' className={this.state.category == 0 ? 'selectedButton' : 'categoryButton'} onClick={() => { this.categorySelect(0) }}>{categories[0].toUpperCase()}</button>
                        <button id='gamingButton' className={this.state.category == 1 ? 'selectedButton' : 'categoryButton'} onClick={() => { this.categorySelect(1) }}>{categories[1].toUpperCase()}</button>
                        <button id='laptopButton' className={this.state.category == 2 ? 'selectedButton' : 'categoryButton'} onClick={() => { this.categorySelect(2) }}>{categories[2].toUpperCase()}</button>
                        <button id='photographyButton' className={this.state.category == 3 ? 'selectedButton' : 'categoryButton'} onClick={() => { this.categorySelect(3) }}>{categories[3].toUpperCase()}</button>
                    </div>
                    <div className='subCategories'>
                        <div>
                            <SubCard index={0} />
                            <hr className='subLine' id='sub0' />
                        </div>
                        <div>
                            <SubCard index={1} />
                            <hr className='subLine' id='sub1' />
                        </div>
                        <div>
                            <SubCard index={2} />
                            <hr className='subLine' id='sub2' />
                        </div>
                        <div>
                            <SubCard index={3} />
                            <hr className='subLine' id='sub3' />
                        </div>
                    </div>
                </div>
                <div className="product_overview" >
                    <div className='category'>
                        {this.state.whats_hot.map((item, index) => {

                            return (
                                <div key={index} >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="search_boy_with_input">
                    <div className="search_boy_header">
                        <h1>DIDN'T FIND WHAT YOU ARE LOOKING FOR ?</h1>
                    </div>
                    <div className="search_boy">
                        <img src={search_boy}></img>
                    </div>
                    <div className="search_boy_input">
                        <input placeholder="Drop your queries here"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category