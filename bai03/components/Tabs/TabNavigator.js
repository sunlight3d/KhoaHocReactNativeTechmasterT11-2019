
import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'
//yarn add react-native-reanimated react-native-gesture-handler react-navigation
//yarn add react-native-vector-icons react-navigation-tabs
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ChatScreen from './ChatScreen';
import SearchScreen from './SearchScreen';
import SettingScreen from './SettingScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TabNavigator = createBottomTabNavigator({
    ChatScreen: ChatScreen,
    SearchScreen: SearchScreen,
    SettingScreen: SettingScreen,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state //routeName = "screenName"
            switch(routeName) {
                case "ChatScreen": 
                    return <FontAwesome5 name={"sms"} size={25} color={tintColor} />
                case "SearchScreen":
                    return <FontAwesome5 name={"search-dollar"} size={25} color={tintColor} />
                case "SettingScreen":
                    return <FontAwesome5 name={"cogs"} size={25} color={tintColor} />
                default: 
                    return null
            }               
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});
  
export default createAppContainer(TabNavigator);
