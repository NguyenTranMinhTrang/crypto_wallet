import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";

import { COLORS, FONTS, icons, SIZES, } from "../constants";

const BalanceInfo = ({ title, displayAmount, changePct, contentStyle }) => {
    return (
        <View
            style={{
                ...contentStyle,
                marginBottom: SIZES.padding
            }}
        >
            <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>$</Text>
                <Text style={{ ...FONTS.h2, color: COLORS.white, marginLeft: SIZES.base }}>{displayAmount.toLocaleString()}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>USD</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "flex-end"
                }}
            >
                {
                    changePct != 0 &&
                    <Image
                        source={icons.upArrow}
                        style={{
                            height: 10,
                            width: 10,
                            alignSelf: "center",
                            tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                            transform: (changePct > 0) ? [{ rotate: '45deg' }]
                                : [{ rotate: '125deg' }]
                        }}
                    />
                }
                <Text
                    style={{
                        marginLeft: SIZES.base,
                        color: (changePct == 0) ? COLORS.lightGray3
                            : (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                        ...FONTS.h4,
                    }}
                >{changePct.toFixed(2)}%</Text>

                <Text
                    style={{
                        marginLeft: SIZES.radius,
                        color: COLORS.lightGray3,
                        ...FONTS.h5
                    }}
                >7d change</Text>
            </View>
        </View>
    )
}

export default BalanceInfo;