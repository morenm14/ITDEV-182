import React, {useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import AuthorRow from './AuthorRow';

const Card = ({fullName, image, linkText, onPressLinkText}) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});
