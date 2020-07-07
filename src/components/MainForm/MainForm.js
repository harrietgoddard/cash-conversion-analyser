import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import FormField from './FormField';
import { demoA, demoB, demoC } from '../../data/demoData';

class MainForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            ebitda: "",
            debtors: {
                opening: "",
                closing: ""
            },
            stock: {
                opening: "",
                closing: ""
            },
            creditors: {
                opening: "",
                closing: ""
            },
        };

        this.handleEbitda = this.handleEbitda.bind(this);
        this.handleOpDebtors = this.handleOpDebtors.bind(this);
        this.handleClDebtors = this.handleClDebtors.bind(this);
        this.handleOpStock = this.handleOpStock.bind(this);
        this.handleClStock = this.handleClStock.bind(this);
        this.handleOpCreditors = this.handleOpCreditors.bind(this);
        this.handleClCreditors = this.handleClCreditors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    };

    handleEbitda = e => {
        this.setState({
            ebitda: e.currentTarget.value
        });
    };

    handleOpDebtors = e => {
        this.setState({
            debtors: {
                ...this.state.debtors,
                opening: e.currentTarget.value
            }
        });
    };

    handleClDebtors = e => {
        this.setState({
            debtors: {
                ...this.state.debtors,
                closing: e.currentTarget.value
            }
        });
    };

    handleOpStock = e => {
        this.setState({
            stock: {
                ...this.state.stock,
                opening: e.currentTarget.value
            }
        });
    };

    handleClStock = e => {
        this.setState({
            stock: {
                ...this.state.stock,
                closing: e.currentTarget.value
            }
        });
    };

    handleOpCreditors = e => {
        this.setState({
            creditors: {
                ...this.state.creditors,
                opening: e.currentTarget.value
            }
        });
    };

    handleClCreditors = e => {
        this.setState({
            creditors: {
                ...this.state.creditors,
                closing: e.currentTarget.value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.handleSubmit({ ...this.state });

    };

    handleClick = () => {
        this.props.handleClick();
        
        this.setState({
            ebitda: "",
            debtors: {
                opening: "",
                closing: ""
            },
            stock: {
                opening: "",
                closing: ""
            },
            creditors: {
                opening: "",
                closing: ""
            },
        });
    };

    handleDemo = (demo) => {
        this.setState({ 
            ebitda: demo.ebitda,
            debtors: demo.debtors,
            stock: demo.stock,
            creditors: demo.creditors
        });
    };

    render() {
        
        const { ebitda, debtors, stock, creditors } = this.state;
        
        return (
            <Form 
                className="ml-5 mr-5"
                onSubmit={ this.handleSubmit }
            >

                <FormField
                controlId={ "formEbitda "}
                label={ "EBITDA*" }
                type={ "number" }
                text={ "*Earnings Before Interest, Taxation, Depreciation and Amortisation" }
                value={ ebitda }
                handleChange={ this.handleEbitda } 
                />

                <Form.Row>

                    <Col>
                        <FormField
                            controlId={ "formOpDebtors "}
                            label={ "Opening trade debtors" }
                            type={ "number" }
                            value={ debtors.opening }
                            handleChange={ this.handleOpDebtors } 
                        />
                    </Col>
                    <Col>
                        <FormField
                            controlId={ "formClDebtors "}
                            label={ "Closing trade debtors" }
                            type={ "number" }
                            value={ debtors.closing }
                            handleChange={ this.handleClDebtors }  
                        />
                    </Col>

                </Form.Row>

                <Form.Row>

                    <Col>
                        <FormField
                            controlId={ "formOpStock "}
                            label={ "Opening stock" }
                            type={ "number" } 
                            value={ stock.opening }
                            handleChange={ this.handleOpStock } 
                        />
                    </Col>
                    <Col>
                        <FormField
                            controlId={ "formClStock "}
                            label={ "Closing stock" }
                            type={ "number" } 
                            value={ stock.closing }
                            handleChange={ this.handleClStock }
                        />
                    </Col>

                </Form.Row>

                <Form.Row>

                    <Col>
                        <FormField
                            controlId={ "formOpCreditors "}
                            label={ "Opening trade creditors*" }
                            type={ "number" }
                            text= { "*Enter positive numbers (your balance sheet may show trade creditors as negative numbers)" }
                            value={ creditors.opening }
                            handleChange={ this.handleOpCreditors } 
                        />
                    </Col>
                    <Col>
                        <FormField
                            controlId={ "formClCreditors "}
                            label={ "Closing trade creditors*" }
                            type={ "number" }
                            value={ creditors.closing }
                            handleChange={ this.handleClCreditors } 
                        />
                    </Col>

                </Form.Row>

                <Button 
                    variant="primary" 
                    type="submit"
                    className="mt-3 mr-3"
                >
                    Generate report
                </Button>

                <Button 
                    variant="secondary" 
                    className="mt-3 mr-3"
                    onClick={ this.handleClick }
                >
                    Clear form
                </Button>

                <Button 
                    variant="outline-danger" 
                    className="mt-3 mr-3"
                    onClick={ () => this.handleDemo(demoA) }
                >
                    Demo Business A
                </Button>

                <Button 
                    variant="outline-warning" 
                    className="mt-3 mr-3"
                    onClick={ () => this.handleDemo(demoB) }
                >
                    Demo Business B
                </Button>

                <Button 
                    variant="outline-info" 
                    className="mt-3"
                    onClick={ () => this.handleDemo(demoC) }
                >
                    Demo Business C
                </Button>

            </Form>
        );
    };
};

export default MainForm;