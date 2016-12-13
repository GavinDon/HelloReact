'use strict'
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, BackAndroid, Platform } from 'react-native';

/**
 * BaseComponent 
 * 处理相同的逻辑
 */
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    };
}  