import React from 'react';
import {View, Button, Text, StyleSheet, Screen, Modal, TouchableHighlight, Alert} from 'react-native';
import { Navigation } from 'react-navigation';
import { WebBrowser, Font, Icon } from 'expo';
// import TrackPlayer from 'react-native-track-player';


/*TrackPlayer.setupPlayer().then(() => {
	// The player is ready to be used
});*/

export default class AudioPlayer extends React.Component {
	static navigationOptions = {
    	header: null //Not working, need to review
    };
 
  render() {
    return (
        <View style={styles.container}>
        	<View style={styles.transparentContainer}>
        	</View>
        	<View style={styles.playerContainer}>
          		<Text>This is a test</Text>
          		<Button title='Back' onPress={() => this.props.navigation.goBack(null)} />
          	</View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	paddingTop: 100,
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