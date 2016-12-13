'use strict'
import React, { Component, PropTypes } from 'react';
import { View, Image, Text, StyleSheet, ViewPagerAndroid, Dimensions, TouchableOpacity } from 'react-native';
import ViewPager from 'react-native-viewpager';


//获取屏幕信息
var width = Dimensions.get('window').width;
var arr_image = [
    { uri: 'http://a1.qpic.cn/psb?/V10wyt7k2pSXWR/l.hdZk2MlF0Fu5*.Fx28WGh*FuKjjA*oYttALzQnNZU!/b/dPYAAAAAAAAA&bo=2gSPAQAAAAADB3I!&rf=viewer_4' },
    { uri: 'http://b173.photo.store.qq.com/psb?/V10wyt7k2pSXWR/sCbv2UdtcwecxAYdlwTf0P46JPZ6AM5r0k2U4rqRPcY!/b/dK0AAAAAAAAA&bo=2gSPAQAAAAADB3I!&rf=viewer_4' },
    { uri: 'http://b177.photo.store.qq.com/psb?/V10wyt7k2pSXWR/DheqjBjyXFvLmhDzSIziE2CXrNzD6eAtOhe1CN6hqpc!/b/dLEAAAAAAAAA&bo=2gSPAQAAAAADAHU!&rf=viewer_4' }
];
/**
 * 主页面的广告轮播图
 */
export default class MyViewPage extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource: dataSource.cloneWithPages(arr_image)
        };
    }
    _renderPage(data, pageId) {
        return (
            <TouchableOpacity style={{ width: width, height: 130 }} onPress={() => this._onPressImage(pageId)}>
                <Image
                    style={styles.page} source={data}
                    />
            </TouchableOpacity >
        );

    }
    _onPressImage(pageId) {
        alert(pageId);
    }
    render() {
        // let pic = {
        //     uri: 'http://a1.qpic.cn/psb?/V10wyt7k2pSXWR/l.hdZk2MlF0Fu5*.Fx28WGh*FuKjjA*oYttALzQnNZU!/b/dPYAAAAAAAAA&bo=2gSPAQAAAAADB3I!&rf=viewer_4',
        // };
        // return (
        //     <ViewPagerAndroid
        //         initialPage={0}
        //         scrollEnabled={true}
        //         style={styles.bannerStyle}
        //         >
        //         <View style={styles.pageStyle}>
        //             <Image style={styles.imageStyle} source={pic} ></Image>
        //         </View>
        //         <View style={styles.pageStyle}>
        //             <Image style={styles.imageStyle} source={pic}></Image>
        //         </View>
        //         <View style={styles.pageStyle}>
        //             <Image style={styles.imageStyle} source={pic} ></Image>
        //         </View>
        //     </ViewPagerAndroid >
        // );

        return (
            <View style={{ height: 130, width: width }}>
                <ViewPager
                    style={{ height: 130 }}
                    isLoop={true}
                    autoPlay={true}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage.bind(this)}
                    ></ViewPager>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    pageStyle: {
        alignItems: 'center',
    },
    bannerStyle: {
        height: 200,
        width: width
    },

    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
});


MyViewPage.propTypes = {

    // posterFrameSrc: React.PropTypes.string.isRequired,
}
//  export default MyViewPage;
//  module.exports = MyViewPage; ES5的用法 
