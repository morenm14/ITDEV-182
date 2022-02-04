import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card
          fullName={'Mario Moreno'}
          linkText={'Comments'}
          onPressLinkText={() => {
            console.log('Pressed Link');
          }}
          image={{uri: 'https://unsplash.it/600/600'}}
        />
      </View>
    </SafeAreaView>
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
