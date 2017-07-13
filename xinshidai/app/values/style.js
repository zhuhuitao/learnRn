import {
  Dimensions
}from 'react-native';

import Dimen from './constant'

//输入框样式
export const InputStyle = {
  width:Dimensions.get('window').width-Dimen.scaleHorizon(60+60),
  height:Dimen.scaleVertical(130),
  borderWidth:1,
  borderRadius:Dimen.scaleVertical(130/2),
  borderColor:textMainColor,
  marginTop:Dimen.scaleVertical(60),
  alignItems:'center',
  flexDirection:'row'
}

//空间剧中于父控件
export const flexCenter = {justifyContent:'center',alignItems:'center'}
