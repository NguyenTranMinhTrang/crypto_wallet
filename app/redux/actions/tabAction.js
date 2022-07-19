import store from "../store";
import types from "../types";

const { dispatch } = store;

export const setTradeAbility = (isVisible) => {
    dispatch({
        type: types.TRADE_VISIBILITY,
        payload: isVisible
    })
}