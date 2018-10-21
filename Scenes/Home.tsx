/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, ReactNode } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {
  NavigationEvents,
  NavigationContainer,
  NavigationScreenProp
} from 'react-navigation';

class NavComponent extends Component<{
  navigation: NavigationScreenProp<any, any>
}>{

}

export default class Home extends NavComponent {
  componentDidMount() {
    fetch("http://google.co.jp").then(
      ($e: Response) => {
        alert('success!')
      },
      () => alert("Error!")
    )
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
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ flexDirection: "row" }} >
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />

        </View>
        <Text>

          aaaa
        </Text>
        <View style={{ flexDirection: 'column' }} >
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />

        </View>

        <Text style={styles.welcome}>
          Home
        </Text>
        <Button
          title="test ffff"
          onPress={
            () => {
              this.props.navigation.navigate("Profile", {});
              alert(123);

            }
          }
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
