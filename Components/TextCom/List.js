import React, { Component } from 'react';
import { View, Text, PixelRatio, StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    flex:{
        flex:1,
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderColor:'#ddd',
        justifyContent:'center',
    },
    list_item_font:{
        fontSize:16
    }
})

class List extends Component {
    render() {
    return (
      <View style={[styles.list_item]}>
          <Text style={[styles.list_item_font]} numberOfLines={1}>{this.props.title} </Text>
      </View>
    )
  }
}
module.exports=List;
