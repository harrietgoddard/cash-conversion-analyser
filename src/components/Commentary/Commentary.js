import React from 'react';

const Commentary = ({ cashConversion, cashOutflows }) => {
    
    let primaryOutflow = cashOutflows[0];

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
            { cashConversion < 0.5 || cashConversion > 1 ? null :
            " This means that the majority of your profits have turned into cash, however, since it is less than 100%, it reflects that an element of your profit is tied up in working capital." }
            </p>

            <p 
                style={{ maxWidth: 700 }}
                className="ml-5 mr-5 mb-5"
            >{ primaryOutflow.name !== "debtors" ? null :
            `Your largest cash drain is your trade debtors, which increased by £${ -primaryOutflow.value }. Your customers aren't paying you fast enough. To speed up cash collections, consider asking customers to pay a deposit up front. Alternatively, tighten up your credit control procedures by hiring a credit controller, formalise the process of chasing up overdue payments, or introduce early payment discounts or late payment penalties.` }
            </p>

            <p 
                style={{ maxWidth: 700 }}
                className="ml-5 mr-5 mb-5"
            >{ primaryOutflow.name !== "stock" ? null :
            `Your largest cash drain is your stock, which increased by £${ -primaryOutflow.value }. You're potentially buying too much stock. To increase stock efficiency, consider using a stock management system that reorders stock for you. Make sure to perform regular stock counts, and keep an eye on older stock to ensure it is sold before becoming obsolete.` }
            </p>

            <p 
                style={{ maxWidth: 700 }}
                className="ml-5 mr-5 mb-5"
            >{ primaryOutflow.name !== "creditors" ? null :
            `Your largest cash drain is your creditors, which decreased by £${ -primaryOutflow.value }. You're paying your creditors faster than you're collecting payments from customers. See if you can negotiate extended payment terms with your main suppliers. Alternatively, redress the balance by speeding up cash collections from customers. Consider asking customers to pay a deposit up front, or tighten up your credit control procedures.` }
            </p>

        </div>
    );
};

export default Commentary;