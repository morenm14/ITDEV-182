import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Avatar from './components/Avatar';
import AuthorRow from './components/AuthorRow';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthorRow
          fullName={'Mario Moreno'}
          linkText={'Comments'}
          onPressLinkText={() => {
            console.log('Pressed Link');
          }}
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
