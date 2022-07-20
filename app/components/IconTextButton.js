import React from "react";
import {
    TouchableOpacity,
    Text,
    Image
} from "react-native";

import { COLORS, FONTS, icons, SIZES } from "../constants";

const IconTextButton = ({ label, icon, containerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    height: 20,
                    width: 20,
                }}
            />
            <Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default IconTextButton;