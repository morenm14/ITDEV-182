import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Grid from './Grid';

const ImageGrid = () => {
  const [images, setImages] = useState([
    {uri: 'https://picsum.photos/600/600?image=10'},
    {uri: 'https://picsum.photos/600/600?image=20'},
    {uri: 'https://picsum.photos/600/600?image=30'},
    {uri: 'https://picsum.photos/600/600?image=40'},
  ]);

  const keyExtractor = ({uri}) => uri;

  const renderItem = ({item: {uri}, size, marginTop, marginLeft}) => {
    const style = {
      width: size,
      height: size,
      marginLeft: marginLeft,
      marginTop: marginTop,
    };

    return <Image source={{uri}} style={style} />;
  };

  return (
    <Grid data={images} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

ImageGrid.propTypes = {
  onPressImage: PropTypes.func,
};

ImageGrid.defaultProps = {
  onPressImage: () => {},
};

export default ImageGrid;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
