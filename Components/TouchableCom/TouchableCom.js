import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list:{
        width:200,
        height:40,
        marginLeft:20,
    }
})

class Touchable extends Component {

    render() {
        return (
            <View>
                <View style={[styles.list]}>
                {/* underlayColor 点击后底色会出现 */}
                    <TouchableHighlight underlayColor="red" onPress={()=>{alert('TouchableHighlight')}}>
                        <Text >点击透明度,颜色会变化</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.list]}>
                    <TouchableOpacity  onPress={()=>{alert('TouchableOpacity')}}>
                        <Text>点击透明度,颜色会变化</Text>
                    </TouchableOpacity >
                </View>
                <View style={[styles.list]}>
                    <TouchableNativeFeedback onPress={()=>{alert('TouchableNativeFeedback')}}>
                        <Text>点击没有什么变化变化</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}
module.exports=Touchable;
