import React, { Component, ReactNode } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {
  NavigationEvents,
  NavigationContainer,
  NavigationScreenProp
} from 'react-navigation';

export default class NavComponent extends Component<{
  navigation: NavigationScreenProp<any, any>
}>{
}

  render(): JSX.Element {
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          backgroundColor: '#F5FCFF',
        }
      }>
      </View>
    );
  }
}

