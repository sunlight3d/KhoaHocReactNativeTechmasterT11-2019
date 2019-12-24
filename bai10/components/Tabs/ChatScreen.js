import React, {Component} from 'react'
import {
View, TextInput, 
StyleSheet,
Text, 
Image,
FlatList,
TouchableHighlight
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
    constructor(props) {
        super(props)
        this.pressSend = this.pressSend.bind(this)
    }
    state = {
        messengers: fakeData,
        flatList: React.createRef()
    }
    pressSend = (typedText) => {

        this.setState({messengers: [...this.state.messengers, {
            url: fakeURL, text: typedText, status: "I am 32typing", isSender: true
        }]})           
        
    }
    componentDidUpdate() {
        this.state.flatList.current.scrollToIndex({index: this.state.messengers.length - 1})
    }
    
    render() {        
        return <View style={styles.container}>
            <FlatList
                data={this.state.messengers} style={styles.flatList}
                ref={this.state.flatList}
                onScrollToIndexFailed={(error) => {
                    this.state.flatList.current.scrollToOffset({ offset: error.averageItemLength * error.index, animated: true });
                    setTimeout(() => {
                        if (this.state.messengers.length !== 0 && this.state.flatList.current !== null) {
                            this.state.flatList.current.scrollToIndex({ index: error.index, animated: true });
                        }
                    }, 100);
                }}
                keyExtractor={(item, index) => {
                    return `${index}`
                }}
                extraData={this.state.messengers}
                renderItem={(item) => {
                    return <_ChatItem {...item} />
                }} />
            <_BottomView pressSend={this.pressSend} />
        </View>
    }
}
class _ChatItem extends Component {
    render() {
        const {url, text, status, isSender} = this.props.item
        const {index} = this.props
        const styles = stylesChatItem(isSender)
        return <View>
            <View style={styles.chatItem}>
                <Image style={styles.profile} source={{ uri: url }} />
                <View style={styles.text}>
                    <Text>{text}</Text>
                </View>
                
            </View>

            <Text style={styles.status}>{status}</Text>
        </View>
    }
}
class _BottomView extends Component {
    state = {
        typedText: ''
    }
    render() {
        const {typedText} = this.state
        const {pressSend} = this.props
        return <View style={stylesBottomView.container}>
            <TextInput placeholder={"Enter your sms:"} 
                onChangeText = {(typedText) => this.setState({typedText})}
                value={typedText}
                style={stylesBottomView.textInput}/>
            <TouchableHighlight style={stylesBottomView.btnSend} onPress = {() => {
                pressSend(typedText)
            }}>
                <Text>Send</Text>
            </TouchableHighlight>
            
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
})
const stylesChatItem = (isSender) => isSender == true ? StyleSheet.create({
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
        justifyContent: 'center',
        alignItems:'center',
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
}) :
//isSender = false
StyleSheet.create({
    chatItem: {
        flexDirection: 'row-reverse',
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
        justifyContent: 'center',
        alignItems:'center',
        height: 40,
        lineHeight: 40,
        backgroundColor: 'pink',
        borderRadius:20, 
        paddingHorizontal: 15      
    },
    status: {
        color: 'white',        
        fontSize: 12,
        opacity: 0.5,
        textAlign: 'right',
        marginRight: 70
    }
})
const stylesBottomView = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        height:50,         
        width: '95%',
        
    },
    textInput: {
        width: '80%',                
        padding: 10,
        backgroundColor: '#3cb371' 
    },
    btnSend: {        
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffa500'
        
    }
})