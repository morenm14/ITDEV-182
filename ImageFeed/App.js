import React from 'react';
import {StyleSheet, View} from 'react-native';
import Feed from './screens/Feed';

const App = () => {
  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});

export default App;
