import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    con: {
        height: 80,
        flexDirection: 'row',
        marginTop: 20,
    },
    ipt: {
        width: 200,
        borderWidth: 1,
        borderColor: '#b8b8b8',
        height: 40,
        borderRightWidth: 0,
        marginLeft: -20,
        padding: 0,
        paddingLeft: 5,
        borderRadius: 5,
    },
    search: {
        height: 40,
        width: 80,
        backgroundColor: '#38f',
        marginLeft: -5,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    font16: {
        fontSize: 16,
        color: '#fff',
    },
    list: {
        borderColor: '#cdcd',
        borderWidth: 1,
        width: 200,
        marginLeft: 28,
        paddingLeft: 10,
        paddingRight: 10,
    },
    listText: {
        height: 26,
        lineHeight: 26,
    },
    flex: {
        flex: 1,
    }
})
class TextInputCom extends Component {
    constructor(props) {
        super(props);
        this.getChange = this.getChange.bind(this);
        this.state = {
            data: null
        }
    }
    getChange(e) {
        const text = e.nativeEvent.text;
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(text + Math.random())
        };
        this.setState({
            data: arr
        });

    }
    render() {
        const data = this.state.data || [];
        return (
            <View>
                <View style={[styles.con, styles.center]}>
                    <View style={[styles.ipt]}>
                        <TextInput onChange={(event) => { this.getChange(event) }} autoFocus={true} underlineColorAndroid="transparent" style={[styles.borderNone]} placeholder="请输入账号" placeholderTextColor="red"></TextInput>
                    </View>
                    <View style={[styles.search, styles.center]}>
                        <Text style={[styles.font16]}>搜索</Text>
                    </View>
                </View>
                <View>
                </View>
                {
                    data.length > 0 ? 
                    <View style={[styles.list]}>
                        {
                            data.map((item, i) => (
                                <Text numberOfLines={1} style={[styles.listText]} key={i}>{item}</Text>
                            ))
                        }
                    </View> : null
                }


            </View>
        )
    }
}
module.exports = TextInputCom;
