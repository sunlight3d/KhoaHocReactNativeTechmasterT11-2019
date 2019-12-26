/**
 * @format
 * AIzaSyDP0b1sDibmya99z_VzlmT6dm3Eq_xkBOw
 * yarn add react-native-maps
 * yarn add react-native-geolocation-service
 */

import {AppRegistry} from 'react-native';
// import {Main} from './components/Main';
import TabNavigator from './components/Tabs/TabNavigator'
import StackNavigator from './components/StackNavigator'
import MyMap from './components/MyMap'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyMap);
// AppRegistry.registerComponent(appName, () => StackNavigator);
