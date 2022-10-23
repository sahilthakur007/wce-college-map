import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';
import MapView from 'react-native-maps';
export default function App() {
  const mapRef = useRef();
  const ne={latitude: 16.8452955,longitude: 74.6046214} 
  const sw={latitude: 16.8421313,longitude: 74.5993899} 
  const restrictMap = () => {
    // console.log("method called")
    // const nee=mapRef.current.getMapBoundaries();
    // console.log(nee);
    // mapRef.current.setMapBoundaries(nee);
    mapRef.current.setMapBoundaries(northEast=ne,southWest=sw)
  }
  return (
    <View style={styles.container}>
      <MapView 
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 16.8457,
          longitude: 74.6015,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        mapType="satellite"
        onMapReady={restrictMap}
      />
      {/* map */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
