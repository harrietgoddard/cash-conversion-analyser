import initialState from './initial';

const submitData = (state, { ebitda, debtors, stock, creditors }) => {
    return {
        ...state,
        ebitda,
        debtors,
        stock,
        creditors,
    };
};

const calculateConversion = state => {
    const { ebitda, debtors, stock, creditors } = state;

    let debtorsCashflow = -(debtors.closing - debtors.opening);
    let stockCashflow = -(stock.closing - stock.opening);
    let creditorsCashflow = creditors.closing - creditors.opening;

    let cashFlow = ebitda + debtorsCashflow + stockCashflow + creditorsCashflow;

    let cashConversion = (cashFlow / ebitda).toFixed(2);

    return {
        ...state,
        cashConversion, 
    };
};

const calculateOutflows = state => {
    const { debtors, stock, creditors } = state;

    let debtorsCashflow = -(debtors.closing - debtors.opening);
    let stockCashflow = -(stock.closing - stock.opening);
    let creditorsCashflow = creditors.closing - creditors.opening;
    
    let cashOutflows = [];

    cashOutflows = debtorsCashflow < 0 ? [...cashOutflows, { debtors: debtorsCashflow }] : cashOutflows;

    cashOutflows = stockCashflow < 0 ? [...cashOutflows, { stock: stockCashflow }] : cashOutflows;

    cashOutflows = creditorsCashflow < 0 ? [...cashOutflows, { creditors: creditorsCashflow }] : cashOutflows;

    return {
        ...state,
        cashOutflows,
    };
};

const reducer = (state, action) => {
    switch(action.type) {
        case "SUBMIT_DATA": return calculateOutflows(calculateConversion(submitData(state, action)));
        case "RESET": return initialState;
        default: return state;
    };
};

export default reducer;