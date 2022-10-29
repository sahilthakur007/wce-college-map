import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";

// import { useEffect, useRef, useState } from "react";
// import Graphic from '@arcgis/core/Graphic';
// import { solve } from '@arcgis/core/rest/route';
// import RouteParameters from '@arcgis/core/rest/support/RouteParameters';
// import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
const center = { lat: 18.7939, lng: 73.3346 }
// const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";
export default function App() {
  
  const mapEl = useRef(null);
 
  useEffect(
    () => {
    
      let view;

      loadModules(["esri/views/MapView", "esri/WebMap"], {
        css: true
      }).then(([MapView, WebMap]) => {
        
        const webmap = new WebMap({
         
          basemap:"topo-vector",
          // basemap:"arcgis-nova"
          
        });

        // and we show that map in a container
        view = new MapView({
          map: webmap,
          // use the ref as a container
          zoom:14,
          container: mapEl.current,
          center: [73.3346, 18.7939,]
        });
      });
      return () => {
        // clean up the map view
        if (!!view) {
          view.destroy();
          view = null;
        }
      };
    },
    // only re-load the map if the id has changed
    []
  );
  return (
    // <View style={styles.container}  >
      <div style={{ height: 800 }} ref={mapEl} />
  //  </View>
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
