import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MainForm = () => {
    
    const value = 0.66;
    
    return (
        <Form className="ml-5 mr-5">

            <Form.Group controlId="formEbitda">
                <Form.Label>EBITDA*</Form.Label>
                <Form.Control type="number" placeholder="Enter EBITDA (£)" />
                <Form.Text className="text-muted">
                *Earnings Before Interest, Taxation, Depreciation and Amortisation
                </Form.Text>
            </Form.Group>

            <Form.Row>

                <Col>
                    <Form.Group controlId="formOpDebtors">
                        <Form.Label>Opening trade debtors</Form.Label>
                        <Form.Control type="number" placeholder="Enter opening trade debtors (£)" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formClDebtors">
                        <Form.Label>Closing trade debtors</Form.Label>
                        <Form.Control type="number" placeholder="Enter closing trade debtors (£)" />
                    </Form.Group>
                </Col>

            </Form.Row>

            <Form.Row>

                <Col>
                    <Form.Group controlId="formOpStock">
                        <Form.Label>Opening stock</Form.Label>
                        <Form.Control type="number" placeholder="Enter opening stock (£)" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formClStock">
                        <Form.Label>Closing stock</Form.Label>
                        <Form.Control type="number" placeholder="Enter closing stock (£)" />
                    </Form.Group>
                </Col>

            </Form.Row>

            <Form.Row>

                <Col>
                    <Form.Group controlId="formOpCreditors">
                        <Form.Label>Opening trade creditors</Form.Label>
                        <Form.Control type="number" placeholder="Enter opening trade creditors (£)" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formClCreditors">
                        <Form.Label>Closing trade creditors</Form.Label>
                        <Form.Control type="number" placeholder="Enter closing trade creditors (£)" />
                    </Form.Group>
                </Col>

            </Form.Row>

            <Button variant="primary" type="submit">
                Generate report
            </Button>
            <div 
                style={{width: 200, height: 200}}
                className="mt-5 mb-5"
            >
                <CircularProgressbar 
                    value={value} 
                    maxValue={1} 
                    text={`${value * 100}%`}
                />
            </div>
        </Form>
    );
};

export default MainForm;