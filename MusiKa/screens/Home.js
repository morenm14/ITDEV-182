import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';
import { tokenState } from '../atoms/tokenAtom';
import { categoriesState } from '../atoms/musicAtom';
import SpotifyWebApi from 'spotify-web-api-node';

const spotify = new SpotifyWebApi();

const Home = () => {
    const [user, setUser] = useRecoilState(userState);
    const [categories, setCategories] = useRecoilState(categoriesState);
    const token = useRecoilValue(tokenState);
    useEffect(() => {
        spotify.setAccessToken(token);
        //get user info
        spotify.getMe().then(
            (data) => {
                setUser(data.body.display_name);
            },
            (err) => {
                console.log('Something went wrong!', err);
            }
        );
        //get categories
        spotify
            .getCategories({
                limit: 20,
                offset: 0,
                country: 'SE',
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
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{user}</Text>
            {categories.map((item) => (
                <Text key={item.id} style={styles.text}>
                    {item.name}
                </Text>
            ))}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});
