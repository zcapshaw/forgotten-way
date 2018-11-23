import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
// import TrackPlayer from 'react-native-track-player';


/*TrackPlayer.setupPlayer().then(() => {
	// The player is ready to be used
});*/

export default class AudioPlayer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.transparentContainer} />
        <View style={styles.playerContainer}>
          <Button title='Back' onPress={() => this.props.navigation.goBack(null)} />
        </View>
      </View>
    );
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
    flex: 0.1,
    backgroundColor: 'transparent',
  },
	playerContainer: {
		flex: 0.90,
		paddingTop: 30,
		alignItems: 'stretch',
		backgroundColor: '#ddd',
		borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
	},
});
