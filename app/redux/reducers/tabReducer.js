import types from "../types";

const initialState = {
    isVisible: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.TRADE_VISIBILITY:
            const data = action.payload;
            return {
                isVisible: data
            };

        default:
            return { ...state };
    }
}