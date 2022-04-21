import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const Browse = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Browse</Text>
            </View>
        </SafeAreaView>
    );
};

export default Browse;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
