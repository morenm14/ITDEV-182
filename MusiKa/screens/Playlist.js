import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Playlist = ({ navigation, route }) => {
    return (
        <View>
            <Text>{route.params}</Text>
        </View>
    );
};

export default Playlist;

const styles = StyleSheet.create({});
