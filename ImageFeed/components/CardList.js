import {FlatList, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {getImageFromId} from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

const CardList = ({items, commentsForItem, onPressComments}) => {
  const renderItem = obj => {
    const id = obj.item.id;
    const author = obj.item.author;
    const comments = commentsForItem[id];

    return (
      <Card
        fullName={author}
        image={{
          uri: getImageFromId(id),
        }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    );
  };

  return (
    <FlatList
      style={styles.flatList}
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({
  flatList: {
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
});
