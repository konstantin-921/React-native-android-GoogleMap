import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements'

class SignInScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>SighIn</Text>
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
  })

export default SignInScreen;