'use strict'
import React, { Component } from 'react';
import { View, ToolbarAndroid, Text, Image, StyleSheet, DrawerLayoutAndroid, StatusBar } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import NavigationView from 'HelloReact/App/mainPage/drawerLayout';
import MyViewPage from 'HelloReact/App/mainPage/banner';
import HomeListView from 'HelloReact/App/mainPage/HomeListView';
import BaseComponent from 'HelloReact/App/BaseComponent';
import TabNavigator from 'react-native-tab-navigator';
import HomeFragment from 'HelloReact/App/fragment/HomeFragment';
import NewsFragment from 'HelloReact/App/fragment/NewsFragment';


/**
/**
 * 承载几个fragment的主activity
 */
class Main extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home', //默认页面为“首页”  
        }

    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("HelloReact/image/buttom_01b.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("HelloReact/image/buttom_01a.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <HomeFragment {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="新闻"
                    selected={this.state.selectedTab === 'news'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("HelloReact/image/buttom_02b.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("HelloReact/image/buttom_02a.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'news' })}>
                    <NewsFragment {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selected={this.state.selectedTab === 'center'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("HelloReact/image/buttom_03b.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("HelloReact/image/buttom_03a.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'center' })}>
                    <HomeFragment {...this.props} />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: 'black',
    }
});
export default Main;

