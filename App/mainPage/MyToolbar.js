'use strict'
import React, { Component } from 'react';
import { View, Text, ToolbarAndroid, StyleSheet } from 'react-native';

/**
 * 使用控件toolbarAndroid实现标题栏
 */
export default class MyToolbar extends Component {
    render() {
        return (
            <ToolbarAndroid
                style={styles.backStyle}
                title={this.props.mTitle}
                subtitle={this.props.sub}
                >
            </ToolbarAndroid>
        );
    }
}

 
const styles = StyleSheet.create({
    backStyle: {
        backgroundColor: 'red',
        height: 50,
        
    }
});

