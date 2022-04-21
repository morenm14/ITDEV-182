import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

import React from 'react';

const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Search Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
