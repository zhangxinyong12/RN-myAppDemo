import React, { Component } from 'react';
import { View, Text, PixelRatio, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 80,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    font1:{
        color:'#cd1d1c',
    },
    font2:{
        color:'#fff',
        backgroundColor:'#cd1d1c'
    }
})

class Header extends Component {
    render() {
        return (
            <View style={[styles.header]}>
                <Text style={[styles.font]}>
                    <Text style={[styles.font1]}>网易</Text>
                    <Text style={[styles.font2]}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        )
    }
}

module.exports = Header;//导出