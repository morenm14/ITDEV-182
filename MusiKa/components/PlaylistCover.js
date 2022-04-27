import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../utils/colors';

const PlaylistCover = ({ title, imageSource }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <LinearGradient
                    colors={['#00b09b', '#96c93d']}
                    style={styles.imageBackground}
                >
                    <Image source={{ uri: imageSource }} style={styles.image} />
                </LinearGradient>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={styles.fade}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default PlaylistCover;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greyDark,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    image: {
        width: 200,
        height: 200,
    },

    imageBackground: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fade: {
        height: 100,
        width: '100%',
        marginTop: -100,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginTop: -20,
        marginLeft: 10,
        marginBottom: 20,
    },
});
