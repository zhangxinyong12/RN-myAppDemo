import React, { Component } from 'react';
import { View, Text,StyleSheet,PixelRatio,} from 'react-native';
import {StackNavigator} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    height:84,
    padding:2,
    borderRadius:5,
    backgroundColor: '#ff0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1,
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineBottom:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  }
});


export default class ViewCom extends Component {
  
  componentDidMount(){
    const {params}=this.props.navigation.state;
    alert(params.data);
  }
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.container}>
          <View style={[styles.item, styles.center]}>
            <Text style={[styles.font]}>酒店</Text>
          </View>
          <View style={[styles.item,styles.lineLeftRight]}>
            <View style={[styles.flex, styles.center,styles.lineBottom]}>
              <Text style={[styles.center,styles.font]}>公寓</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text style={[styles.center,styles.font]}>住宿</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.flex, styles.center,styles.lineBottom]}>
              <Text style={[styles.center,styles.font]}>公寓</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text style={[styles.center,styles.font]}>住宿</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
