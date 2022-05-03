import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import colors from '../utils/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import SpotifyWebApi from 'spotify-web-api-node';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenState } from '../atoms/tokenAtom';
import {
    singleTrack,
    currentTrackIdState,
    isPlayingState,
} from '../atoms/musicAtom';

const Player = () => {
    const spotify = new SpotifyWebApi();
    const [song, setSong] = useRecoilState(singleTrack);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const songId = useRecoilValue(currentTrackIdState);
    const token = useRecoilValue(tokenState);

    useEffect(() => {
        console.log('song ID:', songId);
        spotify.setAccessToken(token);
        spotify
            .getMyCurrentPlaybackState()
            .then((response) => {
                if (response.statusCode === 200) {
                    console.log('PLAYER STATE', response);
                    setSong(() => {
                        return {
                            isPlaying: response.body?.is_playing,
                            id: response.body.item?.id,
                            name: response.body.item?.name,
                            uri: response.body.item?.uri,
                            artist: response.body.item.artists[0]?.name,
                            image: response.body.item.album.images[2]?.url,
                        };
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [isPlaying]);

    const handlePlayPause = () => {
        spotify.setAccessToken(token);
        if (isPlaying) {
            spotify.pause().then(() => {
                setIsPlaying(false);
            });
        }
        if (!isPlaying) {
            spotify.play().then(() => {
                setIsPlaying(true);
            });
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.image }} style={styles.image} />
            <View style={styles.credits}>
                <Text style={styles.name}>{song.name}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            {isPlaying ? (
                <TouchableOpacity
                    style={styles.playPause}
                    onPress={handlePlayPause}
                >
                    <Ionicons name="pause-sharp" size={32} color="green" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.playPause}
                    onPress={handlePlayPause}
                >
                    <Ionicons name="play-sharp" size={32} color="green" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Player;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'rgba(240, 151, 151, 0.07)',
    },
    image: {
        height: 40,
        width: 40,
        marginBottom: 5,
        marginLeft: 10,
    },

    credits: {
        marginLeft: 10,
        justifyContent: 'center',
        width: '60%',
    },
    name: {
        color: 'white',
        fontSize: 11,
    },
    artist: {
        color: colors.greyLight,
        fontSize: 10,
    },
    playPause: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 30,
        marginTop: 5,
    },
});
