import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { MainLayout } from "./";
import { useSelector } from "react-redux";
import actions from '../redux/actions';
import { useFocusEffect } from '@react-navigation/native';
import { SIZES, COLORS, FONTS, dummyData, icons } from '../constants';
import { BalanceInfo } from '../components';

const Home = () => {
    const myHoldings = useSelector((state) => state.marketReducer.myHoldings);
    const coins = useSelector((state) => state.marketReducer.coins);



    useFocusEffect(
        React.useCallback(() => {
            actions.getHoldings(holdings = dummyData.holdings);
            actions.getCoinMarket();
        }, [])
    )

    let totalWallet = myHoldings.reduce((a, b) => a + (b?.total || 0), 0);
    let valuaChange = myHoldings.reduce((a, b) => a + (b?.holding_value_change_7d || 0), 0);
    let percentChange = valuaChange / (totalWallet - valuaChange) * 100;

    const renderInfoWallet = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    borderBottomLeftRadius: 25,
                    borderTopRightRadius: 25,
                    backgroundColor: COLORS.gray
                }}
            >
                {/* Balance Info */}
                <BalanceInfo
                    title={"Your Wallet"}
                    displayAmount={totalWallet}
                    changePct={percentChange}
                    contentStyle={{
                        marginTop: 50
                    }}
                />

                {/* Buttons */}
            </View>
        )
    }


    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black
                }}
            >
                {/* Info Wallet */}
                {renderInfoWallet()}
                {/* Chart */}
                {/* Top Cryptocurrentcy */}
            </View>
        </MainLayout>
    )
}

export default Home;