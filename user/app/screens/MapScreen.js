import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview' 

html = `
<!DOCTYPE html>
<html>
    <meta name="viewport" content="width=device-width">
    <head>
        <title>Geolocation</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" />
        <style>
            body {
                margin: 0;
                padding: 0;
            }
        </style>
    </head>

    <body>
        <div id="map" style="width:100%; height: 100vh"></div>
        <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script>
        <script>
            startLat = 60.192059110746
            startLon =  24.945831110746

            map = L.map('map').setView([startLat, startLon], 11);
            userLocation = L.marker([startLat, startLon]).addTo(map);

            mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
            tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);
            routes = L.geoJSON().addTo(map);
            

            map.on('click', async function (e) {
                console.log(e)
                newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
                try {
                        var result = await fetch(
                            "https://router.project-osrm.org/route/v1/driving/"+startLon+","+startLat+";"+e.latlng.lng+","+e.latlng.lat+"?geometries=geojson&alternatives=true&steps=true&generate_hints=false",
                            { method: "GET" }
                        ).then(
                            (data)=>data.json()
                        )
                        console.log(result)
                        routes.addData(result.routes[0].geometry)
                        window.ReactNativeWebView.postMessage(JSON.stringify(result))
                    } catch (error) {
                        console.log(error)
                    }
            });
        </script>
    </body>
</html>
`

class MapScreen extends Component {
    render() {
      return (
        <WebView
          originWhitelist={["*"]}
          source={{ html }}
          style={styles}
          onMessage={event => {
            console.log(JSON.parse(event.nativeEvent.data))
          }}
        />
      );
    }
  }

const styles = StyleSheet.create({
  background: {
      flex: 1, 
  },
})

export default MapScreen;
