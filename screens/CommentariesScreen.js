import React from 'react';
import { Image, Platform, StyleSheet, Text, SectionList, TouchableOpacity, View } from 'react-native';
import PlayerFooter from '../components/PlayerFooter';

/* Changed title from 'app.json' to 'Commentaries'
  * We should go back and update all the file names and classes too */

export default class CommentariesScreen extends React.Component {
  static navigationOptions = {
    title: 'COMMENTARIES',
  };

constructor(props) {
  super(props);
  this.state = {
    data: [
      {
        title: 'THE FORGOTTEN WAY',
        data: [
          { key: 1, name: 'Core Truth #1: Lorem Ipsum', subtext: '8 minutes, 38 seconds', image: 'https://images.unsplash.com/photo-1541832069-e4f383392e1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a561f6a5179df29e8729877d4ff80b32&auto=format&fit=crop&w=500&q=60' },
          { key: 2, name: 'Core Truth #2: Lorem Ipsum', subtext: '5 minutes, 22 seconds', image: 'https://images.unsplash.com/photo-1541796484625-7f5bcba550cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac759f3f244b417ca48e7f15b8e0b7d8&auto=format&fit=crop&w=500&q=60' },
          { key: 3, name: 'Core Truth #3: Lorem Ipsum', subtext: '4 minutes, 29 seconds', image: 'https://images.unsplash.com/photo-1541789094913-f3809a8f3ba5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ba555c8bb03ffabb86e6ecf9ec4243c&auto=format&fit=crop&w=500&q=60' },
          { key: 4, name: 'Core Truth #4: Lorem Ipsum', subtext: '5 minutes, 32 seconds', image: 'https://images.unsplash.com/photo-1541746951956-4f27df54f02b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=027b183a2e7e5c8cb657862b34db5530&auto=format&fit=crop&w=500&q=60' },
          { key: 5, name: 'Core Truth #5: Lorem Ipsum', subtext: '6 minutes, 52 seconds', image: 'https://images.unsplash.com/photo-1541753231552-fa0b6f0c4d7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2887fd5cf1d3eae72545fe3d8cdd5a04&auto=format&fit=crop&w=500&q=60' },
        ]
      },
      {
        title: 'MEDITATIONS',
        data: [
          { key: 1, name: 'Practicing Mindfulness', subtext: '9 minutes, 34 seconds', image: 'https://images.unsplash.com/photo-1541664480066-ae01cda3bc69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d3aa7477394b86b8289beffc12174c8&auto=format&fit=crop&w=500&q=60' },
        ]
      },
      {
        title: 'PODCASTS',
        data: [
          { key: 1, name: 'Aubrey Marcus Podcast with Ted Dekker', subtext: '1 hour, 25 minutes', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04c4af64629678d376f21fd9bd05229f&auto=format&fit=crop&w=500&q=60' },
          { key: 2, name: 'The Joe Rogan Experience with Ted Dekker', subtext: '2 hours, 58 minutes', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04c4af64629678d376f21fd9bd05229f&auto=format&fit=crop&w=500&q=60' },
          { key: 3, name: 'The Tim Ferris Show with Ted Dekker', subtext: '3 hours, 9 minutes', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04c4af64629678d376f21fd9bd05229f&auto=format&fit=crop&w=500&q=60' },
        ]
      },
    ]
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
            <Text style={styles.sectionHeader}>{section.title}</Text>}

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

        <View style={{ flex: 0.12 }}><PlayerFooter /></View>

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
  sectionHeader: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 8,
    fontSize: 12,
    fontFamily: 'lato-black',
    color: 'rgba(96,100,109, 1)',
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
    marginLeft: 20,
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