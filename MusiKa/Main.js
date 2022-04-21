import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
                        headerStyle: { backgroundColor: colors.greyDark },
                        headerTintColor: colors.green,
                        headerShadowVisible: false,
                        headerShown: false,
                        tabBarActiveTintColor: colors.green,
                        tabBarStyle: {
                            paddingTop: 10,
                            height: 90,
                            backgroundColor: colors.greyDark,
                        },
                        tabBarShowLabel: true,
                        tabShadows: false,
                    }}
                >
                    <Tab.Screen name="Home" component={HomeStack} />
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Browse" component={Browse} />
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
