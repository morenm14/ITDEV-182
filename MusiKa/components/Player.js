import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Player = ({ imageSource, name, artist, onPress }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageSource }} style={styles.image} />
            <View style={styles.credits}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
            <TouchableOpacity style={styles.playPause} onPress={onPress}>
                <Ionicons name="play-sharp" size={32} color="green" />
            </TouchableOpacity>
        </View>
    );
};

export default Player;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'rgba(240, 151, 151, 0.07)',
    },
    image: {
        height: 40,
        width: 40,
        marginBottom: 5,
        marginLeft: 10,
    },

    credits: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        color: 'white',
    },
    artist: {
        color: colors.greyLight,
        fontSize: 12,
    },
    playPause: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 30,
        marginTop: 5,
    },
});
