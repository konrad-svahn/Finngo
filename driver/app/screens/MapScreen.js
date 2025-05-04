import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview' 
import { connect } from 'react-redux';

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
            try {
                if (userLat == undefined || userLon == undefined || importRoutes == undefined) {
                    userLat = 60.17104039007619
                    userLon =  24.94132518768311
                    importRoutes = "[]"
            }
            } catch (error) {
                userLat = 60.17104039007619
                userLon =  24.94132518768311
                importRoutes = "[]"
            }
            userLat = 60.17104039007619
            userLon =  24.94132518768311

            map = L.map("map").setView([userLat, userLon], 11);
            mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
            tiles = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", { attribution: "Leaflet &copy; " + mapLink + ", contribution", maxZoom: 18 }).addTo(map);
            search = L.Control.geocoder({position: "bottomleft"}).addTo(map);
            routes = L.geoJSON().addTo(map);
            userLocation = L.marker([userLat, userLon], {draggable:"true"}).addTo(map);
            userLocation._icon.classList.add("huechange")

            L.Control.export = L.Control.extend({
                onAdd: function(map) {
                    exportButton = L.DomUtil.create("div","wrapper")
                    exportButton.innerHTML = "<button>deaw nerby routes</button>"
                    L.DomEvent.disableClickPropagation(exportButton)
                    L.DomEvent.on(exportButton, "click", async function(){
                        importRoutes.forEach(route => {
                            try {
                                r = JSON.parse(route.route)
                                window.ReactNativeWebView.postMessage(JSON.stringify(r.routes[0]))
                                routes.addData(r.routes[0].geometry)
                            } catch (error) {
                                alert(error)
                            }
                        });
                    });
                    return exportButton;
                },
                onRemove: function(map) {}
            });
            L.control.export = function(opts) {
                return new L.Control.export(opts);
            }

            seeNerbyRequests = L.control.export({ position: "bottomright" }).addTo(map)

            userLocation.on("dragend", function(event){
                marker = event.target;
                position = marker.getLatLng();
                marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:"true"});
                userLat = position.lat
                userLon =  position.lng
                exportRoute[0] = [position.lat, position.lng]
                map.panTo(new L.LatLng(position.lat, position.lng))
            });//*/
        </script>
    </body>
</html>
`

async function validateLocation (location, nerbyRoutes) {
    try {
        if (location == null || location == undefined || location.coords.latitude == undefined || location.coords.longitude == undefined) {
            console.log("no location")
            return `userLat = 60.17104039007619; userLon = 24.94132518768311; importRoutes = [];`
        } 
        if (nerbyRoutes == null || nerbyRoutes.length < 1 ) {
            return `userLat = 60.17104039007619; userLon = 24.94132518768311; importRoutes = [];`
        }
        return `userLat = `+location.coords.latitude+`; userLon = `+location.coords.longitude+`; importRoutes = `+ JSON.stringify(nerbyRoutes)+`;`
    } catch (error) {
        console.log(error)
        return false
    }
}

class MapScreen extends Component {
    render() {
        const { location, nerbyRoutes } = this.props;
        try {
            send = validateLocation(location,nerbyRoutes)
            setTimeout(() => {this.webref.injectJavaScript(send._j);},1)
        } catch (error) {
            console.log(error)
        }
        return (
            <>
            <WebView
                ref={(r) => (this.webref = r)}
                originWhitelist={["*"]}
                source={{ html }}
                style={styles}
                onMessage={ async function (event) {
                    json = JSON.parse(event.nativeEvent.data)
                    console.log(json)
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

const mapStateToProps = (state) => ({ location: state.test.location, nerbyRoutes: state.test.nerbyRoutes})

export default connect (mapStateToProps) (MapScreen);
