import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import FormField from './FormField';

const MainForm = () => {
    
    return (
        <Form className="ml-5 mr-5">

            <FormField
            controlId={ "formEbitda "}
            label={ "EBITDA*" }
            type={ "number" }
            text={ "*Earnings Before Interest, Taxation, Depreciation and Amortisation" } 
            />

            <Form.Row>

                <Col>
                    <FormField
                        controlId={ "formOpDebtors "}
                        label={ "Opening trade debtors" }
                        type={ "number" } 
                    />
                </Col>
                <Col>
                    <FormField
                        controlId={ "formClDebtors "}
                        label={ "Closing trade debtors" }
                        type={ "number" } 
                    />
                </Col>

            </Form.Row>

            <Form.Row>

                <Col>
                    <FormField
                        controlId={ "formOpStock "}
                        label={ "Opening stock" }
                        type={ "number" } 
                    />
                </Col>
                <Col>
                    <FormField
                        controlId={ "formClStock "}
                        label={ "Closing stock" }
                        type={ "number" } 
                    />
                </Col>

            </Form.Row>

            <Form.Row>

                <Col>
                    <FormField
                        controlId={ "formOpCreditors "}
                        label={ "Opening trade creditors" }
                        type={ "number" } 
                    />
                </Col>
                <Col>
                    <FormField
                        controlId={ "formClCreditors "}
                        label={ "Closing trade creditors" }
                        type={ "number" } 
                    />
                </Col>

            </Form.Row>

            <Button 
                variant="primary" 
                type="submit"
                className="mt-3"
            >
                Generate report
            </Button>

        </Form>
    );
};

export default MainForm;