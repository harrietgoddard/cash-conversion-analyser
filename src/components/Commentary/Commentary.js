import React from 'react';
import { advice, explanation, label } from '../../data/advice';

const Commentary = ({ cashConversion, cashOutflows }) => {
    
    let primaryOutflow = cashOutflows[0];

    return (
        <div
            className="d-flex flex-column align-items-center m-auto"
            style={{ maxWidth: 700 }}
        >
            <p className="ml-5 mr-5 mb-3">

                {/* intro */}
                Operating cash conversion is a measure of how well your profits have turned into cash (excluding any investing or financing cash flows). It is impacted by how you manage your working capital (collecting payments from customers, managing stock levels and paying suppliers).

            </p>

            <p className="ml-5 mr-5 mb-3">

                {/* operating cash conversion */}
                You have an operating cash conversion of { cashConversion * 100 + "%" }. 

                {/* explanation of operating cash conversion */}
                { cashConversion < 0 ? explanation.negative : cashConversion < 0.5 ? explanation.lessThan50 :
                cashConversion < 1 ? explanation.lessThan100 :
                explanation.moreThan100 }
            </p>

            <p className="ml-5 mr-5 mb-5">

                Your largest cash drain is your { label[primaryOutflow.name] }, 
                
                which { primaryOutflow.name === "creditors" ? "decreased" : "increased" } by £{ -primaryOutflow.value }.

                { advice[primaryOutflow.name].primary } 

                { advice[primaryOutflow.name].secondary }

            </p>

        </div>
    );
};

export default Commentary;