import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, Platform } from 'react-native';


/* Changed title from 'Links' to 'CHAPTERS'
  * We should go back and update all the file names and classes too */

export default class LinksScreen extends React.Component {
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={[
            /* hardcoded checkmarks into 1st 2 chapter titles
            Need to figure out how to add right-aligned icons to
            FlatList items */
            { key: 'Chapter 1: Awesome Chapter     ☑️' },
            { key: 'Chapter 2: Radical Chapter           ☑️' },
            { key: 'Chapter 3: Tubular Chapter' },
            { key: 'Chapter 4: Incredible Chapter' },
            { key: 'Chapter 5: Ridiculous Chapter' },
            { key: 'Chapter 6: Good Chapter' },
            { key: 'Chapter 7: Better Chapter' },
            { key: 'Chapter 8: Best Chapter' },
            { key: 'Chapter 9: Delicious Chapter' },
            { key: 'Chapter 10: Sparkling Chapter' },
            { key: 'Chapter 11: Magnificent Chapter' }
          ]}

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
    paddingLeft: 10,
    marginVertical: 10,
    width: 350,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#33adff',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'lato-black',
  },
  itemComplete: {
    paddingVertical: 30,
    paddingLeft: 10,
    marginVertical: 10,
    width: 350,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#B6C9D7',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'lato-black',
  }
});
