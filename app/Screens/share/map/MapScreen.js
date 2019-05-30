import React, { ComponentType, FunctionComponent } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withRedux from '../../../hocs/withRedux'
import haversine from 'haversine';
import {
  incrementCounter,
  decrementCounter,
  clearCounter,
} from '../../../modules/actions/actions'
import FetchLocation from './FetchLocation'
import UsersMap from './UsersMaps'

class MapScreen extends React.Component {

  state = {
    userLocation: null,
    userPlaces: [],
    isSelfLocation: true
  }

  getRandomInRange = (from, to, fixed) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  getUserPlacesHandler = () => {
    const { userLocation } = this.state;
    if(userLocation) {
      this.setState({
        userPlaces: [...this.state.userPlaces, {
          latitude: this.getRandomInRange(47.200, 47.300, 3),
          longitude: this.getRandomInRange(38.800, 39, 3),
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        }],
        isSelfLocation: false
      });
    } else {
      alert('Set your location');
    }
  }

  getUserlocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
          distance: null,
        },
        isSelfLocation: true
      });
    }, error => console.log(error));
  }

  getLocation = () => {
    const { userLocation, userPlaces, isSelfLocation } = this.state;
    let response;
    if(isSelfLocation) {
      response = userLocation;
    } else if (!isSelfLocation) {
      response = userPlaces[userPlaces.length - 1]
    }
    return response;
  }

  getDistance = () => {
    const { isSelfLocation, userLocation, userPlaces } = this.state;
    let data = null;
    if(!isSelfLocation && userLocation && userPlaces.length) {
      data = haversine(userLocation, userPlaces[userPlaces.length - 1], {unit: 'meter'})
    }
    return data;
  }

  calculateDistance = () => {
    const { userLocation, userPlaces } = this.state;
    let lastArray = JSON.parse(JSON.stringify([...userPlaces]));
    if(userLocation && userPlaces.length) {
      lastArray.forEach((elem, index) => {
        elem.distance = `${parseFloat(haversine(userLocation, elem, {unit: 'meter'}).toFixed(0))}m`;
      })
    }
    return lastArray;
  }

  render() {
    const location = this.getLocation();
    const arrayWithDistance = this.calculateDistance();
    const allPlaces = this.state.userLocation ? arrayWithDistance.concat(this.state.userLocation) : [];
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Button title='Get User Places' onPress={this.getUserPlacesHandler} />
        </View>
        <FetchLocation onGetLocation={this.getUserlocationHandler}/>
        <UsersMap newLocation={location} userPlaces={allPlaces}></UsersMap>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.mainReducer.value,
})

const mapDispatchToProps = {
  dispatchIncrementCounter: incrementCounter,
  dispatchDecrementCounter: decrementCounter,
  dispatchClearCounter: clearCounter,
}

const EnhancedMapScreen = compose(
  withRedux,
  connect(mapStateToProps, mapDispatchToProps),
)(MapScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  })

export default EnhancedMapScreen;