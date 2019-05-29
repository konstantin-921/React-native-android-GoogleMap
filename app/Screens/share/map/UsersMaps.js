import React from 'react'
import { View, StyleSheet, Text, Linking } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import getCurrentPosition from '../../../lib/getCurrentPosition'

const initialRegion = getCurrentPosition()

const usersMap = props => {
  const userMarkers = props.userPlaces.map((place, index) => {
    return (
      <MapView.Marker coordinate={place} key={place.distance}>
        <MapView.Callout style={{ flex: 1, position: 'relative' }} tooltip={true}>
          <View>
            <Text>{place.distance}</Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    ) 
  })

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        style={styles.map}
        region={props.newLocation}
      >
        {userMarkers}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 400,
    marginTop: 20
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export default usersMap