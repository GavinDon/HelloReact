'use strict'
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';
/**
 * Webview 显示网页祥情 
 */

export default class MyWebWiew extends Component {
    constructor(props) {
        super(props);
    }
_onpress() {
    //此this代表的该函数的this.所以需要在点击事件处绑定window的this从而改变this的指向
    const navigator = this.props.navigator; //要声明变量 
    if (navigator) {
        navigator.pop();
    }
}
render() {
    return (
        <View style={{ flex: 1 }}>
            <WebView style={styles.constaner}
                source={{ uri: this.props.url }}
                startInLoadingState={true} //强制WebView在第一次加载时先显示loading视图。默认为true。
                domStorageEnabled={true}
                scalesPageToFit={true}
                javaScriptEnabled={true}
                renderError={() => <Text>url 错误</Text>}
                >
            </WebView>
        </View>
    );
}


}

const styles = StyleSheet.create({
    constaner: {
        flex: 1
    },
}
);
