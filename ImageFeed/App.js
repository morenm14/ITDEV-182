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

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Avatar initials={'FL'} size={35} backgroundColor={'teal'} />
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
