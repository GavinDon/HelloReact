'use strict'
import React, { Component } from 'react';
import { View, ToolbarAndroid, Text, require, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import { NavigationView } from 'HelloReact/App/mainPage/drawerLayout';
import MyViewPage from 'HelloReact/App/mainPage/banner';
import HomeListView from 'HelloReact/App/mainPage/HomeListView';
import BaseComponent from 'HelloReact/App/BaseComponent'

/**
/**
 * 构建页面首页
 */
export default class Main extends BaseComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => NavigationView}
                >
                <MyToolbar sub='' mTitle='首页' />
                <MyViewPage />
                <HomeListView navigator={this.props} />


            </DrawerLayoutAndroid>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'red',
        flex: 0,
        alignItems: 'center'
    },
    defaultTexts: {
        margin: 10,
        fontSize: 15,
        textAlign: 'center',
    },

});




