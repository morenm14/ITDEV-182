import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.city}>San Francisco</Text>
      <Text style={styles.weatherConditions}>Light Cloud</Text>
      <Text style={styles.temperature}>32º</Text>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder="Search any city"
        placeholderTextColor="white"
        clearButtonMode="always"
      />
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
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 25,
  },
});

export default App;
