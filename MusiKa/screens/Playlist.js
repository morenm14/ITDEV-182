import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import { useRecoilValue } from 'recoil';
import { tracksState } from '../atoms/musicAtom';
import PlaylistCover from '../components/PlaylistCover';
import Track from '../components/Track';

const Playlist = ({ route }) => {
    const { name, image } = route.params;
    const tracks = useRecoilValue(tracksState);

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <PlaylistCover title={name} imageSource={image} />
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    imageSource={track.imageUrl}
                    name={track.name}
                    artist={track.artist}
                />
            ))}
        </ScrollView>
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
});
