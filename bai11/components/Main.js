import React from 'react'
import {Component} from 'react'
import {View, 
    Text, 
    TextInput, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} 
from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs'
import { changeNickName } from '../redux/actions/actions'
import {registerUser, testFakeAPI} from '../server/apis'

import {NativeModules} from 'react-native'
const {sendRequest} = NativeModules.ApiManager

export class Main extends Component {
    state = {
        isLogin: true,
        email: 'hoang1@gmail.com',
        password: '122255',
        retypedPassword: ''
    }
    async componentDidMount() {
        //testFakeAPI()                
        try {            
            const url = "https://demo.3serp.vn:44318/SystemBsHubAPI/api/LoginHubAPI/Getdvcsbyuser?_user_name=ITG"
            let result = await sendRequest(url)
            alert(JSON.stringify(result))
        } catch(error) {
            alert(JSON.stringify("errorv = " + JSON.stringify(error)))
        }
        
    }
    _loginOrRegister = async () => {
        const {email, password, isLogin} = this.state
        if(isLogin === true) {
            
        } else {
            //Alert.alert(`Email = ${email}, password = ${password}`)
            try {
                debugger
                await registerUser(email, password)
            } catch(error) {

            }
            // const stackNavigation = this.props.navigation
            // stackNavigation.navigate("TabNavigator", {email})
        }
    }
    render() {
        const {isLogin, email, password, retypedPassword} = this.state
        const {dispatch} = this.props
        return  <View style = {styles.container}>
            <Image source={require('../images/cat.jpeg')} 
                style={styles.logo}/>
            <View style={styles.viewLoginRegister}>
                <View style={styles.viewLogin}>
                    <TouchableOpacity onPress={(event) => {
                        this.setState({isLogin: true})                
                    }}>
                        <Text style={[styles.btnSignIn, {borderBottomColor: 
                                isLogin === true ? 'rgba(0,0,0,1.0)': 'rgba(0,0,0, 0.1)'}]}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewRegister}>
                    <TouchableOpacity onPress={(event) => {
                        this.setState({isLogin: false})
                    }}>                        
                    <Text style={[styles.btnSignIn, {borderBottomColor: 
                               isLogin === false ? 'rgba(0,0,0, 1.0)': 'rgba(0,0,0, 0.1)'}]}>
                            SIGN UP
                    </Text>
                    </TouchableOpacity>
                </View>                
            </View>
            <View style={styles.viewEmail}>
                <Text>
                    Email
                </Text>
                <View style={styles.viewTextInput}>
                    <Icon name="user" size={20} color="#000000" />
                    <TextInput style={styles.textInput} 
                        keyboardType={"email-address"}
                        value={email}
                        onChangeText = {(email) => {
                            // dispatch(changeNickName(email))
                            this.setState({email})                            
                        }}
                        placeholder="Enter your email">
                    </TextInput>    
                </View>
            </View>
            <View style={styles.viewEmail}>
                <Text>
                    Password
                </Text>
                <View style={styles.viewTextInput}>
                    <Icon name="user" size={20} color="#000000" />
                    <TextInput style={styles.textInput} 
                        secureTextEntry
                        value={password}
                        onChangeText = {(password) => {
                            this.setState({password})
                        }}
                        placeholder="Enter your password">
                    </TextInput>    
                </View>                
            </View>

            {isLogin === true && 
                <View style={{height: 30, width: '90%'}}>
                    <TouchableOpacity style={{position: 'absolute', right: 0}}>
                        <Text style={{textAlign: 'right', alignSelf:'stretch'}}>
                            FORGOT PASSWORD?
                        </Text>
                    </TouchableOpacity>
                </View>
                }
            {isLogin == false &&
            <View style={styles.viewEmail}>
                <Text>
                    Retype Password
                </Text>                
                <View style={styles.viewTextInput}>
                    <Icon name="user" size={20} color="#000000" />
                    <TextInput style={styles.textInput} 
                        secureTextEntry
                        value={retypedPassword}
                        onChangeText = {(retypedPassword) => {
                            this.setState({retypedPassword})
                        }}
                        placeholder="Retype your password">
                    </TextInput>    
                </View>
            </View>}
            <TouchableOpacity style={styles.buttonSignIn} 
            onPress = {(event) => {
                this._loginOrRegister()
            }}>
                <Text style={{textAlign: 'center',lineHeight: 40}}>
                    {isLogin === true ? "SIGN IN": "SIGN UP"}
                </Text>
            </TouchableOpacity>
        </View>
    }
}
const mapStateToProps = (state) => {
    return {
        isDarkMode: state.settingsReducer.isDarkMode,
        nickName: state.settingsReducer.nickName
    }    
}
export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,        
        marginTop: 20        
    },
    viewLoginRegister: {    
        height: 60,
        alignSelf: 'stretch', 
        flexDirection: 'row',
        paddingHorizontal: 20    
    }, 
    viewLogin: {
        width: '50%',
        height: '100%',            
    }, 
    viewRegister: {
        width: '50%',
        height: '100%',
    }, 
    btnSignIn: {
        fontSize: 16,
        textAlign: 'center',
        height: '100%',
        lineHeight: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },    
    viewEmail: {
        flexDirection: 'column',
        height: 90,        
        width: '100%',
        padding: 20,
    },
    viewTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingRight: 20,
        borderColor: 'black',
        borderWidth: 1,     
        borderRadius: 5,           
    },
    textInput: {
        height: 40,        
        width: '100%',
        paddingHorizontal: 10
    },
    buttonSignIn: {
        height: 40,        
        width: '90%',        
        borderRadius: 6,
        paddingHorizontal: 20,        
        backgroundColor: 'green',        
    },
})
