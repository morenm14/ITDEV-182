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
                    colors={['transparent', 'rgba(0,0,0,2)']}
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
        width: 230,
        height: 230,
    },

    imageBackground: {
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fade: {
        height: 90,
        width: '100%',
        marginTop: -90,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginTop: -50,
        marginLeft: 10,
    },
});
