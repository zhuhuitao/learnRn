import React,{Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

import {
  InputStyle
} from '../../values/style'

import Dimen from '../../values/constant'

import LoginButton from '../../values/origenButton'

import GrayButton from '../../values/grayButton'

import HttpUtil from '../utils/httpUtil'



export default class Login extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle:'',
    headerLeft:<Image style = {source = null}/>
  })

  constructor (props){
    super(props);
    this.account = ''
    this.password = ''
    this.stae = {reloadView:false}
  }

  componentDidMount(){
    AsyncStorage.getItem('loginData',(error,result) => {
      if (!error) {
        let data = JSON.parse(result)
        if (result === null) {
          return
        }
        this.account = data.account
        this.password = data.password
        this.setState({reloadView:true},this.login)
      }
    })
  }

  login(){
    if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.account) === false) {
      Alert.alert('请输入正确的账号','',[{text:'确定'}])
      return
    }
    if (this.password.length < 6 || this.password.length > 16) {
      Alert.alert('密码长度为6-16字符','',[{text:'确定'}])
      return
    }
    var params = {'upass':this.password,'umobile':this.account}
    HttpUtil.get('MobileLogin',params,(response) => {
      if (response === undefined) {
        Alert.alert('账号或密码错误，请重新登录','',[{text:'确定'}])
        return
      }
      console.log(response[0])
      let loginData = {account : this.account,password : this.password}
      AsyncStorage.setItem('loginData',JSON.stringify(loginData),(error) =>{})
      this.props.navigation.navigate('Tab')
    },(error) => {
      console.log('========='+error)
          Alert.alert('网络错误，请检查您的网络','',[{text:'确定'}])
    })
  }

  register(){
    this.props.navigation.navigate('Register')
  }
  render(){
    return(
      <View style = {styles.container}>
          <Image source = {require('../../values/drawable/login_logo.png')} style = {styles.loginLogo}/>

            <View style = {{...InputStyle}}>
              <Image source = {require('../../values/drawable/login_user.png')} style = {styles.headImage}/>
              <TextInput placeholder='用户名'
              value = {this.account}
              placeholderTextColor={textMainColor}
              style = {styles.textInput}
              underlineColorAndroid='transparent'
              onChangeText = {(text) => this.account = text}/>
            </View>

            <View style = {{...InputStyle}}>
              <Image source = {require('../../values/drawable/login_password.png')} style = {styles.headImage}/>
              <TextInput placeholder='密码'
              placeholderTextColor = {textMainColor}
              style = {styles.textInput}
              value = {this.password}
              secureTextEntry = {true}
              underlineColorAndroid = 'transparent'
              onChangeText = {(text) => this.password = text}/>
            </View>

            <TouchableOpacity onPress = {() => this.login()}>
              <LoginButton width = {(Dimensions.get('window').width)-Dimen.scaleHorizon(60+60)}
              height = {Dimen.scaleVertical(130)}
              backgroundColor = {themOrange}
              borderRadius = {Dimen.scaleVertical(130/2)}>
              登录
              </LoginButton>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => this.register()}>
              <GrayButton width = {(Dimensions.get('window').width-Dimen.scaleHorizon(60+60))}
              height = {Dimen.scaleVertical(130)}
              backgroundColor = {textMainColor}
              borderRadius = {Dimen.scaleVertical(130/2)}>
                注册
              </GrayButton>
            </TouchableOpacity>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:themBlack
  },

  loginLogo:{
      marginTop:Dimen.scaleVertical(452-22*3-42*3),
      marginBottom:Dimen.scaleVertical(90-60)
  },

  headImage:{
    marginHorizontal:Dimen.scaleHorizon(50)
  },

  textInput:{
    flex:1,
    color:'white',
    fontSize:Dimen.scaleHorizon(45)
  },



})
