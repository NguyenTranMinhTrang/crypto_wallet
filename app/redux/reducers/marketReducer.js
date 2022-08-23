import types from "../types";

const initialState = {
    myHoldings: [],
    coins: [],
    error: null,
    loading: false
};

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_HOLDING_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.GET_HOLDING_SUCCESS:
            return {
                ...state,
                myHoldings: action.payload.myHoldings
            }
        case types.GET_HOLDING_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }

        case types.GET_COIN_MARKET_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.GET_COIN_MARKET_SUCCESS:
            return {
                ...state,
                coins: action.payload.coins
            }
        case types.GET_COIN_MARKET_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default marketReducer;

