import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar,
    Text,
} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import { useRecoilValue, useRecoilState } from 'recoil';
import { recommendationsState, singleTrack } from '../atoms/musicAtom';
import Player from '../components/Player';
import Card from '../components/Card';
import { View } from 'react-native-web';

const Browse = () => {
    const recommendations = useRecoilValue(recommendationsState);
    const [single, setTrack] = useRecoilState(singleTrack);

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
    const handleTrack = ({ item }) => {
        const { image, id, artist, name, uri } = item;
        setTrack(() => {
            return {
                uri: uri,
                image: image,
                name: name,
                artist: artist,
                id: id,
            };
        });
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
            <Player
                name={single.name}
                imageSource={single.image}
                artist={single.artist}
            />
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
