'use strict'
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
/**
 * 抽屉布局
 * 导出jsx element 而不是自定义的混合组件。
 */


const styles = StyleSheet.create({
    content: {
        backgroundColor: 'red',
        flex: 0,
        alignItems: 'center'
    },
    defaultTexts: {
        margin: 10,
    }
});
// 导出变量
export  var  NavigationView=
         <View style={styles.content}>  
         <Image style={styles.defaultTexts} source={require('HelloReact/image/avatar.png')}></Image>  
         </View>;

// var child1 = React.createElement('li', null, 'First Text Content');
// var child2 = React.createElement('li', null, 'Second Text Content');
// export var NavigationView = React.createElement('ul', null, child1, child2);

