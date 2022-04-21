import { StyleSheet, View, Button, StatusBar, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userAvatar } from '../atoms/userAtom';
import { tokenState } from '../atoms/tokenAtom';
import { categoriesState, myPlaylists, tracksState } from '../atoms/musicAtom';
import SpotifyWebApi from 'spotify-web-api-node';
import colors from '../utils/colors';
import Profile from '../components/Profile';
import Card from '../components/Card';

const spotify = new SpotifyWebApi();

const Home = ({ navigation }) => {
    const [user, setUser] = useRecoilState(userState);
    const [, setCategories] = useRecoilState(categoriesState);
    const [playlists, setPlaylists] = useRecoilState(myPlaylists);
    const [, setAvatar] = useRecoilState(userAvatar);
    const [token, setToken] = useRecoilState(tokenState);
    const [tracks, setTracks] = useRecoilState(tracksState);

    useLayoutEffect(() => {
        spotify.setAccessToken(token);
        //get user info
        spotify.getMe().then(
            function (data) {
                setUser(data.body.display_name);
                setAvatar(data.body.images[0].url);
                console.log(data.body);
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        );
        //get categories
        spotify
            .getCategories({
                limit: 20,
                offset: 0,
                country: 'US',
                locale: 'sv_SE',
            })
            .then(
                function (data) {
                    setCategories(data.body.categories.items);
                },

                function (err) {
                    console.log('Something went wrong!', err);
                }
            );
        // Get a user's playlists
        spotify.getUserPlaylists(user).then(
            function (data) {
                console.log('Retrieved playlists', data.body);
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
                console.log('created playlists', playlists);
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        );
    }, [user]);

    const renderTracks = (id) => {
        spotify.getPlaylistTracks(id, { limit: 5, offset: 1 }).then(
            function (data) {
                console.log('Tracks Data', data.body);
                setTracks(
                    data.body.items.map((item) => {
                        return {
                            id: item.track.id,
                            name: item.track.name,
                        };
                    })
                );
                console.log(tracks);
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
                imageSource={{ uri: image }}
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
            console.log('Token removed from storage');
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
            <Profile />
            <FlatList
                style={styles.list}
                data={playlists}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />

            <Button title="LOG OUT" onPress={handleLogout} />
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
        alignContent: 'center',
    },
});
