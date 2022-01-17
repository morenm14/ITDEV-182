import React from 'react';
import {
  Text,
  View,
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
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>
            San Francisco
          </Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>32º</Text>
          <SearchInput placeholder="Search any city" />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textStyle: {
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,,0.2)',
  },
});

export default App;
