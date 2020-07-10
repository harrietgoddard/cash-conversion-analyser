import React from 'react';
import { advice, explanation } from '../../data/advice';

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

            <p className="ml-5 mr-5 mb-3">

                { primaryOutflow.name !== "debtors" ? null :
                `Your largest cash drain is your trade debtors, which increased by £${ -primaryOutflow.value }. ${ advice.debtors.primary } ${ advice.debtors.secondary }` }

            </p>

            <p className="ml-5 mr-5 mb-3">

                { primaryOutflow.name !== "stock" ? null :
                `Your largest cash drain is your stock, which increased by £${ -primaryOutflow.value }. ${ advice.stock.primary } ${ advice.stock.secondary }` }

            </p>

            <p className="ml-5 mr-5 mb-3">

                { primaryOutflow.name !== "creditors" ? null :
                `Your largest cash drain is your creditors, which decreased by £${ -primaryOutflow.value }. ${ advice.creditors.primary } ${ advice.creditors.secondary }` }
                
            </p>

        </div>
    );
};

export default Commentary;