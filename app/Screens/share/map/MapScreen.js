import React, { ComponentType, FunctionComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { mapOperations } from '../../../ducks/map'
import withRedux from '../../../hocs/withRedux'
import haversine from 'haversine'
import FetchLocation from './FetchLocation'
import UsersMap from './UsersMaps'

class MapScreen extends React.Component {

  getRandomInRange = (from, to, fixed) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  getUserPlacesHandler = () => {
    const { userLocation } = this.props;
    const newPoint = {
      latitude: this.getRandomInRange(47.200, 47.300, 3),
      longitude: this.getRandomInRange(38.800, 39, 3),
      latitudeDelta: 0.06,
      longitudeDelta: 0.06,
    }
    newPoint.distance = this.calculateDistance(newPoint)
    if(userLocation) {
      this.props.dispatchAddPoint(newPoint)
      this.props.dispatchSetSelfLocation(false)
    } else {
      alert('Set your location');
    }
  }

  getUserlocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.dispatchDefineLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.06,
        longitudeDelta: 0.06,
        distance: null,
      })
      this.props.dispatchSetSelfLocation(true)
    }, error => console.log(error))
  }

  getLocation = () => {
    const { userPlaces, userLocation, isSelfLocation } = this.props
    let response;
    if(isSelfLocation) {
      response = userLocation
    } else if (!isSelfLocation) {
      response = userPlaces[userPlaces.length - 1]
    }
    return response
  }

  calculateDistance = (newPoint) => {
    const { userLocation } = this.props
    let distance = null
    if(userLocation) {
      distance = `${parseFloat(haversine(userLocation, newPoint, {unit: 'meter'}).toFixed(0))}m`;
    }
    return distance
  }

  render() {
    const { userLocation, userPlaces } = this.props
    const location = this.getLocation()
    const allPlaces = userLocation ? userPlaces.concat(userLocation) : []
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Button title='Get User Places' onPress={this.getUserPlacesHandler} />
        </View>
        <FetchLocation onGetLocation={this.getUserlocationHandler}/>
        <UsersMap newLocation={userLocation} userPlaces={allPlaces}></UsersMap>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userPlaces: state.map.userPlaces,
  userLocation: state.map.userLocation,
  isSelfLocation: state.map.isSelfLocation
})

const mapDispatchToProps = {
  dispatchAddPoint: mapOperations.addPoint,
  dispatchDefineLocation: mapOperations.defineLocation,
  dispatchSetSelfLocation: mapOperations.setSelfLocation
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const EnhancedMapScreen = compose(
  withRedux,
  connect(mapStateToProps, mapDispatchToProps),
)(MapScreen)

export default EnhancedMapScreen