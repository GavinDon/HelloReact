'use strict'
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity,
    Navigator,
    AsyncStorage
} from 'react-native';

import MyWebWiew from 'HelloReact/App/mainPage/WebPage'
/**
 * 使用ListView展示新闻列表 
 */
var httpUrl = 'http://v.juhe.cn/toutiao/index?key=bc05474dd386731c3ffc5946620ec1a6&type=top';

export default class HomeListView extends Component {

    constructor(props) {
        super(props);
        // this.jumpWeb = this.jumpWeb.bind(this);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            appkey: 'bc05474dd386731c3ffc5946620ec1a6',
            loaded: false,
        };

    }
    /**
     * 加载网络请求
     */
    _onlineReq() {
        fetch(httpUrl).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.result.data),
                    loaded: true,
                })
                return responseJson.result.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * 组件挂载完成执行
     */
    componentDidMount() {
        this._onlineReq();
    }
    /**
     * 点击跳转webview
     */
    jumpWeb(row) {
        const {navigator} = this.props.navigator;
        if (navigator) {
            navigator.push({
                id: 'MyWebWiew',//唯一标识
                name: 'MyWebWiew', //用来显示title
                component: MyWebWiew,
                params: {
                    url: row.url,
                }
            });
        }
    }
    /**
     * ListView item设置
     */
    renderTopItem(row) {
        return (
            <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => this.jumpWeb(row)}
                >
                <View style={styles.listSyle}>
                    <View style={styles.listItem}>
                        <Image style={{ width: 40, height: 40 }} source={{ uri: row.thumbnail_pic_s }} />
                        <View style={styles.listText}>
                            <Text numberOfLines={2}  >{row.title}</Text>
                            <Text>{row.date}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#e2e2e2' }} />
                </View>
            </TouchableOpacity >
        );
    }
    render() {
        if (!this.state.loaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text >
                        Loading ...
                </Text>
                </View>
            );
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                //一定要绑定this 要不然 item 无法获取值
                renderRow={this.renderTopItem.bind(this)}
                > </ListView>

        );
    }
}
const styles = StyleSheet.create({
    row: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
    listItem: {
        flexDirection: 'row',

    },
    listSyle: {
        margin: 8,
    },
    listText: {
        marginLeft: 8,
        marginRight: 8
    },
});
