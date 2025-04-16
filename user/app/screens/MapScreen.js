import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview' 

// this is the same data thats in the Map.html file but for some reason react-native-webview cant load it from that file so its here as a variable istead
html = `
<!DOCTYPE html>
<html>
    <meta name="viewport" content="width=device-width">
    <head>
        <title>Geolocation</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
        <style>
            body {
                margin: 0;
                padding: 0;
            }
            img.huechange { filter: hue-rotate(120deg); }
        </style>
    </head>

    <body>
        <div id="map" style="width:100%; height: 100vh"></div>
        <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
        <script>
            userLat = 60.17104039007619
            userLon =  24.94132518768311
            exportRoute = [[userLat, userLon]]

            map = L.map('map').setView([userLat, userLon], 11);
            mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
            tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);
            search = L.Control.geocoder({position: 'bottomleft'}).addTo(map);
            routes = L.geoJSON().addTo(map);
            userLocation = L.marker([userLat, userLon], {draggable:'true'}).addTo(map);
            userLocation._icon.classList.add("huechange")
            
            userLocation.on('dragend', function(event){
                var marker = event.target;
                var position = marker.getLatLng();
                marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
                userLat = position.lat
                userLon =  position.lng
                exportRoute[0] = [position.lat, position.lng]
                map.panTo(new L.LatLng(position.lat, position.lng))
            });//*/

            map.on('click', function (event) {
                L.marker([event.latlng.lat, event.latlng.lng]).addTo(map);
                console.log(exportRoute)
            });

            map.on('layeradd', async function(event) {
                if (event.layer.options.alt == 'Marker') {
                    try {
                        startLat = exportRoute[exportRoute.length-1][0]
                        startLon = exportRoute[exportRoute.length-1][1]
                        targetLat = event.layer._latlng.lat
                        targetLon = event.layer._latlng.lng
                        result = await fetch(
                            "https://router.project-osrm.org/route/v1/driving/"+startLon+","+startLat+";"+targetLon+","+targetLat+"?geometries=geojson&alternatives=true&steps=true&generate_hints=false",
                            { method: "GET" }
                        ).then(
                            (data)=>data.json()
                        )
                        console.log(result)
                        routes.addData(result.routes[0].geometry)
                        exportRoute.push([targetLat, targetLon])
                        window.ReactNativeWebView.postMessage(JSON.stringify(result))
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        </script>
    </body>
</html>
`

class MapScreen extends Component {
    render() {
      return (
        <>
          <WebView
            originWhitelist={["*"]}
            source={{ html }}
            style={styles}
            onMessage={event => {
              console.log("e")
              console.log(JSON.parse(event.nativeEvent.data))
            }}
          />
        </>
      );
    }
  }

const styles = StyleSheet.create({
  background: {
      flex: 1, 
  },
})

export default MapScreen;
