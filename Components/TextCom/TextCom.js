import React, { Component } from 'react';
import { View, Text,StyleSheet,PixelRatio} from 'react-native';
import {StackNavigator} from 'react-navigation';

const Header=require('./Header');
const List=require('./List');
const NewsList=require('./NewsList');
const list_data=[
  {title:'一线记录数据放到据了'},
  {title:'也一样一样楼上的韩国但是厉害和 回家 看你 来了'},
  {title:'有哦来了还有机会id发生的时间发'},
  {title:'江湖日国际频道升级攻防排队时间高分'},
];
const NewsListData={
  title:'今日要闻',
  data:list_data
}
export default class TextCom extends Component {
  
  render() {
    return (
      <View>
        <Header></Header>
        {
          list_data.map((item,i)=>(
            <List key={i} title={item.title}></List>
          ))
        }
        <NewsList data={NewsListData}></NewsList>
      </View>
    )
  }
}
