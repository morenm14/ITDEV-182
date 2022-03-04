import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

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
  const [fullScreenImageId, setFullScreenImageId] = useState(null);
  const [isInputFocused, setInputFocus] = useState(false);
  const [messages, setMessages] = useState([
    createImageMessage(
      'https://i.picsum.photos/id/870/300/300.jpg?hmac=tbU7I0f7O_fL0zzG1foTEtEr-CXjiOl5NegPpGlnSLM',
    ),
    createTextMessage('Hello'),
    createTextMessage('World'),
    createLocationMessage({
      latitude: 37.78825,
      longitude: -122.4324,
    }),
  ]);

  const handlePressToolbarCamera = () => {};

  const handlePressImage = uri => {
    setMessages([createImageMessage(uri), ...messages]);
  };

  const handlePressToolbarLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const {
        coords: {latitude, longitude},
      } = position;
      setMessages([createLocationMessage({latitude, longitude}), ...messages]);
    });
  };

  const handleSubmit = text => {
    setMessages([createTextMessage(text), ...messages]);
  };

  const dismissFullScreenImage = () => {
    setFullScreenImageId(null);
  };

  const renderFullscreenImage = () => {
    if (!fullScreenImageId) return null;
    const image = messages.find(message => message.id === fullScreenImageId);
    if (!image) return null;
    const uri = image;

    return (
      <TouchableHighlight
        style={styles.fullscreenOverlay}
        onPress={dismissFullScreenImage}>
        <Image style={styles.fullscreenImage} source={uri} />
      </TouchableHighlight>
    );
  };

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
      case 'image':
        Keyboard.dismiss();
        setInputFocus(false);
        setFullScreenImageId(id);
        break;

      default:
        break;
    }
  };

  const handleChangeFocus = isFocused => {
    setInputFocus(isFocused);
  };

  return (
    <View style={styles.container}>
      <Status />
      <MessageList messages={messages} onPressMessage={handlePressMessage} />
      <Toolbar
        isFocused={isInputFocused}
        onSubmit={handleSubmit}
        onChangeFocus={handleChangeFocus}
        onPressCamera={handlePressToolbarCamera}
        onPressLocation={handlePressToolbarLocation}
      />
      <InputMethodEditor onPressImage={handlePressImage} />
      {renderFullscreenImage()}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 2,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});
