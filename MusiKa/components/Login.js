import { StyleSheet, View, Image, Button, Platform } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useAuthRequest, ResponseType } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useRecoilState } from 'recoil';
import { tokenState } from '../atoms/tokenAtom';
import config from '../config';

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const Login = ({ navigation }) => {
    const [token, setToken] = useRecoilState(tokenState);

    const CLIENT_ID = config.CLIENT_ID;
    const CLIENT_SECRET = config.CLIENT_SECRET;
    const REDIRECT_URL = config.REDIRECT_URL;

    const [request, response, promptAsync] = useAuthRequest(
        {
            responseType: ResponseType.Token,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            scopes: [
                'user-read-email',
                'playlist-modify-public',
                'user-read-private',
                'streaming',
                'user-library-read',
                'user-modify-playback-state',
                'user-read-playback-state',
                'playlist-read-collaborative',
                'playlist-modify-private',
                'playlist-modify-public',
            ],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: REDIRECT_URL,
        },
        discovery
    );

    //save token to local storage
    const saveToken = async (value) => {
        try {
            await AsyncStorage.setItem('accessToken', value);
        } catch (e) {
            console.log(e);
        }
    };

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('accessToken');
            if (value !== null) {
                setToken(value);
                navigation.replace('Home');
                console.log('token from value: ', value);
            }
        } catch (e) {
            console.log('Error: ', error);
        }
    };

    useLayoutEffect(() => {
        try {
            if (response.type === 'success') {
                const { access_token } = response.params;
                saveToken(access_token);
                setToken(access_token);
                console.log('token', token);
            }
        } catch (error) {
            console.log('Error: ', error);
        }

        getToken();
    }, [response]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View style={styles.button}>
                <Button
                    disabled={!request}
                    title={'SING IN WITH SPOTIFY'}
                    color={Platform.OS === 'ios' ? '#FFFFFF' : '#1DB954'}
                    onPress={() => promptAsync()}
                />
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: -100,
    },
    button: {
        backgroundColor: Platform.OS === 'ios' ? '#1DB954' : '#fff',
        padding: 5,
        width: 300,
        borderRadius: 25,
        alignSelf: 'center',
    },
});
