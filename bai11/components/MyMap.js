import React, {Component, useEffect} from 'react'
import {View, TextInput, StyleSheet,
    Dimensions,    
    Platform, 
    PermissionsAndroid,
    Text} from 'react-native'
import MapView, {Polyline} from 'react-native-maps'
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT,  } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service'
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Techmaster To Huu&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDP0b1sDibmya99z_VzlmT6dm3Eq_xkBOw
const { width, height } = Dimensions.get('window')
export default class MyMap extends Component {
    myRef = React.createRef()
    state = {
        currentRegion: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
            //longitudeDelta: this.state.latitudeDelta * width /height
        }        
    }
    hasLocationPermission = async () => {        
        if (Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (hasPermission) return true;

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
        }

        return false;
    }
    componentDidUpdate() {
      
    }
    componentDidMount = async () => {    
        const hasLocationPermission = await this.hasLocationPermission()
        if (hasLocationPermission) {            
            Geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords      
                    console.log("xx"+JSON.stringify(Object.keys(this.myRef.current)))                                  
                    this.myRef.current.animateToRegion({...this.state.currentRegion, latitude, longitude}, 2000)
                    this.setState({currentRegion: {...this.state.currentRegion, latitude, longitude}})
                    
                    console.log(position);
                },
                (error) => {
                    debugger
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            )           
        }
    }
    render() {
        return <View style = {{backgroundColor: 'red', flex: 1}}>
            <MapView  
                zoomEnabled={true}
                showsUserLocation = {true}
                showsMyLocationButton={true}
                onUserLocationChange = {(event) =>{
                  const {latitude,
                    longitude,
                    altitude,
                    timestamp,
                    accuracy,
                    speed} = event.nativeEvent.coordinate
                    console.log("zz = "+JSON.stringify({latitude,
                      longitude,
                      altitude,
                      timestamp,
                      accuracy,
                      speed}))
                }}
                ref={this.myRef}          
                provider={PROVIDER_GOOGLE}
                style={{backgroundColor: 'red', flex: 1}}                
                initialRegion={this.state.currentRegion}
                customMapStyle={customStyle}
            >
            <Polyline
              coordinates={[
                { latitude: 20.997104, longitude: 105.798108 },
                { latitude: 21.001092, longitude: 105.801694 },
                // { latitude: 37.7665248, longitude: -122.4161628 },
                // { latitude: 37.7734153, longitude: -122.4577787 },
                // { latitude: 37.7948605, longitude: -122.4596065 },
                // { latitude: 37.8025259, longitude: -122.4351431 }
              ]}
              strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                // '#B24112',
                // '#E5845C',
                // '#238C23',
                // '#7F0000'
              ]}
              strokeWidth={6}
            />
            </MapView>
        </View>
    }
}
const customStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];
const styles = StyleSheet.create({
    mapView: {
        flex: 1
    }
})
