import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Text,
    TouchableHighlight, TouchableOpacity,
    Switch
} from 'react-native'
import {changeDarkMode, changeNickName} from '../../redux/actions/actions'
export default class SettingScreen extends Component {

    render() {
        const {dispatch} = this.state
        return <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                debugger
                this.props.navigation.navigate('ComponentB', {x: 1})
            }}>
                <Text>Navigate to B</Text>
            </TouchableOpacity>
            <Text>Use DarkMode</Text>
            <Switch 
                // value={isDarkMode}
                onValueChange = {(isDarkMode) => {
                debugger
                dispatch(changeDarkMode(isDarkMode))
            }}>

            </Switch>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
})