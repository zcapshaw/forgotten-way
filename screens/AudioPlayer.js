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
        	<View style={styles.transparentContainer}></View>
        	<View style={styles.playerContainer}>
          		<Button title='Back' onPress={() => this.props.navigation.goBack(null)} />
        	</View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	alignItems: 'stretch',
    	justifyContent: 'center',
    	backgroundColor: '#fff',
  	},
  	transparentContainer: {
  		flex: .1,
  		backgroundColor: 'transparent',
  	},
	playerContainer: {
		flex: .90,
		paddingTop: 30,
		alignItems: 'stretch',
		backgroundColor: '#ddd',
		borderRadius: 7,
    	borderWidth: 1,
    	borderColor: '#fff',
    	overflow: 'hidden',
	},

});