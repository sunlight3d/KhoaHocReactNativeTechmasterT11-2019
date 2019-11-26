//yarn add react-navigation-stack
import React, {Component} from 'react'
import {
    Easing, Animated
  } from 'react-native'
import Main from './Main'
import TabNavigator from './Tabs/TabNavigator'
import ComponentB from './ComponentB'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const stackNavigator = createStackNavigator(
    {
        Main: { screen: Main },
        TabNavigator: { screen: TabNavigator },
        ComponentB: { screen: ComponentB },
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        mode: 'modal',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
)
export default createAppContainer(stackNavigator)