'use strict'
import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, Navigator, Dimensions, AsyncStorage } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import Main from 'HelloReact/App/mainPage/main';

/**
 * 实现登录界面 
 */
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
    /**
     * 处理登录逻辑 
     */
    _onPressButton() {
        const { navigator} = this.props;
        var acc = this.state.accout;
        var psw = this.state.psw
        if (acc == null || acc == '') {
            ToastAndroid.showWithGravity('帐号不能为空', ToastAndroid.SHORT, 1);
        } else if (psw == null || psw == '') {
            ToastAndroid.showWithGravity('密码不能为空', ToastAndroid.SHORT, 1);
        } else {
            this.saveUserInfo();

        }
        if (navigator) {
            navigator.replace({
                name: 'Main',
                component: Main,
            })
        }
    }
    /**
     * 存储个人信息
     */
    saveUserInfo() {
        AsyncStorage.setItem(
            'acc',
            this.state.accout,
            (error) => {
                if (!error) {
                    alert('AsyncStorage ')
                } else {
                    alert('存储失败')
                }
            });
    }



    render() {
        return (
            <View style={styles.contents}>
                <MyToolbar mTitle='登录' />
                <View style={styles.header}>
                    <Image source={require('HelloReact/image/qq.png')} style={[styles.avaterCenter, styles.avaterSize]}></Image>
                </View>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    maxLength={10}
                    //设置监听 监听的参数是accout 改变state的值
                    onChangeText={(accout) => this.setState({ accout })}
                    value={this.state.accout}
                    />
                <View style={styles.divider} />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='密码'
                    numberOfLines={1}
                    maxLength={18}
                    onChangeText={(psw) => this.setState({ psw })}
                    secureTextEntry={true}
                    ref='pwd'
                    />
                <View style={styles.divider} />
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={this._onPressButton.bind(this)}
                    >
                    <Text> 登录</Text>
                </TouchableOpacity >


            </View>
        );
    }
}
//获取屏幕信息
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    contents: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        backgroundColor: '#e2e2e2',
        height: 120,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        justifyContent: 'center',
    },
    avaterCenter: {
        alignSelf: 'center',

    },
    avaterSize: {
        width: 90,
        height: 90,

    },
    input: {
        marginLeft: 16,
        marginTop: 16,
    },
    divider: {
        backgroundColor: 'red',
        height: 1,
        marginLeft: 16,
        marginRight: 16
    },
    btnLogin: {
        alignSelf: 'center',
        height: 40,
        width: width - 60,
        backgroundColor: '#dcb5ff',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }
});