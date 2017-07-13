import React,{Component} from 'react';

import {
   View,
   StyleSheet,
   Dimensions
} from 'react-native';

import Dimen from './constant'

export default class Line extends Component {
  render(){
    return(
        <View style = {styles.line}></View>
    );
  }
}

var styles = StyleSheet.create({
  line: {
    backgroundColor:textMainColor,
    width : Dimensions.get('window').width,
    height : 1
  }
})
