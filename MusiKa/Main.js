import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { tokenState } from './atoms/tokenAtom';
import { useRecoilValue } from 'recoil';
import colors from './utils/colors';
import Search from './screens/Search';
import Browse from './screens/Browse';
import HomeStack from './navigation/HomeStack';
import AuthStack from './navigation/AuthStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
    const token = useRecoilValue(tokenState);
    return (
        <NavigationContainer>
            {token ? (
                <Tab.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: 'transparent' },
                        headerTintColor: colors.green,
                        headerShadowVisible: false,
                        headerShown: false,
                        tabBarActiveTintColor: colors.green,
                        tabBarStyle: {
                            paddingTop: 10,
                            paddingBottom: 20,
                            height: 80,
                            backgroundColor: colors.greyDark,
                        },
                        tabBarShowLabel: true,
                        tabShadows: false,
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeStack}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <Ionicons
                                        name="home"
                                        size={30}
                                        color={
                                            focused
                                                ? colors.green
                                                : colors.greyLight
                                        }
                                    />
                                );
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Search"
                        component={Search}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <Ionicons
                                        name="search"
                                        size={30}
                                        color={
                                            focused
                                                ? colors.green
                                                : colors.greyLight
                                        }
                                    />
                                );
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Browse"
                        component={Browse}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <Ionicons
                                        name="albums"
                                        size={30}
                                        color={
                                            focused
                                                ? colors.green
                                                : colors.greyLight
                                        }
                                    />
                                );
                            },
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={AuthStack}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Main;

const styles = StyleSheet.create({});
