import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import { COLORS, FONTS } from "../constants";

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
    if (isTrade) {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 65,
                    height: 65,
                    borderRadius: 31,
                    backgroundColor: COLORS.black
                }}
            >
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: COLORS.white,
                        ...iconStyle
                    }}
                />
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                    }}
                >
                    {label}
                </Text>
            </View>
        )
    }
    else {
        return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary,
                        ...iconStyle
                    }}
                />
                <Text
                    style={{
                        color: focused ? COLORS.white : COLORS.secondary,
                        ...FONTS.h4,
                    }}
                >
                    {label}
                </Text>
            </View>
        )
    }
}

export default TabIcon;