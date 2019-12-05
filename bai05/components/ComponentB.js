import React, {Component, useEffect} from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'
import { connect } from 'react-redux'
import {AppState} from 'react-native';
import { useBackHandler } from 'react-native-hooks'


//yarn add react-native-hooks
const ComponentB = (props) => {
    
    useEffect(() => {
        //componentDidMount

        AppState.addEventListener('change', _handleAppStateChange);
        
    })
    useBackHandler(() => {
        debugger
        return true
    })
    function _handleAppStateChange(nextAppState) {
        debugger
        console.log(nextAppState)
    }
    const { isDarkMode } = props
    debugger
    return <View style={[styles.container, { backgroundColor: isDarkMode ? 'gray' : 'white' }]}>
        <Text>
            ComponentB. Nickname = {props.nickName}
            </Text>
    </View>
}
const mapStateToProps = (state) => {
    debugger
    return {
        isDarkMode: state.settingsReducer.isDarkMode,
        nickName: state.settingsReducer.nickName
    }    
}
export default connect(mapStateToProps)(ComponentB)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
})