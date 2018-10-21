import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './Scenes/Home'
import Profile from './Scenes/Profile'
import * as Nav from 'react-navigation';


//stackする
export default Nav.createStackNavigator({
  Home:{screen:Home},
  Profile:{screen:Profile},
});