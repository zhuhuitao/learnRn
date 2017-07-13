import React,{Component} from 'react';

import {
  Text,
  Image,
  StyleSheet,
  View,
  Alert,
  AsyncStorage
} from 'react-native';

import Dimen from '../../values/constant'

import HttpUtil from '../utils/httpUtil'

export default class Entry extends Component{

  constructor(props){
    super(props)
    this.account = ''
    this.password = ''
  }

componentDidMount(){
  this.timer = setTimeout(() =>{
    AsyncStorage.getItem('loginData',(error,result) =>{
      if (!error) {
        if (result === null) {
          this.props.navigation.navigate('Login')
          return
        }

        let data = JSON.parse(result)
        this.account = data.account
        this.password = data.password
        let params = {'upass':this.password,'umobile':this.account}
        HttpUtil.get('MobileLogin',params,(response) => {
          if (response === undefined) {
            this.props.navigation.navigate('Login')
            return
          }
          this.props.navigation.navigate('Tab')
        },(error) => {
            this.props.navigation.navigate('Login')
        })
      }else {
          this.props.navigation.navigate('Login')
      }
    })
  },2000)
}

  render(){
    return(
      <View style = {styles.container}>
        <Image source = {require('../../values/drawable/entry_logo.png')} style = {styles.logo}/>
        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Copyringht © 2017 新时代</Text>
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:themBlack,
    alignItems:'center'
  },

  logo:{
    marginTop:Dimen.scaleVertical(430),
  },

  textContainer:{
    flex:1,
    justifyContent:'flex-end'
  },

  text:{
    color:copyRightColor,
    fontSize:otherTextSize,
    marginBottom:Dimen.scaleVertical(110)
  }

})
