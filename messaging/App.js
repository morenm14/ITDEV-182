import {StyleSheet, View, Alert} from 'react-native';
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
  console.log(messages);
  const handlePressMessage = ({id, type}) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Delete Message?',
          'Are you sure you want to permanently delete this message?',
          [
            {text: 'cancel', style: 'cancel'},
            {
              text: 'delete',
              style: 'destructive',
              onPress: () => {
                const newMessages = messages.filter(
                  message => message.id !== id,
                );
                setMessages(newMessages);
              },
            },
          ],
        );
        break;
      default:
        break;
    }
  };
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
