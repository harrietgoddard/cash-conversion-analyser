import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron>
            <h1 class="display-4">Cash conversion analyser</h1>
            <h4 class="text-muted">
                Find out how cash generative your business is and tips on how to improve cash flow.
            </h4>
            <p class="text-muted"><em>
                Fill in the form below using your latest P&amp;L and opening and closing balance sheet.
            </em></p>
            </Jumbotron>
    );
};

export default Header;