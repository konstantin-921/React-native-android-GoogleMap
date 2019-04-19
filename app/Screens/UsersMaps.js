import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
  //console.log('====================================');
  //console.log(props);
  //console.log('====================================');

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
  });

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 47.23617,
          longitude: 38.89688,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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

export default usersMap;