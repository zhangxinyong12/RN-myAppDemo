import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    con:{
        flexDirection:'row',
        marginTop:20,

    },
    ipt:{
        width:200,
        borderWidth:1,
        borderColor:'#b8b8b8',
        height:40,
        borderRightWidth:0,
        marginLeft:-20,
        padding:0,
        paddingLeft:5,
    },
    search:{
        height:40,
        width:120,
        backgroundColor:'#38f',
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    font16:{
        fontSize:16,
        color:'#fff',
    },
})
class TextInputCom extends Component {
    render() {
        return (
            <View style={[styles.con,styles.center]}>
                <View style={[styles.ipt]}>
                    <TextInput autoFocus="true" underlineColorAndroid="transparent" style={[styles.borderNone]} placeholder="请输入账号" placeholderTextColor="red"></TextInput>
                </View>
                <View style={[styles.search,styles.center]}>
                    <Text style={[styles.font16]}>搜索</Text>
                </View>
            </View>
        )
    }
}
module.exports = TextInputCom;
