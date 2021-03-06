import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

const AuthorRow = ({fullName, linkText, onPressLinkText}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthorRow;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});
