// import initialState from './initial';

const generateReport = (state, action) => {
    return {
        ...state,
        ebitda: action.ebitda,
        debtors: action.debtors,
        stock: action.stock,
        creditors: action.creditors
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "GENERATE_REPORT": return generateReport(state, action);
        default: return state;
    }
};

export default reducer;