import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
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

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

/*
  * Changed label from 'Links' to 'Lessons' below
  * At some point we should clean up the file names and classes that refer to 'Links'
*/
LinksStack.navigationOptions = {
  tabBarLabel: 'LESSONS',
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
  tabBarLabel: 'MEDITATIONS',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
      ? `ios-eye${focused ? '' : '-outline'}`
      : 'md-eye'}
    />
  ),
};

const AccountStack = createStackNavigator({
  Settings: SettingsScreen,
});

/*
  * Added 4th icon with Account listed
  * At some point we should clean up the file names and classes that refer to 'Settings'
*/
AccountStack.navigationOptions = {
  tabBarLabel: 'ACCOUNT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
      ? `ios-person${focused ? '' : '-outline'}`
      : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  AccountStack,
});
