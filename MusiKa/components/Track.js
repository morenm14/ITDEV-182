import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Track = ({ imageSource, name, onPress, artist }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: imageSource }} style={styles.image} />
            <View style={styles.credits}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Track;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
    },
    image: {
        height: 40,
        width: 40,
        marginBottom: 5,
        marginLeft: 10,
    },

    credits: {
        marginLeft: 10,
    },
    name: {
        color: 'white',
    },
    artist: {
        color: colors.greyLight,
    },
});
