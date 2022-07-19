import { combineReducers } from "redux";
import tabReducer from "./tabReducer";
import types from "../types";

const appReducer = combineReducers({
    tabReducer,
});

const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;