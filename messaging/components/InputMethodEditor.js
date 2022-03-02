import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import ImageGrid from './ImageGrid';

const InputMethodEditor = () => {
  return (
    <View style={styles.inputMethodEditor}>
      <ImageGrid />
    </View>
  );
};

export default InputMethodEditor;

const styles = StyleSheet.create({
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
});
