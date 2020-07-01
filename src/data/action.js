export const generateReport = data => {

    return {
        type: "GENERATE_REPORT",
        ebitda: +data.ebitda,
        debtors: {
            opening: +data.debtors.opening,
            closing: +data.debtors.closing
        },
        stock: {
            opening: +data.stock.opening,
            closing: +data.stock.closing
        },
        creditors: {
            opening: +data.creditors.opening,
            closing: +data.creditors.closing
        },
    };

};