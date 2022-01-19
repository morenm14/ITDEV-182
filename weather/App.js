import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';
import {fetchLocationId, fetchWeather} from './utils/api';

const App = () => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState('');

  useEffect(() => {
    handleUpdateLocation('Milwaukee');
  }, []);

  const handleUpdateLocation = async city => {
    if (!city) return;
    setLoading(true);

    try {
      const locationId = await fetchLocationId(city);
      const search = await fetchWeather(locationId);

      setLocation(search.location);
      setWeather(search.weather);
      setTemperature(search.temperature);

      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(weather)}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large" />

          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load weather, please try a different city.
                </Text>
              )}
            </View>
          )}

          {!error && (
            <View>
              <Text style={[styles.largeText, styles.textStyle]}>
                {location}
              </Text>
              <Text style={[styles.smallText, styles.textStyle]}>
                {weather}
              </Text>
              <Text style={[styles.largeText, styles.textStyle]}>
                {`${Math.round(temperature)}°`}
              </Text>
            </View>
          )}

          <SearchInput
            placeholder="Search any city"
            onSubmit={handleUpdateLocation}
          />
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
    marginBottom: 10,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
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
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

export default App;
