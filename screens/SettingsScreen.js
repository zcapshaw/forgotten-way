import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Font } from 'expo';

/* Changed title from 'app.json' to 'Meditations'
  * We should go back and update all the file names and classes too */

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'COMMENTARIES',
    headerStyle: {
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
    },
    headerTitleStyle: {
      fontSize: 30,
      fontFamily: 'cinzel',
    },
  };
 

 render() {
    return (
    	<View style={styles.container}>
        	<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        	</ScrollView>
        </View>
    	);
	}	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  });