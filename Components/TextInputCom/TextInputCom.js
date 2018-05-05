import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// import {jsonp} from 'jsonp';
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
        borderRadius:5,
    },
    search:{
        height:40,
        width:80,
        backgroundColor:'#38f',
        marginLeft:-5,
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
    constructor(props){
        super(props);
        this.getChange=this.getChange.bind(this);
    }
    getChange(e){
        // const wd=e.nativeEvent.text;
        // const url=`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${wd}&json=1&p=3&sid=&req=2&csor=1&pwd=1&cb=jQuery110204225127170498_1525494898942&_=${new Date().getTime()}`;
        // jsonp(url,function(err,data){
        //     alert(data.q)
        // })
    }
    render() {
        return (
            <View style={[styles.con,styles.center]}>
                <View style={[styles.ipt]}>
                    <TextInput onChange={(event)=>{this.getChange(event)}} keyboardType="numeric" autoFocus="true" underlineColorAndroid="transparent" style={[styles.borderNone]} placeholder="请输入账号" placeholderTextColor="red"></TextInput>
                </View>
                <View style={[styles.search,styles.center]}>
                    <Text style={[styles.font16]}>搜索</Text>
                </View>
            </View>
        )
    }
}
module.exports = TextInputCom;
