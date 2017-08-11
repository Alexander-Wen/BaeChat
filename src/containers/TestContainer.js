import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import InputBar from '../components/InputBar.js';

export default class TestContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>This is where the test UI will go</Text>
        <InputBar/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
