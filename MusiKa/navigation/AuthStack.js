import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import colors from '../utils/colors';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerBackTitleVisible: false,
                title: false,
                headerShadowVisible: false,
                headerTintColor: colors.green,
                headerStyle: {
                    backgroundColor: colors.greyDark,
                },
            }}
        >
            <Stack.Screen name="Auth" component={Login} />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({});
