import React from 'react';
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
// import TrackPlayer from 'react-native-track-player';


/*TrackPlayer.setupPlayer().then(() => {
	// The player is ready to be used
});*/

export default class AudioPlayer extends React.Component {

  constructor(props){
		super(props);
		this.state = { isPlaying: false };
	}

  _onPressPlayButton() {
    this.setState(previousState => (
      { isPlaying: !previousState.isPlaying }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.transparentContainer} />
        <View style={styles.pullIcon}>
          <Ionicons name="ios-arrow-down" size={32} color="black" />
        </View>
        <LinearGradient
          colors={['#414345', '#000']}
          style={styles.backgroundStyle}
        >
          <View style={styles.playerContainer}>
            <Image
              style={styles.imageStyle}
              source={{ uri: 'https://images.unsplash.com/photo-1541627845349-e6d337eadafa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eed9ac5a86b07bdb3b4df6d8d4f402b6&auto=format&fit=crop&w=500&q=60' }}
            />
            <Text style={styles.chapterLabel}> Chapter 3 </Text>
            <Text style={[styles.chapterLabel, styles.subtext]}> The Path of Yeshua </Text>

            <TouchableWithoutFeedback onPress={this._onPressPlayButton.bind(this)}>
              <View style={styles.footerIcon}>
                {this.state.isPlaying ?
                  <Ionicons name="ios-pause" size={120} color="white" /> :
                  <Ionicons name="ios-play" size={120} color="white" />}
              </View>
            </TouchableWithoutFeedback>

          </View>
        </LinearGradient>
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
    flex: 0.08,
    backgroundColor: 'transparent',
  },
  pullIcon: {
    alignItems: 'center'
  },
	playerContainer: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
	},
  backgroundStyle: {
    flex: 1,
  },
  imageStyle: {
    height: 250,
    width: 250,
  },
  chapterLabel: {
    fontSize: 40,
    fontFamily: 'lato-black',
    textAlign: 'center',
    color: 'white',
    paddingTop: 10
  },
  subtext: {
    fontSize: 20,
    marginBottom: 18,
    fontFamily: 'lato-regular',
  },
  playButton: {

  }
});
