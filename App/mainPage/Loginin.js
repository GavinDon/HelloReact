'use strict'
import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, Navigator, Dimensions, AsyncStorage, StatusBar } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import Main from 'HelloReact/App/mainPage/main';
export default class LoginIn extends Component {
    constructor(props) {
        super(props);
        const { navigator} = this.props;
        //渲染 只要有setState就会走render 
        this.state = {
            accout: '530893850',//帐号
            psw: ''//密码
        }
    }
    render() {
        return (

            <Image source={require('HelloReact/image/loginbg.jpg')} style={styles.backgroundImage}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <StatusBar
                        backgroundColor="transparent"
                        translucent={true}
                        />
                    <View style={styles.contain}>
                        <Text style={{ fontSize: 20, height: 60, width: deviceWidth - 60, textAlign: 'center', textAlignVertical: 'center' }}>SIGN IN</Text>
                        <View style={{
                            flexDirection: 'row', backgroundColor: '#fff', height: 60, alignSelf: 'center',
                        }}>
                            <Image source={require('HelloReact/image/email.png')} style={styles.imageStyle}></Image>
                            <TextInput underlineColorAndroid='transparent'
                                placeholder='E-mail address'
                                numberOfLines={1}
                                maxLength={10}
                                value={this.state.accout}
                                onChangeText={(accout) => this.setState({ accout })}
                                style={styles.TextInputStyle}
                                ></TextInput>
                        </View>
                        <View style={styles.divider} />
                        {/**帐号输入 */}
                        <View style={{
                            flexDirection: 'row', backgroundColor: '#fff', height: 60, alignSelf: 'center'
                        }}>
                            <Image source={require('HelloReact/image/password.png')} style={styles.imageStyle}></Image>
                            <TextInput underlineColorAndroid='transparent'
                                placeholder='password'
                                numberOfLines={1}
                                maxLength={18}
                                value={this.state.psw}
                                onChangeText={(psw) => this.setState({ psw })}
                                secureTextEntry={true}
                                style={styles.TextInputStyle}
                                ></TextInput>
                        </View>
                        {/**密码输入 */}
                        <TouchableOpacity
                            activeOpacity={0.3}
                            onPress={this._onPressButton.bind(this)}
                            style={{ marginTop: 30 }}
                            >
                            <Text style={styles.textSignStyle}>Sign in</Text>
                        </TouchableOpacity>
                        {/**登录按扭 */}
                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={{ marginTop: 18 }}
                            >
                            <Text style={styles.forgetStyle}>Forget password</Text>
                        </TouchableOpacity>
                        {/**忘记密码*/}

                    </View>
                </View>
            </Image>
        );
    }
    _onPressButton() {
        const { navigator} = this.props;
        var acc = this.state.accout;
        var psw = this.state.psw
        if (acc == null || acc == '') {
            ToastAndroid.showWithGravity('帐号不能为空', ToastAndroid.SHORT, 1);
        } else if (psw == null || psw == '') {
            ToastAndroid.showWithGravity('密码不能为空', ToastAndroid.SHORT, 1);
        } else {
        }
        if (navigator) {
            navigator.replace({
                name: 'Main',
                component: Main,
            })
        }
    }

}

/**
 * 样式 
 */
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        backgroundColor: 'rgba(0,0,0,0)',
    },
    contain: {
        borderRadius: 8,
        width: deviceWidth - 60,
        height: deviceWidth - 30,
        backgroundColor: '#e0e0e0',
        elevation: 20,
    },
    imageStyle: {
        width: 40,
        height: 40,
        marginLeft: 8,
        marginRight: 8,
        resizeMode: 'stretch',
    },
    TextInputStyle: {
        flex: 1,
        fontSize: 16,
    },
    divider: {
        backgroundColor: '#e2e2e2',
        height: 1,
        marginLeft: 8,
    },
    textSignStyle: {
        backgroundColor: 'green',
        height: 40,
        width: deviceWidth - 80,
        marginLeft: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#fff'
    },
    forgetStyle: {
        fontSize: 14,
        flex: 1,
        height: 40,
        width: deviceWidth - 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})