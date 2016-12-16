'use strict'
import React, { Component } from 'react';
import { View, ToolbarAndroid, Text, Image, StyleSheet, DrawerLayoutAndroid, StatusBar } from 'react-native';
import MyToolbar from 'HelloReact/App/mainPage/MyToolbar';
import NavigationView from 'HelloReact/App/mainPage/drawerLayout';
import MyViewPage from 'HelloReact/App/mainPage/banner';
import HomeListView from 'HelloReact/App/mainPage/HomeListView';
import BaseComponent from 'HelloReact/App/BaseComponent'
/**
 * 首页
 */
export default class HomeFragment extends BaseComponent {
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => NavigationView}
                >
                <StatusBar
                    backgroundColor="#8E49FE"
                    />
                <MyToolbar sub='' mTitle='首页' />
                <MyViewPage />
                <HomeListView navigator={this.props} />
            </DrawerLayoutAndroid>
        );
    }
}