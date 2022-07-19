import * as tabActionTypes from "./tabAction";

const initialState = {
    isTradeVisible: false
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
            return {
                ...state,
                isTradeVisible: action.payload.isVisible
            }
        default:
            return state;
    }
}

export default tabReducer;