import React from 'react'
import {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

//FC = Function Component
export const ComponentA = ({name, year, age}) => {
    return <View>
        <Text>{name},{year}, {age}</Text>
    </View>
}
const styles = StyleSheet.create({

})