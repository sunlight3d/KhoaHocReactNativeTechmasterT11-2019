import React from 'react'
import {Component} from 'react'
import {View, 
    StyleSheet, 
    TextInput,
    Text} 
from 'react-native'
export class ComponentB extends Component {
    state = {
        typedText: ''
    }
    async componentDidMount() {

    }
    componentDidUpdate() {

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }
    componentWillUnmount() {

    }
    componentDidCatch(error, errorInfo) {

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }
    componentDidUpdate(prevProps, prevState, snapshot){

    }

    render() {
        const {propA} = this.props
        return <View>
           <Text> Lifecycle test</Text>
            <TextInput onChangeText = {(typedText) => {
                this.setState({typedText})
            }}
            value={this.state.typedText}
            style={{height: 40, width: 200, borderColor: 'red', borderWidth: 2}}
            >

            </TextInput>
        </View>
    }
}
