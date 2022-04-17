import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './utils/colors';

import Login from './components/Login';
import Home from './screens/Home';
import Playlist from './screens/Playlist';
import { RecoilRoot } from 'recoil';
const Stack = createStackNavigator();

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerStyle: { backgroundColor: colors.greyDark },
                            headerTintColor: colors.green,
                            headerShadowVisible: false,
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerStyle: { backgroundColor: colors.greyDark },
                            headerShadowVisible: false,
                            headerTintColor: 'white',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="Playlist" component={Playlist} />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
