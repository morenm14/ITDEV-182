import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 25,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});

export default SearchInput;
