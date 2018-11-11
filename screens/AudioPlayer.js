import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { WebBrowser, Font, Icon } from 'expo';
// import TrackPlayer from 'react-native-track-player';
import SlidingUpPanel from 'rn-sliding-up-panel';


/*TrackPlayer.setupPlayer().then(() => {
	// The player is ready to be used
});*/

export default class AudioPlayer extends React.Component {
  state = {
    visible: false
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Button title='Show panel' onPress={() => this.setState({visible: true})} />
        <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={styles.container}>
            <Text>Here is the content inside panel</Text>
            <Button title='Hide' onPress={() => this.setState({visible: false})} />
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});