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

constructor(props) {
  super(props);
  this.state = {
    data: [
      {
        title: 'THE FORGOTTEN WAY COMMENTARIES',
        data: [
          { key: 1, name: 'Core Truth #1: Lorem Ipsum', image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
          { key: 2, name: 'Core Truth #2: Lorem Ipsum', image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
          { key: 3, name: 'Core Truth #3: Lorem Ipsum', image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
          { key: 4, name: 'Core Truth #4: Lorem Ipsum', image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
          { key: 5, name: 'Core Truth #5: Lorem Ipsum', image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
        ]
      },
      {
        title: 'MEDITATIONS',
        data: [
          { key: 1, name: 'Practicing Mindfulness', image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
        ]
      },
      {
        title: 'PODCASTS',
        data: [
          { key: 1, name: 'Aubrey Marcus Podcast with Ted Dekker', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
          { key: 2, name: 'The Joe Rogan Experience with Ted Dekker', image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
          { key: 3, name: 'The Tim Ferris Show with Ted Dekker', image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
        ]
      },
    ]
  };
}


 render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}

          renderSectionHeader={({ section }) =>
          <Text style={styles.sectionHeader}>{section.title}</Text>}

          renderItem={({ item }) =>
          <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </View>}

          keyExtractor={(item, index) => index}
        />
      </View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  sectionHeader: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 16,
  },
});
