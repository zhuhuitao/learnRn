import React,{Component} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class MineScreen extends Component {
  render(){
    return(
      <View style = {{backgroundColor:'blue',flex:1}}>
        <Text>个人中心</Text>
      </View>
    );
  }
}
