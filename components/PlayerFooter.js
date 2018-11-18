import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-navigation'
import { WebBrowser, Font, Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

export default class PlayerFooter extends React.Compontent {
	
	_onPressButton() {
      this.props.navigation.navigate('Modal')
    };

	render() {
		return(
		<View>
          <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
            <View style={styles.footerIcon}><Ionicons name="ios-arrow-up" size={32} color="white" /></View>
          </TouchableWithoutFeedback>
          <Text style={{color:'white', fontSize:16}}>0:34/4:24</Text>
          <View style={styles.footerIcon}><Ionicons name="ios-play" size={40} color="white" /></View>
        </View>
		);
	}
}