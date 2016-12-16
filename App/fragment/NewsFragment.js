'use strict'
import React, { Component } from 'react';
import { View, ToolbarAndroid, Text, Image, StyleSheet, DrawerLayoutAndroid, StatusBar, ListView, TouchableOpacity, RefreshControl, ActivityIndicator,Dimensions } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import BaseComponent from 'HelloReact/App/BaseComponent';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import HomeListView from 'HelloReact/App/mainPage/HomeListView';
import MyWebWiew from 'HelloReact/App/mainPage/WebPage'


//tab 标题
var arrNewsType = ['shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang'];
var deviceWidth = Dimensions.get('window').width;

/**
 * 新闻列表 展示头条，军事等新闻
 * 使用扩展控件 
 * 下拉刷新暂时用官方的。
 */
export default class NewsFragment extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabName: '头条',
        }

    }

    _onChangeTab(object) {
        //网络请求
        index = object.i;
    }

    render() {
        return (
            <ScrollableTabView
                tabBarPosition={'top'}
                initialPage={0}
                scrollWithoutAnimation={true}
                tabBarActiveTextColor='#8E49FE' //选中的文字颜色
                tabBarUnderlineColor='#8E49FE'
                renderTabBar={() => <ScrollableTabBar />}
                // onChangeTab={(object) => { index = object.i } } //通过onchageTab回调的i参数获取当前索引
                >
                <NewsListView tabLabel='社会' navigator={this.props} index={0}></NewsListView>
                <NewsListView tabLabel='国内' navigator={this.props} index={1}></NewsListView>
                <NewsListView tabLabel='国际' navigator={this.props} index={2}></NewsListView>
                <NewsListView tabLabel='娱乐' navigator={this.props} index={3}></NewsListView>
                <NewsListView tabLabel='体育' navigator={this.props} index={4}></NewsListView>
                <NewsListView tabLabel='军事' navigator={this.props} index={5}></NewsListView>
                <NewsListView tabLabel='科技' navigator={this.props} index={6}></NewsListView>
                <NewsListView tabLabel='财经' navigator={this.props} index={7}></NewsListView>
                <NewsListView tabLabel='时尚' navigator={this.props} index={8}></NewsListView>

            </ScrollableTabView>
        );
    }
}
/**
 * 支持上拉加载下拉刷新
 */
var httpUrl = 'http://v.juhe.cn/toutiao/index?key=bc05474dd386731c3ffc5946620ec1a6&type=';
class NewsListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        var index = this.props.index;//通过属性传递页面索引。如果放成全局的话 会出现0加载两次。
        this.state = {
            dataSource: ds.cloneWithRows(['']),
            isRefreshing: false,
            index: index,
            loaded: false
        }
    }
    componentDidMount() {
        this._onlineReq();
    }
    jumpWeb(row) {
        const {navigator} = this.props.navigator;
        if (navigator) {
            navigator.push({
                name: 'MyWebWiew',
                component: MyWebWiew,
                params: {
                    url: row.url,
                }
            });
        }
    }
    _renderRow(row) {
        return (
            <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => this.jumpWeb(row)}
                >
                <View style={{ marginTop: 8, flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginLeft: 8, marginRight: 8, width: 60, height: 60 }} source={{ uri: row.thumbnail_pic_s }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ width: deviceWidth - 80, flexWrap: 'wrap' }}>{row.title}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1 }}>
                                <Text style={{ flex: 0 }}>{row.author_name}</Text>
                                <Text style={{ flex: 1 }}></Text>
                                <Text >{row.date}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#e2e2e2' }} />
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"
                        />
                </View>
            );
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"
                        />
                }
                >
            </ListView>

        );
    }
    _onRefresh() {
        this._onlineReq();
    }

    _onlineReq() {
        fetch(httpUrl + arrNewsType[this.state.index])
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.result.data),
                    isRefreshing: false,
                    loaded: true,
                })
                return responseJson.result.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }

}
