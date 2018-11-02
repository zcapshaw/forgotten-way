import React from 'react';
import { ExpoConfigView } from '@expo/samples';

/* Changed title from 'app.json' to 'Meditations'
  * We should go back and update all the file names and classes too */

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Meditations',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
