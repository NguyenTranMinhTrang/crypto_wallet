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

const Home = () => {
    const myHoldings = useSelector((state) => state.marketReducer.myHoldings);
    const coins = useSelector((state) => state.marketReducer.coins);

    useFocusEffect(
        React.useCallback(() => {
            actions.getCoinMarket();
        }, [])
    )


    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black
                }}
            >

            </View>
        </MainLayout>
    )
}

export default Home;