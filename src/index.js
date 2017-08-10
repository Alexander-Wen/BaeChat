import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class BaeChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi there Gillian</Text>
        <TextInput placeholder="Type here"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
