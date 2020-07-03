export const submitData = ({ ebitda, debtors, stock, creditors }) => {

    return {
        type: "SUBMIT_DATA",
        ebitda: +ebitda,
        debtors: {
            opening: +debtors.opening,
            closing: +debtors.closing
        },
        stock: {
            opening: +stock.opening,
            closing: +stock.closing
        },
        creditors: {
            opening: +creditors.opening,
            closing: +creditors.closing
        },
    };

};

export const reset = () => {

    return {
        type: "RESET"
    };

};