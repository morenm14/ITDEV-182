import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SearchInput = props => {
  const {placeholder, onSubmit} = props;
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        clearButtonMode="always"
        onChangeText={text => setCity(text)}
        onSubmitEditing={() => {
          if (!city) return;
          onSubmit(city);
          setCity('');
        }}
        value={city}
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
