import React,{Component} from 'react';

import {
  View,
  Text,
  Dimensions
} from 'react-native';

import {
  flexCenter
} from './style'

import Dimen from './constant'

export default class GrayButton extends Component {
  render(){
    const {width,height,backgroundColor,borderRadius,children} = this.props
    return(
      <View style = {{width,height,backgroundColor,borderRadius,...flexCenter,marginTop:Dimen.scaleVertical(60)}}>
        <Text style = {{color:'white',fontSize:barTextSize}}>{children}</Text>
      </View>
    );
  }
}
