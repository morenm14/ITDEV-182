import React from 'react';
import {Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import SearchInput from './components/SearchInput';

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.city}>San Francisco</Text>
      <Text style={styles.weatherConditions}>Light Cloud</Text>
      <Text style={styles.temperature}>32º</Text>

      <SearchInput placeholder="Search any city" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default App;
