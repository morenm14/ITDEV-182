import {StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import AuthorRow from './AuthorRow';
import React from 'react';

const Card = ({fullName, image, linkText, onPressLinkText}) => {
  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <Image style={styles.image} source={image} />
    </View>
  );
};

export default Card;

Card.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func,
};

Card.defaultProps = {
  linkText: '',
  onPressLinkText: () => {},
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});
