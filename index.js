/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Navigation from './src/navigations/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);
