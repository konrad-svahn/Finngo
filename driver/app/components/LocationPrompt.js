import React, { useEffect } from 'react';
import { View } from 'react-native';
import { PermissionsAndroid } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { setLocation,  getNerbyRoutes } from "../redux/testSlice"
import Geolocation from 'react-native-geolocation-service';

function LocationPrompt() {
    // https://blog.logrocket.com/react-native-geolocation-complete-tutorial/
    const dispatch = useDispatch()
        
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
            );
            if (granted === 'granted') {
            //console.log('You can use Geolocation');
            return true;
            } else {
            //console.log('You cannot use Geolocation');
            return false;
            }
        } catch (err) {
            console.log(err)
            return false;
        }
    };

    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            if (res) {
            Geolocation.getCurrentPosition(
                position => {
                    dispatch(setLocation(position));
                    dispatch(getNerbyRoutes(position))
                },
                error => {
                // See error code charts below.
                console.log(error.code, error.message);
                dispatch(setLocation(null));
                },
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
            }
        });
    };

    useEffect(() => {
        getLocation()
    }, []);

    return (
        <View>

        </View>
    )
}

export default LocationPrompt;