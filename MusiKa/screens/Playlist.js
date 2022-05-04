import { StyleSheet, StatusBar, View, FlatList } from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import { useRecoilValue, useRecoilState } from 'recoil';
import { tracksState, singleTrack, isPlayingState } from '../atoms/musicAtom';
import PlaylistCover from '../components/PlaylistCover';
import Track from '../components/Track';
import Player from '../components/Player';
import SpotifyWebApi from 'spotify-web-api-node';
import { tokenState } from '../atoms/tokenAtom';

const spotify = new SpotifyWebApi();

const Playlist = ({ route }) => {
    const { name, image } = route.params;
    const tracks = useRecoilValue(tracksState);
    const token = useRecoilValue(tokenState);
    const [, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setSong] = useRecoilState(singleTrack);

    const handleTrack = ({ item }) => {
        const { imageUrl, id, artist, name, track } = item;
        setSong(() => {
            return {
                uri: track,
                image: imageUrl,
                name: name,
                artist: artist,
                id: id,
            };
        });
        setIsPlaying(true);
        spotify.setAccessToken(token);
        spotify.play({ uris: [track] });
    };

    const renderItem = ({ item }) => {
        const { imageUrl, id, artist, name } = item;
        return (
            <Track
                key={id}
                imageSource={imageUrl}
                name={name}
                artist={artist}
                onPress={() => {
                    handleTrack({ item });
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <PlaylistCover title={name} imageSource={image} />
            <FlatList
                style={styles.list}
                data={tracks}
                renderItem={renderItem}
                keyExtractor={(track) => track.id}
            />
            <Player />
        </View>
    );
};

export default Playlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greyDark,
    },
    name: {
        color: 'white',
        fontSize: 12,
        marginTop: 20,
        marginLeft: 20,
    },
    list: {
        flex: 1,
        marginTop: 10,
    },
});
