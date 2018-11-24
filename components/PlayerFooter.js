import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

class PlayerFooter extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isPlaying: false };
	}

	_onPressExpandButton() {
		this.props.navigation.navigate('Modal');
	}

	_onPressPlayButton() {
		this.setState(previousState => (
			{ isPlaying: !previousState.isPlaying }
		));
	}

	render() {
		return (
		<View style={styles.playerFooter}>
			<LinearGradient
				colors={['#414345', '#232526']}
				style={styles.footerBackground}
			>
				<TouchableWithoutFeedback onPress={this._onPressExpandButton.bind(this)}>
					<View style={styles.footerIcon}>
						<Ionicons name="ios-arrow-up" size={32} color="white" />
					</View>
				</TouchableWithoutFeedback>

				<Text style={{ color: 'white', fontSize: 16 }}>0:34/4:24</Text>

				<TouchableWithoutFeedback onPress={this._onPressPlayButton.bind(this)}>
					<View style={styles.footerIcon}>
						{this.state.isPlaying ?
						<Ionicons name="ios-pause" size={40} color="white" /> :
						<Ionicons name="ios-play" size={40} color="white" />}
					</View>
				</TouchableWithoutFeedback>
			</LinearGradient>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	playerFooter: {
		//display: 'flex',
		flex: 1,
	},
	footerBackground: {
		//display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	footerIcon: {
		paddingHorizontal: 25,
	},
});

export default withNavigation(PlayerFooter);
