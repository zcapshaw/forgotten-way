import React from 'react';
import {
  Platform, ScrollView, StyleSheet, Text, FlatList, View, ImageBackground, TouchableWithoutFeedback, } from 'react-native';
import { Icon } from 'expo';
import PlayerFooter from '../components/PlayerFooter';

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
  }

  _onPressButton() {
    this.props.navigation.navigate('Modal');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={[styles.container, styles.contentContainer]}>

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

          <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
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
          </TouchableWithoutFeedback>

          <View style={styles.sectionLabelContainer}>
            <Text style={styles.sectionLabel}>COMMENTARIES</Text>
          </View>

          <View style={[styles.contentContainer, styles.commentariesContainer]}>
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
              renderItem={({ item }) => (
                <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1534608176107-b67f671733b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2eaaaa01848d4a9c31b21a3b9165af6f&auto=format&fit=crop&w=1052&q=80' }}
                style={styles.item}
                >
                  <Text style={styles.itemText}>{item.key}</Text>
                </ImageBackground>
              )}
            />
          </View>

        </ScrollView>

        <View style={{ flex: 0.12 }}><PlayerFooter /></View>

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
    paddingBottom: 20,
  },
  commentariesContainer: {
    marginLeft: 0, //removing margin for clean off screen image flow
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
    backgroundColor: '#2E2D2B',
  },
  quoteText: {
    fontSize: 17,
    fontFamily: 'lato-regular',
    color: 'white',
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
    paddingBottom: 10,
  },
  image: {
    flexGrow: 1,
    width: 325,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
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
    marginBottom: 18,
    fontFamily: 'lato-regular',
  },
  item: {
    marginHorizontal: 10,
    padding: 10,
    width: 150,
    height: 120,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'lato-black',
    textAlign: 'center',
  },
});
