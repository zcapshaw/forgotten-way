import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AudioPlayer from '../screens/AudioPlayer';

const ModalStack = createStackNavigator({
	PlayerModal: AudioPlayer
	},
	{
	headerMode: 'none'
	},
)

export default createStackNavigator({
	ModalStack,
});