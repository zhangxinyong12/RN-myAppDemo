import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    con:{
        marginTop:30,
        alignItems:'center',
    },
    imgs:{
        width:200,
        height:200,
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:120,
        height:120,
    },
    page:{
        marginTop:10,
        
    }
})

const imgList = [
    'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=04083ce4fa03738dc14a0a22831bb073/08f790529822720eb1faa1be77cb0a46f21fabba.jpg',
    'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5313080a0e087bf462ec51e9c2d2575e/37d3d539b6003af37401eb21392ac65c1038b633.jpg',
    'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d72d649b8e025aafcc3278cbcbecab8d/f3d3572c11dfa9ec8c2d744c6ed0f703918fc16d.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603508255,2461199990&fm=27&gp=0.jpg',
]
export default class ImageCom extends Component {

    render() {
        const imgurl=imgList[0];
        return (
            <View style={[styles.con]}>
                <View style={[styles.imgs]}>
                    <Image style={[styles.img]} source={{uri:imgurl}} />
                </View>
                <View style={[styles.page]}>
                    <TouchableOpacity style={[styles.up]}>
                        <Text>上一页</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.down]}>
                        <Text>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
