import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAvatar } from '../atoms/userAtom';

const Avatar = () => {
    const avatar = useRecoilValue(userAvatar);
    return <Image style={styles.avatar} source={{ uri: avatar }} />;
};

export default Avatar;

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
});
