import React,{Component} from 'react';

import {
  Dimensions
} from 'react-native';



//获取屏幕宽度
global.screenWidth = Dimensions.get('window').width
//获取屏幕高度
global.screenHeight = Dimensions.get('window').height
//获取屏幕分辨率
global.screenScale = Dimensions.get('window').scale
//主题黑色
global.themBlack = '#161c2a'
//主题橙色
global.themOrange = '#f36121'
//输入框字体颜色
global.placeholderColor = '#6d7b92'
//白色字体
global.textMainColor = '#3a4457'
//初始页字体颜色
global.copyRightColor = '#929397'
//title字体
global.barTextSize = 20
//主题字体
global.mainTextSize = 16
//其他字体
global.otherTextSize = 14

export default class Dimen extends Component {

  static scaleHorizon(size){
    return screenWidth * size / 1080
  }

  static scaleVertical(size){
    return screenHeight * size /1920
  }
}
