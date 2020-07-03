import initialState from './initial';

const submitData = (state, action) => {
    return {
        ...state,
        ebitda: action.ebitda,
        debtors: action.debtors,
        stock: action.stock,
        creditors: action.creditors
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

const reducer = (state, action) => {
    switch(action.type) {
        case "SUBMIT_DATA": return calculateConversion(submitData(state, action));
        case "RESET": return initialState;
        default: return state;
    };
};

export default reducer;