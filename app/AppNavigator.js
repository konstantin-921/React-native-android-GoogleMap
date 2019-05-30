/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Navigation } from 'react-native-navigation'
import LandingScreen from './screens/Landing'
import SignInScreen from './screens/auth/SignIn'
import EnhancedMapScreen from './screens/share/map/MapScreen'

Navigation.registerComponent(`LandingScreen`, () => LandingScreen)
Navigation.registerComponent(`SignInScreen`, () => SignInScreen)
Navigation.registerComponent(`MapScreen`, () => EnhancedMapScreen)

const AppNavigator = Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'LandingScreen',
              options: {
                topBar: {
                  visible: true,
                  height: 0,
                }
              }
            }
          }
        ]
      }
    }
  });
});

export default AppNavigator
