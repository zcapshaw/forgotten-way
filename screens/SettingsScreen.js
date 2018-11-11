import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  SectionList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Font } from 'expo';

/* Changed title from 'app.json' to 'Commentaries'
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
          <SectionList
            sections={[
                { title: 'THE FORGOTTEN WAY COMMENTARIES',
                  data: ['Core Truth #1: Lorem Ipsum', 'Core Truth #2: Lorem Ipsum',
                  'Core Truth #3: Lorem Ipsum', 'Core Truth #4: Lorem Ipsum',
                  'Core Truth #5: Lorem Ipsum'] },
                { title: 'MEDITATIONS',
                  data: ['Practicing Mindfulness'] },
                { title: 'PODCASTS',
                  data: ['Aubrey Marcus Podcast with Ted Dekker',
                  'The Joe Rogan Experience with Ted Dekker',
                  'The Tim Ferris Show with Ted Dekker'] },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) =>
            <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
