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
  ImageBackground
} from 'react-native';
import { WebBrowser, Font, Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'THE FORGOTTEN WAY',
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

          <View style={styles.sectionLabelContainer}>
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

          <View style={styles.sectionLabelContainer}>
            <Text style={styles.sectionLabel}>NEXT CHAPTER</Text>
          </View>

          <View style={styles.nextChapter}>
          <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1541627845349-e6d337eadafa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eed9ac5a86b07bdb3b4df6d8d4f402b6&auto=format&fit=crop&w=500&q=60' }}
          style={styles.image}
          >
            <Icon.Ionicons
              name="ios-play"
              size={80}
              color="white"
              style={styles.chapterPlay}
            />
            <Text style={styles.chapterLabel}>
              Chapter 3
            </Text>
            <Text style={[styles.chapterLabel, styles.subtext]}>
              The Path of Yeshua
            </Text>
            </ImageBackground>
          </View>

          <View style={styles.sectionLabelContainer}>
            <Text style={styles.sectionLabel}>COMMENTARIES</Text>
          </View>

          <View style={styles.contentContainer}>
            <FlatList
              data={[
                  { key: 'First\nCore Truth' },
                  { key: 'Second\nCore Truth' },
                  { key: 'Third\nCore Truth' },
                  { key: 'Fourth\nCore Truth' },
                  { key: 'Fifth\nCore Truth' },
                ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>

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
  sectionLabelContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginTop: 15
  },
   sectionLabel: {
    fontSize: 12,
    fontFamily: 'lato-black',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  dailyQuoteContainer: {
    alignItems: 'flex-start',
    marginVertical: 10,
    backgroundColor: '#EFEFEF',
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
  nextChapter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  image: {
    flex: 1,
    height: null,
    width: 325,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 5,
  },
  chapterPlay: {
    marginTop: 20,
  },
  chapterLabel: {
    fontSize: 22,
    fontFamily: 'lato-black',
    textAlign: 'center',
    color: 'white',
  },
  subtext: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'lato-regular',
  },
  item: {
    marginHorizontal: 10,
    padding: 10,
    width: 150,
    height: 150,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: '#33adff',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'lato-black',
  },
});
