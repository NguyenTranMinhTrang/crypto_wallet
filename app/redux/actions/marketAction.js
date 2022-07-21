import axios from "axios";
import types from "../types";
import store from "../store";

const { dispatch } = store;


// Holding / My Holdings
export const getHoldingsBegin = () => ({
    type: types.GET_HOLDING_BEGIN
});

export const getHoldingsSuccess = (myHoladings) => ({
    type: types.GET_HOLDING_SUCCESS,
    payload: { myHoladings }
});

export const getHoldingsFailure = (error) => ({
    type: types.GET_HOLDING_FAILURE,
    payload: { error }
});

export const getHoldings = (holdings = [], currency = "usd", orderBy = "market_cap_desc",
    sparkline = true, priceChangePerc = "7d", perPage = 10, page = 1) => {
    dispatch(getHoldingsBegin);
    let ids = holdings.map((item) => { item.id }).join(",");
    let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`;
    return axios({
        url: apiUrl,
        method: 'GET',
        headers: {
            Accept: "application/json"
        }
    }).then((response) => {
        if (response.status == 200) {
            let myHoldings = response.data.map((item) => {
                let coin = holdings.find((a) => a.id == item.id);
                let price7d = item.current_price / (1 + item.price_change_percentage_7d_in_currency * 0.01);
                return {
                    id: item.id,
                    symbol: item.symbol,
                    name: item.name,
                    image: item.image,
                    current_price: item.current_price,
                    qty: item.qty,
                    total: coin.qty * item.current_price,
                    price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
                    holding_value_change_7d: (item.current_price - price7d) * coin.qty,
                    sparkline_in_7d: {
                        value: item.sparkline_in_7d.price.map((price) => {
                            return price * coin.qty;
                        })
                    }

                }
            });

            dispatch(getHoldingsSuccess(myHoldings));
        } else {
            dispatch(getHoldingsFailure(response.data));
        }
    }).catch((error) => {
        dispatch(getHoldingsFailure(error))
    })
}

// Coin Market
