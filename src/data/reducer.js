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

const reducer = (state, action) => {
    switch(action.type) {
        case "SUBMIT_DATA": return submitData(state, action);
        case "RESET": return initialState;
        default: return state;
    };
};

export default reducer;