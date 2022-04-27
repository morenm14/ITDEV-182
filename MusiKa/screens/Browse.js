import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Browse = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greyDark}
            />
            <Text style={styles.text}>Browse Screen</Text>
        </SafeAreaView>
    );
};

export default Browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greyDark,
    },
    text: {
        color: 'white',
    },
});
