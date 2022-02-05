import React from 'react';
import {StyleSheet, View} from 'react-native';
import CardList from './components/CardList';

const items = [
  {id: 50, author: 'Bob Ross'},
  {id: 10, author: 'Chuck Norris'},
];

const App = () => {
  return (
    <View style={styles.container}>
      <CardList items={items} />
    </View>
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
