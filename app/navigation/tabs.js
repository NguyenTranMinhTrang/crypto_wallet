import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components";
import actions from "../redux/actions";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = () => {

    const isVisible = useSelector((state) => state.tabReducer.isVisible);

    const onClickTabButtonTradeHandler = () => {
        actions.setTradeAbility(!isVisible);
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                    height: 140
                },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.home}
                                    label="Home"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isVisible) {
                            e.preventDefault();
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.briefcase}
                                    label="Portfolio"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isVisible) {
                            e.preventDefault();
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.trade}
                                label="Trade"
                                isTrade={true}
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => onClickTabButtonTradeHandler()}
                        />
                    )

                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.market}
                                    label="Market"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isVisible) {
                            e.preventDefault();
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.profile}
                                    label="Profile"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isVisible) {
                            e.preventDefault();
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;