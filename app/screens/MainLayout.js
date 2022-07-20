import React from "react";
import { View, Animated } from "react-native";
import { FONTS, COLORS, icons, SIZES } from "../constants";
import { IconTextButton } from "../components";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {

    const isVisible = useSelector((state) => state.tabReducer.isVisible);
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (isVisible) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        }
    }, [isVisible]);

    const translateY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 280]
    });

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {children}

            {/* Modal */}
            <Animated.View
                style={{
                    position: "absolute",
                    left: 0,
                    top: translateY,
                    width: '100%',
                    backgroundColor: COLORS.primary,
                    padding: SIZES.padding
                }}
            >
                <IconTextButton
                    label="Transfer"
                    icon={icons.send}
                    onPress={() => console.log("transfer")}
                />

                <IconTextButton
                    label="Withdraw"
                    icon={icons.withdraw}
                    containerStyle={{
                        marginTop: SIZES.base
                    }}
                    onPress={() => console.log("Withdraw")}
                />
            </Animated.View>

        </View>
    )
}

export default MainLayout;

