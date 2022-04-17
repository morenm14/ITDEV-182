import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Card = ({ imageSource, name, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 5,
    },
    name: {
        color: 'white',
        marginBottom: 20,
    },
});
