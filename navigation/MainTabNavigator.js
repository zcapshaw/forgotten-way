import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChaptersScreen from '../screens/ChaptersScreen';
import SettingsScreen from '../screens/SettingsScreen';

//The pre-loaded icons can be viewed @ https://ionicons.com/
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'HOME',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const ChaptersStack = createStackNavigator({
  Chapters: ChaptersScreen,
});

ChaptersStack.navigationOptions = {
  tabBarLabel: 'CHAPTERS',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
         ? `ios-paper${focused ? '' : '-outline'}`
         : 'md-paper'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

/*
  * Changed label from 'Settings' to 'Meditations' below
  * At some point we should clean up the file names and classes that refer to 'Settings'
*/
SettingsStack.navigationOptions = {
  tabBarLabel: 'COMMENTARIES',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
      ? `ios-headset${focused ? '' : '-outline'}`
      : 'md-headset'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  ChaptersStack,
  SettingsStack,
});
