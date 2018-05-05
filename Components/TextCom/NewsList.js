import React, { Component } from 'react';
import { View, Text, PixelRatio, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    con: {
        paddingLeft:10,
        paddingRight:10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        marginTop:10,
    },
    list: {
        fontSize: 16,
        height:30,
        lineHeight:30,
    },
});
class NewsList extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.show=this.show.bind(this);
    }
    show(title){
        alert(title)
    }
    render() {
        const data = this.data;
        return (
            <View style={[styles.con]}>
                <Text style={[styles.header]}>{data.title}</Text>
                {
                    data.data.map((item, i) => (
                        <Text numberOfLines={1} style={[styles.list]} key={i} onPress={()=>{this.show(item.title)}}>{item.title} </Text>
                    ))
                }
            </View>
        )
    }
}

module.exports = NewsList;