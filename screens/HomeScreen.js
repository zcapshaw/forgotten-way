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

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>THE FORGOTTEN WAY</Text>
          </View>
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

          <View style={styles.sectionLabelContainer}>
            <Text style={styles.sectionLabel}>COMMENTARIES</Text>
          </View>

          <View style={styles.contentContainer}>
            <FlatList
              data={[
                  {key: 'First\nCore Truth'},
                  {key: 'Second\nCore Truth'},
                  {key: 'Third\nCore Truth'},
                  {key: 'Fourth\nCore Truth'},
                  {key: 'Fifth\nCore Truth'},
                ]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
  titleContainer: {
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 10,
    marginBottom: 7,
    backgroundColor: '#fff',
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
  titleText: {
    fontSize: 30,
    fontFamily: 'cinzel',
  },
  sectionLabelContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginTop: 10
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
  }
});
