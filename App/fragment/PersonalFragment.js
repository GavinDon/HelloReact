'use strict'
import React, { Component } from 'react';
import { View, CameraRoll, Text, Image, StyleSheet, StatusBar, ScrollView, TouchableNativeFeedback, ActivityIndicator, Dimensions } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import BaseComponent from 'HelloReact/App/BaseComponent';
import ImagePicker from 'react-native-image-picker';
/**
 * 个人中心页面
 */
export default class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: require('HelloReact/image/avatar.png'),//默认头像
        }

    }
    //调用系统相册
    _onCheckPhoto() {
        var photoOptions = {
            //底部弹出框选项
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择相册',
            quality: 0.75,
            allowsEditing: true,
            noData: false,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                this.setState({
                    avatarUrl: this.state.avatarUrl,//默认头像
                });
            } else if (response.error) {
                alert('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri, isStatic: true };
                this.setState({
                    avatarUrl: source
                });
            }
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.avatarBacground}>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackground()}
                        onPress={this._onCheckPhoto.bind(this)}
                        >
                        <Image source={this.state.avatarUrl} style={styles.avatar}></Image>
                    </TouchableNativeFeedback>
                    <Text style={styles.nickNameStyle}>React native</Text>
                </View>


            </ScrollView>
        );
    }
}



/**
 * 样式属性
 */
const diviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    avatar: {
        borderRadius: 40,
        width: 80,
        height: 80,


    },
    avatarBacground: {
        height: 160,
        width: diviceWidth,
        backgroundColor: '#aa22ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nickNameStyle: {
        fontSize: 18,
        color: '#f00',//红色
        // position: 'absolute',
        // left: 30,//左边距离屏幕左侧30单位
    }

})