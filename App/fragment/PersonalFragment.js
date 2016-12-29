'use strict'
import React, { Component } from 'react';
import { View, CameraRoll, Text, Image, StyleSheet, StatusBar, ScrollView, ListView, ToastAndroid, TouchableNativeFeedback, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import BaseComponent from 'HelloReact/App/BaseComponent';
import ImagePicker from 'react-native-image-picker';
/**
 * 个人中心页面
 */
var imageSource = {
    'data': [{ 'image': 'HelloReact/image/avatar.png', 'text': '设置', rowId: 1 },
    { 'image': 'HelloReact/image/avatar.png', 'text': '我的钱包', rowId: 2 },
    { 'image': 'HelloReact/image/avatar.png', 'text': '我的红包', rowId: 3 },
    { 'image': 'HelloReact/image/avatar.png', 'text': '金币商城', rowId: 4 },
    { 'image': 'HelloReact/image/avatar.png', 'text': '游戏特权', rowId: 5 },
    { 'image': 'HelloReact/image/avatar.png', 'text': '每日签到', rowId: 6 },
    { 'image': 'HelloReact/image/avatar.png', 'text': '应用收藏', rowId: 7 },
    ]
};

export default class Personal extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(imageSource.data),
            avatarUrl: require('HelloReact/image/avatar.png'),//默认头像
            divider: false,
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

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.lvStyle}
                    >
                </ListView>


            </ScrollView>
        );
    }


    /**
     * ListView 渲染行
     */
    _renderRow(rowData) {
        // if (rowData.rowId == 2 || rowData.rowId == 4) {
        //     this.setState({
        //         divider: true,
        //     })

        // };
        return (
            <View>
                <View style={{ height: 60, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.3}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require(rowData.image)} style={{ width: 40, height: 40, marginRight: 16, marginLeft: 8 }}></Image>
                            <Text style={{ fontSize: 16 }}>{rowData.text} </Text>
                            <View style={{ flex: 1 }}></View>
                            <Image source={require('HelloReact/image/arrow.png')} style={{ width: 30, height: 30, marginRight: 8 }}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: diviceWidth, height: 1, backgroundColor: '#e0e0e0', alignItems: 'flex-end' }}></View>
                <View ref='text' style={(rowData.rowId == 2 || rowData.rowId == 5) ? styles.showDivider : styles.hiddenDivider}></View>

            </View>
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
    },
    lvStyle: {
        backgroundColor: 'white',
        marginTop: 8,

    },
    showDivider: {
        width: diviceWidth,
        height: 16,
        backgroundColor:'#e0e0e0'
    },
    hiddenDivider: {
        width: 0,
        height: 0
    },

})