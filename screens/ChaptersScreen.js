import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, Platform } from 'react-native';

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
            if (index < 2) return <Text style={styles.itemComplete}>{ item.key }</Text>;
            return <Text style={styles.item}>{ item.key }</Text>;
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
  item: {
    paddingVertical: 30,
    paddingLeft: 25,
    marginVertical: 10,
    width: 350,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#2E2D2B',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'lato-black',
  },
  itemComplete: {
    paddingVertical: 30,
    paddingLeft: 25,
    marginVertical: 10,
    width: 350,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#5D5958',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'lato-black',
  }
});
