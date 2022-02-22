import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Toolbar = () => {
  return <View style={styles.toolbar}></View>;
};

export default Toolbar;

const styles = StyleSheet.create({
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    backgroundColor: 'white',
  },
});
