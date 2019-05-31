import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Button } from 'react-native-elements'

class LandingScreen extends React.PureComponent {

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
  

  render() {
    return (
      <View style={styles.container}>
          <Button title='Sign In' type='clear' onPress={() => this.goToScreen('SignInScreen')} />
          <Button title='MapScreen' type='clear' onPress={() => this.goToScreen('MapScreen')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });

export default LandingScreen;