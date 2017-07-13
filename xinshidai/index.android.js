/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import Entry from './app/src/pages/entry'
import Login from './app/src/pages/login'
import Register from './app/src/pages/register'
import Main from './app/src/pages/Main'
import HomeScreen from './app/src/pages/home'
import MineScreen from './app/src/pages/mine'


const Tab = TabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarLabel:'设备中心',
      tabBarIcon:({tintColor,focused}) => (
          focused
          ?
          <Image
            source = {require('./app/values/drawable/device_center_normal.png')}
          />
          :
          <Image
            source = {require('./app/values/drawable/device_center_selected.png')}
          />
      ),
      headerTitle:'空气能热水器',
      headerTitleStyle:{color:'white',fontSize:barTextSize},
    }
  },

  Mine:{
    screen:MineScreen,
    navigationOptions:{
      tabBarLabel : '个人中心',
      tabBarIcon : ({tintColor,focused}) => (
          focused
          ?
          <Image
            source = {require('./app/values/drawable/my_center_normal.png')}
          />
          :
          <Image
            source = {require('./app/values/drawable/my_center_selected.png')}
          />
      ),
    }
  },
},{
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    lazy:true,
    tabBarOptions:{
      style: {
           backgroundColor:themBlack
       },
      activeTintColor:textMainColor,
      inactiveTintColor:textMainColor,
      activeBackgroundColor:'#3a4457ff',
      inactiveBackgroundColor:themBlack,
      showIcon:true,
      indicatorStyle:{
        height:0
      }
    }
})

const App = StackNavigator({

  Login:{screen:Login},
  Entry:{screen:Entry},
  Register:{screen:Register},
  Tab:{screen:Tab},
},{
  initialRouteName:'Entry',
  navigationOptions:{
    headerStyle:{backgroundColor:themBlack,elevation:0},
    headerTitleStyle:{color:'white',fontSize:barTextSize,alignSelf:'center'},
  },
  headerMode:'float',
  transitionConfig:() => ({
    screenInterpolator:CardStackStyleInterpolator.forHorizontal,
  })
})

AppRegistry.registerComponent('xinshidai', () => App);
