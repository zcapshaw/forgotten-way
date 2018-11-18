import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation'
import { WebBrowser, Font, Icon } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

class PlayerFooter extends React.Component {
	
	_onPressExpandButton() {
	  this.props.navigation.navigate('Modal')
	}

	_onPressPlayButton() {
		this.setState(previousState => (
			{ isPlaying: !previousState.isPlaying }
		))
		console.log(store.getState())
	}

	constructor(props) {
		super(props);
		this.state = { isPlaying: false };
	}

	render() {
		return(
		<View style={styles.playerFooter}>
			<TouchableWithoutFeedback onPress={this._onPressExpandButton.bind(this)}>
				<View style={styles.footerIcon}><Ionicons name="ios-arrow-up" size={32} color="white" /></View>
			</TouchableWithoutFeedback>
		  	<Text style={{color:'white', fontSize:16}}>0:34/4:24</Text>
		  	<TouchableWithoutFeedback onPress={this._onPressPlayButton.bind(this)}>
				<View style={styles.footerIcon}> {this.state.isPlaying ? <Ionicons name="ios-pause" size={40} color="white" /> : <Ionicons name="ios-play" size={40} color="white" />} </View>
			</TouchableWithoutFeedback>
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