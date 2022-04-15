import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
    ScrollView,
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

const spotify = new SpotifyWebApi();

const Home = ({ navigation }) => {
    const [, setUser] = useRecoilState(userState);
    const [categories, setCategories] = useRecoilState(categoriesState);
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
                setPlaylists(data.body.items);
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        );
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greyDark}
            />
            <Profile />
            <ScrollView style={styles.playlists}>
                {playlists.map((item) => (
                    <Text key={item.id} style={styles.text}>
                        {item.name}
                    </Text>
                ))}
            </ScrollView>

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
});
