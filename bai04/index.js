/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import {Main} from './components/Main';
import TabNavigator from './components/Tabs/TabNavigator'
import StackNavigator from './components/StackNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackNavigator);
