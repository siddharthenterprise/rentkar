import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

// import logo_trans from '../images/logo_trans.png';

import './Listitem.css';
// import Stepper from 'react-js-stepper';
import Personaldetail from './List_item/Personaldetail';
import Items from './List_item/Items';
import Confirmation from './List_item/Confirmation';




export class DotsMobileStepper extends Component {
    constructor(props) {
        super(props);
        // alert(this.props.show)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
            // addModalshow: false
        };

    }



    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };



    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    show = () => {
        // const { addModalshow } = this.state;
        // alert('sad');
        // this.setState({ addModalshow: false })
        this.props.onHide();

    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        let addModalclose = () => { this.setState({ addModalshow: false }) };


        switch (step) {
            case 1:
                return (
                    <div className='listitem'>
                        <Modal
                            {...this.props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>

                            <Personaldetail nextStep={this.nextStep}

                                show={this.show}
                                handleChange={this.handleChange}
                                values={values} />


                        </Modal>
                    </div>
                );
            case 2:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>


                        <Items nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} />

                    </Modal>
                );
            case 3:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Confirmation prevStep={this.prevStep}
                            show={this.show}
                            onHide={addModalclose}
                        />


                    </Modal>
                );


        }
    }
}

export default DotsMobileStepper
