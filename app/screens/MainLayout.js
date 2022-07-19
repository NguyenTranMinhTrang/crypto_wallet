import React from "react";
import { View } from "react-native";
import { FONTS, COLORS, icons } from "../constants";

const MainLayout = ({ childrend }) => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {childrend}
        </View>
    )
}

export default MainLayout;

