import {FlatList, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {getImageFromId} from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

const CardList = ({items}) => {
  const renderItem = obj => {
    const id = obj.item.id;
    const author = obj.item.author;

    return (
      <Card
        fullName={author}
        image={{
          uri: getImageFromId(id),
        }}
      />
    );
  };

  return (
    <FlatList
      style={styles.flatList}
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({
  flatList: {
    marginTop: Platform.OS === 'ios' ? 60 : 0,
  },
});
