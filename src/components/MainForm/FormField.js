import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({
    controlId, 
    label, 
    type,
    text,
}) => {
    return (
        <Form.Group controlId={ controlId }>
            <Form.Label>{ label }</Form.Label>
            <Form.Control type={ type } placeholder="£" />
            <Form.Text className="text-muted">{ text }</Form.Text>
        </Form.Group>
    );
};

export default FormField;