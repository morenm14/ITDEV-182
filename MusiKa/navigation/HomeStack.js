import { StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Playlist from '../screens/Playlist';
import Home from '../screens/Home';
import colors from '../utils/colors';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: Platform.OS === 'ios' ? false : true,
                headerBackTitleVisible: false,
                title: false,
                headerShadowVisible: false,
                headerTintColor: colors.green,
                headerStyle: {
                    backgroundColor: colors.greyDark,
                },
            }}
        >
            <Stack.Screen
                name="Start"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Playlist" component={Playlist} />
        </Stack.Navigator>
    );
};

export default HomeStack;

const styles = StyleSheet.create({});
