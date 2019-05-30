export default getCurrentPosition = () => {
  const initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  
  function success(pos) {
    var crd = pos.coords
    initialRegion.latitude = crd.latitude
    initialRegion.longitude = crd.longitude
  };
  
  navigator.geolocation.getCurrentPosition(success);
  
  return initialRegion
}

