import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';

const Card = ({ imageSource, name, onPress, artist }) => {
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

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-around',
        marginLeft: 10,
    },
    image: {
        height: 170,
        width: 170,
        marginBottom: 5,
    },
    name: {
        color: 'white',
    },
    artist: {
        marginBottom: 10,
        fontSize: 10,
        color: 'grey',
    },
    credits: {
        flex: 1,
        alignItems: 'flex-start',
    },
});
