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

const assetCashflow = asset => {
    return -(asset.closing - asset.opening);
};

const liabilityCashflow = liability => {
    return liability.closing - liability.opening;
};

const calculateConversion = state => {
    const { ebitda, debtors, stock, creditors } = state;

    let cashFlow = ebitda + assetCashflow(debtors) + assetCashflow(stock) + liabilityCashflow(creditors);

    let cashConversion = (cashFlow / ebitda).toFixed(2);

    return {
        ...state,
        cashConversion, 
    };
};

const calculateOutflows = state => {
    const { debtors, stock, creditors } = state;

    let cashFlows = [
        { name: "debtors", value: assetCashflow(debtors) }, 
        { name: "stock", value: assetCashflow(stock) }, 
        { name: "creditors", value: liabilityCashflow(creditors) }
    ];

    let cashOutflows = cashFlows.filter(cashflow => cashflow.value < 0).sort((a, b) => a.value - b.value);

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