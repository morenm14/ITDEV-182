import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Playlist = ({ route }) => {
    const { name, image, id } = route.params;
    return (
        <SafeAreaView>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greyDark}
            />
            <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{image}</Text>
                <Text style={styles.text}>{id}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Playlist;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.greyDark,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});
