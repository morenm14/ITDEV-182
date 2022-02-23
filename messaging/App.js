import {StyleSheet, View} from 'react-native';
import React from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import InputMethodEditor from './components/InputMethodEditor';
import Status from './components/Status';

const App = () => {
  return (
    <View style={styles.container}>
      <Status />
      <MessageList />
      <Toolbar />
      <InputMethodEditor />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
