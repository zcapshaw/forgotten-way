import React from 'react';
import {View, Button, Text, StyleSheet, Screen, Modal, TouchableHighlight, Alert} from 'react-native';
import { Navigation } from 'react-navigation';
import { WebBrowser, Font, Icon } from 'expo';
// import TrackPlayer from 'react-native-track-player';


/*TrackPlayer.setupPlayer().then(() => {
	// The player is ready to be used
});*/

export default class AudioPlayer extends React.Component {
 
  render() {
    return (
        <View style={styles.container}>
          		<Text>This is a test</Text>
          		<Button title='Back' onPress={() => this.props.navigation.goBack(null)} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	alignItems: 'stretch',
    	justifyContent: 'center',
    	backgroundColor: '#00000000',
  	},
	transparentContainer: {
		flex: .15,
		alignItems: 'stretch',
		backgroundColor: 'transparent',
	},
	playerContainer: {
		flex: .85,
		alignItems: 'stretch',
		backgroundColor: 'transparent',
	},

});