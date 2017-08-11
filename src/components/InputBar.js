import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputBar = () => {
  return (
    <View>
      <View style={styles.roundedCorners}>
        <TextInput> input bar </TextInput>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  roundedCorners: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    width: '95%',
    height: 50,
  },
});

module.exports = InputBar;
