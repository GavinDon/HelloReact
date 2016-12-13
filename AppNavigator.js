import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet,
    Navigator, Text,
    View, ScrollView,
    Image, ListView,
    TouchableNativeFeedback
} from 'react-native';
import LoginIn from './App/mainPage/Loginin'
export default class AppNavigator extends Component {

    constructor(props) {
        super(props);
        
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        if (Component) {
            return <Component navigator={navigator} route={route} {...route.params} />
        }
    }
    render() {
        var defaultName = 'LoginIn';
        var defaultComponent = LoginIn;
        return (
            <Navigator
                //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                     gestures: { pop: false }
                    //跳转的动画
                    return Navigator.SceneConfigs.FloatFromLeft;
                } }
                //渲染页面
                renderScene={this._renderScene.bind(this)} />
        );
    }
    
}
