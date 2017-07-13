import React,{Component} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class HomeScreen extends Component {
  render(){
    return(
        <View style = {{backgroundColor:'red',flex:1}}>
          <Text>首页</Text>
        </View>
    );
  }
}
