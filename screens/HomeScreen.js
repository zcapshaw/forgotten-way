import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Font } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>THE FORGOTTEN WAY</Text>
          </View>

          <View style={styles.dailyQuoteLabel}>
            <Text style={styles.sectionLabel}>DAILY QUOTE</Text>
          </View>

          <View style={styles.dailyQuoteContainer}>
            <Text style={styles.quoteText}>
              It is written that in the last days
              the earth will tremble at the goodness
              of God. So then I ask you, what kind of
              goodness would make you weak in the knees
              with gratitude and awe?
              {'\n'}― Ted Dekker
              </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}


// Need to go through and remove unused styles that came with the template
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: 'cinzel',
  },
  dailyQuoteLabel: {
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginTop: 10
  },
  dailyQuoteContainer: {
    alignItems: 'flex-start',
    marginVertical: 10,
    backgroundColor: '#EFEFEF',
  },
  sectionLabel: {
    fontSize: 12,
    fontFamily: 'lato-black',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  quoteText: {
    fontSize: 17,
    fontFamily: 'lato-regular',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});
