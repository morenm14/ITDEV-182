import React from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <Text style={styles.city}>San Francisco</Text>
        <Text style={styles.weatherConditions}>Light Cloud</Text>
        <Text style={styles.temperature}>32º</Text>

        <SearchInput placeholder="Search any city" />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  city: {
    fontSize: 44,
  },
  weatherConditions: {
    fontSize: 18,
  },
  temperature: {
    fontSize: 44,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default App;
