import { StyleSheet, View, Image, Button, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useAuthRequest, ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import config from '../config';

WebBrowser.maybeCompleteAuthSession();
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const Login = () => {
    const [token, setToken] = useState('');

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
                'user-library-modify',
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

    useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            setToken(access_token);
            console.log('access token: ', token);
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View style={styles.button}>
                <Button
                    disabled={!request}
                    title="Login"
                    color={Platform.OS === 'ios' ? '#FFFFFF' : '#1DB954'}
                    onPress={() => {
                        promptAsync();
                    }}
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
    },
    button: {
        backgroundColor: Platform.OS === 'ios' ? '#1DB954' : '#fff',
        padding: 5,
        borderRadius: 25,
    },
});
