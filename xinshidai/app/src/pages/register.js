import React ,{Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';

import {
  flexCenter,
  InputStyle,
} from '../../values/style'

import Dimen from '../../values/constant'
import Line from '../../values/line'
import LoginButton from '../../values/origenButton'
import HttpUtil from '../utils/httpUtil'
import BToast from '../utils/common'

const sign = ''
const name = '13925876719'
const pwd = '9C72D3D823E48EB4273D44744532'
const stime = ''
const type = 'gx'
const extno = ''
const messageHost = 'http://web.cr6868.com/asmx/smsservice.aspx?'

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
    this.account = ''
    this.confirmAccount = ''
    this.password = ''
    this.code = ''
    this.confirmCode = this.randomCode()
    this.state = {
      timerCount : 5,
      timerTitle : '获取验证码',
      selEnable : false,
      flag : false
    }
  }

  getCode(){
    if (/^[1][3|4|5|7|8|9][0-9]{9}$/.test(this.account)===false || this.account.length === 0) {
      BToast.show('请输入正确的手机号码')
      return
    }
    var content =
    "【智由控】尊敬的："+ this.account + "，您的注册验证码为：" + this.confirmCode + "，请在5分钟内完成修改。#@#"+this.account
    var params = {
      'name': name,
      'pwd' : pwd,
      'content' : content,
      'stime' : stime,
      'sign' : sign,
      'type' : type,
      'extno' : extno
    }
    this.confirmAccount = this.account
    HttpUtil.post(messageHost,params,(response) => {
      BToast.show('短信获取成功')
      console.log(response)
    },(error) => {
      BToast.show('短信获取失败')
      console.log(error)
    })

    this.setState({selEnable : true})
    this.setState({flag : true})
    this.interval = setInterval (() => {
      const timer = this.state.timerCount -1
      if (timer === -2) {
        this.interval && clearInterval(this.interval)
        this.setState({
          timerCount : 5,
          selEnable : false,
          timerTitle : '获取验证码'
        })
      }else {
        this.setState({
          timerCount : timer,
          timerTitle : this.state.timerCount+'s'+'后重试'
        })
      }
    },1000)
  }

  register(){
    if (!this.state.flag) {
      BToast.show('请先获取验证码')
      return
    }

      if (this.confirmAccount !== this.account) {
        BToast.show('手机号码不一致')
        return
      }

      if (this.password.length < 6 || this.password > 16) {
        BToast.show('密码长度为6-16字符且不能全部数字')
        return
      }
      console.log(this.confirmCode+"oooooooooooooooooo")
      console.log(this.code+'  '+this.confirmCode)
    if (this.confirmCode !== this.code || this.code.length === 0) {
      BToast.show('验证码不正确')
      return
    }

    var params = {'uname':this.confirmAccount,'upass':this.password,'umobile':this.confirmAccount}
    HttpUtil.get('Regist',params,(response) => {
      console.log(response)
      if (response === 1) {
        Alert.alert('该手机号码已被使用','',[{text:'确定'}])
      }else {
        Alert.alert('注册成功','',[{text:'确定',onPress : () => {
          this.props.navigation.goBack()
        }}])
      }
    },(error) => {

      console.log(error)
    })

  }

  randomCode(){
    var random = ''
    for (var i = 0; i <4 ; i++) {
      random += Math.floor(Math.random()*10)
    }
    return random
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
            style = {styles.input}
            onChangeText = {(text) => this.account = text}/>
          </View>

          <View style = {{...InputStyle}}>
            <Text style = {styles.text}>登录密码：</Text>
            <TextInput placeholder = '6-16个字符以内'
            placeholderTextColor = {textMainColor}
            underlineColorAndroid = 'transparent'
            style = {styles.input}
            onChangeText = {(text) => this.password = text}/>
          </View>

          <View style = {{...InputStyle}}>
            <Text style = {styles.text}>验证码：</Text>
            <TextInput placeholder = '手机验证码'
            placeholderTextColor = {textMainColor}
            underlineColorAndroid = 'transparent'
            style = {styles.input}
            onChangeText = {(text) => this.code = text}/>
            <TouchableOpacity style = {styles.code} disabled = {this.state.selEnable} onPress = {() => this.getCode()}>
              <Text adjustsFontSizeToFit = {true}
              numberOfLines = {1}
              style = {styles.codeText}>{this.state.timerTitle}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress = {() => this.register()}>
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
