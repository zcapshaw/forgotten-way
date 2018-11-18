import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation'
import { WebBrowser, Font, Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

class PlayerFooter extends React.Component {
	
	_onPressButton() {
      this.props.navigation.navigate('Modal')
    };

	render() {
		return(
		<View style={styles.playerFooter}>
          <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
            <View style={styles.footerIcon}><Ionicons name="ios-arrow-up" size={32} color="white" /></View>
          </TouchableWithoutFeedback>
          <Text style={{color:'white', fontSize:16}}>0:34/4:24</Text>
          <View style={styles.footerIcon}><Ionicons name="ios-play" size={40} color="white" /></View>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	playerFooter: {
	    display: 'flex',
	    flex: 1,
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    backgroundColor: '#545454',
  	},

	footerIcon: {
    	paddingHorizontal: 25,
  	},
})

export default withNavigation(PlayerFooter);