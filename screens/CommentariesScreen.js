import React from 'react';
import { Image, StyleSheet, Text, SectionList, TouchableOpacity, View } from 'react-native';
import PlayerFooter from '../components/PlayerFooter';
import SectionLabel from '../components/SectionLabel';
import data from '../constants/CommentariesList.json';

export default class CommentariesScreen extends React.Component {
  static navigationOptions = {
    title: 'COMMENTARIES',
  };

constructor(props) {
  super(props);
  this.state = {
    data, //grabs data from CommentariesList.json
  };
}

 render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionListContainer}>
          <SectionList
            sections={this.state.data}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section }) =>
            <SectionLabel labelText={section.title} />}

            renderItem={({ item }) =>
            <View style={[styles.sectionListContainer, styles.contentContainer]}>
                <TouchableOpacity onPress={() => {}}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                </TouchableOpacity>
                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.subtext}>{item.subtext}</Text>
                  </View>
                </View>
              </View>}

            keyExtractor={(item, index) => index}
          />
        </View>

        <View style={{ flex: 0.09 }}><PlayerFooter /></View>

      </View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionListContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 12,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 5,
    marginLeft: 25,
  },
  name: {
    fontSize: 16,
    fontFamily: 'lato-black',
  },
  subtext: {
    fontSize: 14,
    fontFamily: 'lato-regular',
    paddingTop: 5,
  },
});
