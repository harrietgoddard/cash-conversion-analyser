import React from 'react';

const Commentary = ({ cashConversion, cashOutflows }) => {
    
    let largestOutflow = cashOutflows[0];

    return (
        <div
            className="d-flex flex-column align-items-center"
        >
            <p 
                style={{ maxWidth: 700 }}
                className="ml-5 mr-5 mb-5"
            >Operating cash conversion is a measure of how well your profits have turned into cash (excluding any investing or financing cash flows). It is impacted by how you manage your working capital (collecting payments from customers, managing stock levels and paying suppliers).
            </p>
            <p 
                style={{ maxWidth: 700 }}
                className="ml-5 mr-5 mb-5"
            >You have an operating cash conversion of { cashConversion * 100 + "%" }. 
            { cashConversion < 0.5 ? null :
            "This means that the majority of your profits have turned into cash, however, since it is less than 100%, it reflects that an element of your profit is tied up in working capital." }
            </p>
            <p 
                style={{ maxWidth: 700 }}
                className="ml-5 mr-5 mb-5"
            >{ largestOutflow.name !== "debtors" ? null :
            `Your largest cash drain is your trade debtors, which increased by £${ -largestOutflow.value }. Your customers aren't paying you fast enough. To speed up cash collections, consider tightening up your credit control procedures, or asking customers to pay a deposit up front.` }
            </p>
        </div>
    );
};

export default Commentary;