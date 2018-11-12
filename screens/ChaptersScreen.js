import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ChaptersScreen extends React.Component {
  static navigationOptions = {
    title: 'CHAPTERS',
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

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'Chapter 1', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 2', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 3', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 4', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 5', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 6', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 7', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 8', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 9', subtext: 'Lorem Ipsum Dolor Sit Amet' },
        { key: 'Chapter 10', subtext: 'Lorem Ipsum Dolor Sit Amet' },
      ]
    };
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={this.state.data}

          /* Function below adds conditional formatting to chapters
          based on position in the list */
          renderItem={({ item, index }) => {
            if (index < 2) { // First two use itemComplete styling
              return (
                <View style={[styles.chapterTile, styles.itemComplete]}>
                  <View style={styles.item}>
                    <Text style={styles.chapterText}>{ item.key }</Text>;
                    <Text style={styles.chapterSubtext}>{ item.subtext }</Text>;
                  </View>
                  <View style={styles.icon}>
                    <Ionicons name="md-checkmark-circle" size={32} color="white" />
                  </View>
                </View>
              );
            }
            return ( // else use item styling
              <View style={styles.chapterTile}>
                <View style={styles.item}>
                  <Text style={styles.chapterText}>{ item.key }</Text>;
                  <Text style={styles.chapterSubtext}>{ item.subtext }</Text>;
                </View>
                <View style={styles.icon}>
                  <Ionicons name="ios-play" size={32} color="white" />
                </View>
              </View>
            );
          }
        }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  chapterTile: {
    paddingVertical: 20,
    paddingLeft: 25,
    marginVertical: 5,
    width: 350,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#2E2D2B',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemComplete: {
    backgroundColor: '#5D5958',
  },
  chapterText: {
    fontSize: 20,
    fontFamily: 'lato-black',
    color: '#fff',
  },
  chapterSubtext: {
    fontSize: 16,
    fontFamily: 'lato-regular',
    paddingTop: 5,
    color: '#fff',
  },
  icon: {
    paddingRight: 20,
    justifyContent: 'center'
  }
});
