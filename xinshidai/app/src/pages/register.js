import React ,{Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  flexCenter,
  InputStyle,
} from '../../values/style'

import Dimen from '../../values/constant'

import Line from '../../values/line'

import LoginButton from '../../values/origenButton'

export default class Register extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle:'注册',

      headerLeft:  <TouchableOpacity onPress = {() => navigation.goBack()}>
      <Image style={{marginLeft:Dimen.scaleHorizon(40)}}
      source = {require('../../values/drawable/title_back.png')}/>
    </TouchableOpacity>
  })

  constructor(props){
    super(props)
    this.accout = ''
    this.password = ''
    this.code = ''
    this.confirmCode = ''
  }
  render(){
    return(
      <View style = {styles.container}>
          <Line/>

          <View style = {{...InputStyle}}>
            <Text style = {styles.text}>手机号码：</Text>
            <TextInput placeholder = '手机号码将作为唯一账号'
            placeholderTextColor = {textMainColor}
            underlineColorAndroid = 'transparent'
            style = {styles.input}/>
          </View>

          <View style = {{...InputStyle}}>
            <Text style = {styles.text}>登录密码：</Text>
            <TextInput placeholder = '6-16个字符以内'
            placeholderTextColor = {textMainColor}
            underlineColorAndroid = 'transparent'
            style = {styles.input}/>
          </View>

          <View style = {{...InputStyle}}>
            <Text style = {styles.text}>验证码：</Text>
            <TextInput placeholder = '手机验证码'
            placeholderTextColor = {textMainColor}
            underlineColorAndroid = 'transparent'
            style = {styles.input}/>
            <TouchableOpacity style = {styles.code}>
              <Text adjustsFontSizeToFit = {true}
              numberOfLines = {1}
              style = {styles.codeText}>获取验证码</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <LoginButton width = {(Dimensions.get('window').width-Dimen.scaleHorizon(60+60))}
            height = {Dimen.scaleVertical(130)}
            borderRadius = {Dimen.scaleVertical(130/2)}
            backgroundColor = {themOrange}>注册</LoginButton>
          </TouchableOpacity>

          <Text style = {styles.ruler}>注册即表示同意新时代协议>></Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:themBlack,
    alignItems:'center'
  },

  text : {
    color : 'white',
    fontSize : mainTextSize,
    marginLeft : Dimen.scaleHorizon(50)
  },

  input : {
    flex:1,
    color : 'white',
    fontSize : mainTextSize
  },

  code : {
    width : 85,
    height : 30,
    backgroundColor : 'white',
    borderRadius : 15,
    marginRight : Dimen.scaleHorizon(20),
    ...flexCenter
  },

  codeText : {
    color : textMainColor,
    fontSize : otherTextSize,
    textAlign : 'center'
  },

  ruler : {
    color : 'white',
    fontSize : mainTextSize,
    marginTop : Dimen.scaleVertical(60),
    ...flexCenter
  }


})
