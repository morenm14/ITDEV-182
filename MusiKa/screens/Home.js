import {
    StyleSheet,
    View,
    StatusBar,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userAvatar } from '../atoms/userAtom';
import { tokenState } from '../atoms/tokenAtom';
import { myPlaylists, tracksState } from '../atoms/musicAtom';
import SpotifyWebApi from 'spotify-web-api-node';
import colors from '../utils/colors';
import Profile from '../components/Profile';
import Card from '../components/Card';
import Player from '../components/Player';

const spotify = new SpotifyWebApi();

const Home = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useRecoilState(userState);
    const [playlists, setPlaylists] = useRecoilState(myPlaylists);
    const [, setAvatar] = useRecoilState(userAvatar);
    const [token, setToken] = useRecoilState(tokenState);
    const [, setTracks] = useRecoilState(tracksState);

    useLayoutEffect(() => {
        spotify.setAccessToken(token);
        //get user info
        spotify.getMe().then(
            function (data) {
                setUser(data.body.display_name);
                setAvatar(data.body.images[0].url);
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        );

        // Get a user's playlists
        spotify.getUserPlaylists(user).then(
            function (data) {
                setPlaylists(
                    data.body.items.map((item) => {
                        return {
                            name: item.name,
                            id: item.id,
                            image: item.images[0].url,
                            tracks: item.tracks.href,
                        };
                    })
                );
                setIsLoading(false);
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        );
    }, [user]);

    const renderTracks = (id) => {
        spotify.getPlaylistTracks(id, { limit: 50 }).then(
            function (data) {
                setTracks(
                    data.body.items.map((item) => {
                        return {
                            id: item.track.id,
                            name: item.track.name,
                            imageUrl: item.track.album.images[0].url,
                            artist: item.track.artists[0].name,
                            track: item.track.uri,
                        };
                    })
                );
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        );
    };

    const renderItem = ({ item }) => {
        const { name, id, image } = item;
        return (
            <Card
                key={id}
                imageSource={image}
                name={name}
                onPress={() => {
                    renderTracks(id);
                    navigation.navigate('Playlist', {
                        name,
                        image,
                        id,
                    });
                }}
            />
        );
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('accessToken');
            setToken('');
            navigation.navigate('Login');
        } catch (error) {
            console.log('error');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greyDark}
            />

            <Profile onPress={handleLogout} />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    style={styles.list}
                    data={playlists}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            )}

            <Player />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greyDark,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    playlists: {
        padding: 20,
    },
    list: {
        flex: 1,
        marginTop: 10,
        alignContent: 'center',
    },
});
