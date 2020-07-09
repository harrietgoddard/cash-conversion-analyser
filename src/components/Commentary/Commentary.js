import React from 'react';
import advice from '../../data/advice';

const Commentary = ({ cashConversion, cashOutflows }) => {
    
    let primaryOutflow = cashOutflows[0];

    return (
        <div
            className="d-flex flex-column align-items-center m-auto"
            style={{ maxWidth: 700 }}
        >

            <p 
                className="ml-5 mr-5 mb-3"
            >Operating cash conversion is a measure of how well your profits have turned into cash (excluding any investing or financing cash flows). It is impacted by how you manage your working capital (collecting payments from customers, managing stock levels and paying suppliers).
            </p>

            <p
                className="ml-5 mr-5 mb-3"
            >You have an operating cash conversion of { cashConversion * 100 + "%" }. 
            { cashConversion < 0.5 || cashConversion > 1 ? null :
            " This means that the majority of your profits have turned into cash, however, since it is less than 100%, it reflects that an element of your profit is tied up in working capital." }
            </p>

            <p
                className="ml-5 mr-5 mb-3"
            >{ primaryOutflow.name !== "debtors" ? null :
            `Your largest cash drain is your trade debtors, which increased by £${ -primaryOutflow.value }. ${ advice.debtors.primary } ${ advice.debtors.secondary }` }
            </p>

            <p
                className="ml-5 mr-5 mb-3"
            >{ primaryOutflow.name !== "stock" ? null :
            `Your largest cash drain is your stock, which increased by £${ -primaryOutflow.value }. ${ advice.stock.primary } ${ advice.stock.secondary }` }
            </p>

            <p
                className="ml-5 mr-5 mb-3"
            >{ primaryOutflow.name !== "creditors" ? null :
            `Your largest cash drain is your creditors, which decreased by £${ -primaryOutflow.value }. ${ advice.creditors.primary } ${ advice.creditors.secondary }` }
            </p>

        </div>
    );
};

export default Commentary;