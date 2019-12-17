import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Text,
    TouchableHighlight, TouchableOpacity,
    Switch
} from 'react-native'
import {changeDarkMode, changeNickName} from '../../redux/actions/actions'
import { connect } from 'react-redux'

export class SettingScreen extends Component {
    render() {
        const {dispatch, isDarkMode} = this.props
        return <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                debugger
                this.props.navigation.navigate('ComponentB', {x: 1})
            }}>
                <Text>Navigate to B</Text>
            </TouchableOpacity>
            <Text>Use DarkMode</Text>
            <Switch 
                value={isDarkMode}
                onValueChange = {(isDarkMode) => {
                dispatch(changeDarkMode(isDarkMode))
            }}>

            </Switch>
        </View>
    }
}
const mapStateToProps = (state) => {
    return {
        isDarkMode: state.settingsReducer.isDarkMode,
        nickName: state.settingsReducer.nickName
    }    
}
export default connect(mapStateToProps)(SettingScreen)
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
})