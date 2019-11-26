import React, {Component} from 'react'
import {
View, TextInput, 
StyleSheet,
Text, 
Image,
FlatList
} 
from 'react-native'
const fakeURL = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tiffanie_at_cat_show.jpg"
var fakeData  = [
    
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow eweware you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow 2323re you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow ar323e you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow eweware you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow 2323re you??", status: "I am t32yping", isSender: false},
    {url: fakeURL, text: "Hoow ar323e you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: false},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow eweware you??", status: "I am 32typing", isSender: false},
    {url: fakeURL, text: "Hoow 2323re you??", status: "I am t32yping", isSender: false},
    {url: fakeURL, text: "Hoow ar323e you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: false},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: false},
    {url: fakeURL, text: "Hoow eweware you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow 2323re you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow ar323e you??", status: "I am t32yping", isSender: false},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow eweware you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow 2323re you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow ar323e you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow eweware you??", status: "I am 32typing", isSender: true},
    {url: fakeURL, text: "Hoow 2323re you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow ar323e you??", status: "I am t32yping", isSender: true},
    {url: fakeURL, text: "Hoow are you??", status: "I am 32typing", isSender: true},


]
export default class ChatScreen extends Component {
    render() {
        return <View style={styles.container}>
            <FlatList data={fakeData} style={styles.flatList}
            keyExtractor={(item, index) => {
                return `${index}`
            }}
            renderItem = {(item) => {
                return <_ChatItem {...item}/> 
            }}>

            </FlatList>
        </View>
    }
}
class _ChatItem extends Component {
    render() {
        const {url, text, status, isSender} = this.props.item
        const {index} = this.props
        return <View>
            <View style={styles.chatItem}>
                <Image style={styles.profile} source={{ uri: url }} />
                <Text style={styles.text}>{text}</Text>
            </View>

            <Text style={styles.status}>{status}</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(41,42,47)',
    },
    flatList: {
        flex: 1,
        width: '100%'
    },
    chatItem: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',        
    },
    profile: {
        width: 40,
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius:20,
        marginHorizontal: 10
    },
    text: {
        height: 40,
        lineHeight: 40,
        backgroundColor: 'rgb(146,224, 149)',
        borderRadius:20, 
        paddingHorizontal: 15      
    },
    status: {
        color: 'white',        
        fontSize: 12,
        opacity: 0.5,
        marginLeft: 70
    }
})