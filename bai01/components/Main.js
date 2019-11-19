import React from 'react'
import {Component} from 'react'
import {View, 
    StyleSheet, 
    Text} 
from 'react-native'
import {add2Numbers} from '../helpers/calculations'
import {ComponentA} from './ComponentA'
import {ComponentB } from './ComponentB'
export default class Main extends Component {
    render() {
        debugger
        //JSX = DOM object
        return <View style={styles.container}>
            <ComponentA name={"Hoang"} year={1979} age={30}/>
            <Text style={styles.mytext}>Chao ban</Text>
            <ComponentB propA={"AAA"} />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mytext: {
        fontSize: 18,
        color: 'black'
    }
})
