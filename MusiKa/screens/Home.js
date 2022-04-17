import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, userAvatar } from '../atoms/userAtom';
import { tokenState } from '../atoms/tokenAtom';
import { categoriesState, myPlaylists } from '../atoms/musicAtom';
import SpotifyWebApi from 'spotify-web-api-node';
import colors from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../components/Profile';
import Card from '../components/Card';
import { getPlaylistTracks } from '../utils/api';

const spotify = new SpotifyWebApi();

const Home = ({ navigation }) => {
    const [, setUser] = useRecoilState(userState);
    const [, setCategories] = useRecoilState(categoriesState);
    const [playlists, setPlaylists] = useRecoilState(myPlaylists);
    const [, setAvatar] = useRecoilState(userAvatar);
    const user = useRecoilValue(userState);
    const token = useRecoilValue(tokenState);

    useEffect(() => {
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

    const renderItem = ({ item }) => {
        return (
            <Card
                key={item.id}
                imageSource={{ uri: item.image }}
                name={item.name}
                onPress={() => {
                    getPlaylistTracks(item.id, token);
                    navigation.navigate('Playlist', item.name);
                }}
            />
        );
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

            <Button
                title="LOG OUT"
                onPress={() => {
                    AsyncStorage.removeItem('accessToken');
                    navigation.replace('Login');
                }}
            />
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
