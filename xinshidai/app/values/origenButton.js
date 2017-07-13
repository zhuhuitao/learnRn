import React,{Component} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  flexCenter
} from './style'

import Dimen from './constant'
export default class LoginButton extends Component {
  render(){
    const {height,width,backgroundColor,children,borderRadius} = this.props
    return (
      <View style = {{height,width,backgroundColor,borderRadius,...flexCenter,marginTop:Dimen.scaleVertical(60)}}>
        <Text style = {{color:'white',fontSize:barTextSize}}>{children}</Text>
      </View>
    );
  }
}
