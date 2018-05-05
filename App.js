/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';

import { StackNavigator } from 'react-navigation';

import ViewCom from './Components/ViewCom/ViewCom';
import TextCom from './Components/TextCom/TextCom';
import TextInputCom from './Components/TextInputCom/TextInputCom';
import Touchable from './Components/TouchableCom/TouchableCom';

class HomeDemo extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 0,
    },
  }
  render() {
    return (
      <View style={[styles.flex, { marginTop: 80 }]}>
        <View style={[styles.item]} >
          <Text style={[styles.font]} onPress={() => this.props.navigation.navigate('viewDemo', { data: '导航传递参数' })}>View-组件练习</Text>
        </View>
        <View style={[styles.item,]} >
          <Text style={[styles.font]} onPress={() => this.props.navigation.navigate('TextDemo')}>Text-组件练习</Text>
        </View>
        <View style={[styles.item,]} >
          <Text style={[styles.font]} onPress={() => this.props.navigation.navigate('TextInputDemo')}>TextInput-组件练习</Text>
        </View>
        <View style={[styles.item,]} >
          <Text style={[styles.font]} onPress={() => this.props.navigation.navigate('TouchableDemo')}>Touchable-组件练习</Text>
        </View>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    viewDemo: {
      screen: ViewCom,
    },
    TextDemo: {
      screen: TextCom,
    },
    Home: {
      screen: HomeDemo
    },
    TextInputDemo: {
      screen: TextInputCom
    },
    TouchableDemo: {
      screen: Touchable
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        // backgroundColor:'red'
      },
      headerTintColor: '#666',//标题字体颜色
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
const styles = StyleSheet.create({
  item: {
    flexBasis: 300 / PixelRatio.get(),
    width: 300 / PixelRatio.get(),
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 10,
    marginRight: 0,
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  }
});
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}