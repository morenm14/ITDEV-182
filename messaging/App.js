import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import InputMethodEditor from './components/InputMethodEditor';
import Status from './components/Status';
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage,
} from './utils/MessageUtils';

const App = () => {
  const [messages, setMessages] = useState([
    createImageMessage('https://unsplash.it/300/300'),
    createTextMessage('Hello'),
    createTextMessage('World'),
    createLocationMessage({
      latitude: 37.78825,
      longitude: -122.4324,
    }),
  ]);

  const handlePressMessage = () => {};
  return (
    <View style={styles.container}>
      <Status />
      <MessageList messages={messages} onPressMessage={handlePressMessage} />
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
