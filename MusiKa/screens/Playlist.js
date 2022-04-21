import { StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import { useRecoilValue } from 'recoil';
import { tracksState } from '../atoms/musicAtom';
import PlaylistCover from '../components/PlaylistCover';

const Playlist = ({ route }) => {
    const { name, image } = route.params;
    const tracks = useRecoilValue(tracksState);

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <PlaylistCover title={name} imageSource={image} />
            {tracks.map((track) => (
                <Text key={track.id} style={styles.name}>
                    {track.name}
                </Text>
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
        fontSize: 18,
        marginTop: 30,
        marginLeft: 20,
    },
});
