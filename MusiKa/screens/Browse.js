import { StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import colors from '../utils/colors';
import { useRecoilState } from 'recoil';
import {
    recommendationsState,
    singleTrack,
    isPlayingState,
} from '../atoms/musicAtom';
import SpotifyWebApi from 'spotify-web-api-node';
import { tokenState } from '../atoms/tokenAtom';
import Player from '../components/Player';
import Card from '../components/Card';

const spotify = new SpotifyWebApi();

const Browse = () => {
    const [recommendations, setRecommendations] =
        useRecoilState(recommendationsState);
    const [, setSong] = useRecoilState(singleTrack);
    const [, setIsPlaying] = useRecoilState(isPlayingState);
    const [token] = useRecoilState(tokenState);

    useEffect(() => {
        spotify.setAccessToken(token);
        //Get Recommendations
        spotify
            .getRecommendations({
                seed_genres: ['dance', 'latino', 'pop', 'rock'],
                min_popularity: 50,
                limit: 50,
            })
            .then((data) => {
                console.log('Recommendations', data);
                setRecommendations(
                    data.body.tracks.map((item) => {
                        return {
                            id: item.id,
                            name: item.name,
                            uri: item.uri,
                            image: item.album.images[0]?.url,
                            artist: item.artists[0]?.name,
                        };
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleTrack = ({ item }) => {
        const { image, id, artist, name, uri } = item;
        console.log(item);
        setSong(() => {
            return {
                uri: uri,
                image: image,
                name: name,
                artist: artist,
                id: id,
            };
        });
        setIsPlaying(true);
        spotify.setAccessToken(token);
        spotify.play({ uris: [uri] });
    };

    const renderItem = ({ item }) => {
        const { name, artist, image, id } = item;
        return (
            <Card
                key={id}
                imageSource={image}
                name={name}
                artist={artist}
                onPress={() => handleTrack({ item })}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greyDark}
            />

            <FlatList
                style={styles.list}
                data={recommendations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
            <Player />
        </SafeAreaView>
    );
};

export default Browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: colors.greyDark,
    },
    text: {
        color: 'white',
    },
    list: {
        flex: 1,
        alignContent: 'center',
    },
});
