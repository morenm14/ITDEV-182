import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    TextInput,
    View,
    FlatList,
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../utils/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import SpotifyWebApi from 'spotify-web-api-node';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { tokenState } from '../atoms/tokenAtom';
import Player from '../components/Player';
import Track from '../components/Track';
import { singleTrack } from '../atoms/musicAtom';

const spotify = new SpotifyWebApi();

const Search = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [, setTrack] = useRecoilState(singleTrack);
    const token = useRecoilValue(tokenState);

    console.log(searchResults);

    useEffect(() => {
        if (!token) return;
        spotify.setAccessToken(token);
    }, [token]);

    useEffect(() => {
        if (!token) return;
        if (!search) return setSearchResults([]);
        spotify
            .searchTracks(search, { limit: 20 })
            .then((data) => {
                setSearchResults(
                    data.body.tracks.items.map((track) => {
                        return {
                            id: track.id,
                            name: track.name,
                            artist: track.artists[0].name,
                            uri: track.uri,
                            image: track.album.images[2].url,
                        };
                    })
                );
            })
            .catch((error) => {
                console.log('ERROR', error);
            });
    }, [search]);

    const handleTrack = ({ item }) => {
        const { image, id, artist, name, track } = item;
        setTrack(() => {
            return {
                uri: track,
                image: image,
                name: name,
                artist: artist,
                id: id,
            };
        });
    };

    const renderItem = ({ item }) => {
        const { image, id, artist, name } = item;
        return (
            <Track
                key={id}
                imageSource={image}
                name={name}
                artist={artist}
                onPress={() => {
                    handleTrack({ item });
                }}
            />
        );
    };

    const listEmpty = () => {
        return (
            <Text style={styles.listEmptyText}>
                Let's Find a Tune! Let's Jam!
            </Text>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greyDark}
            />
            <View style={styles.searchSection}>
                <Text style={styles.icon}>
                    <Ionicons name="search-sharp" size={30} color="#cfcfcf" />
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Song, Artist, or Album"
                    onChangeText={(search) => setSearch(search)}
                    value={search}
                    clearButtonMode="while-editing"
                />
            </View>

            <FlatList
                style={styles.list}
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(track) => track.id}
                ListEmptyComponent={listEmpty}
            />
            <Player />
        </SafeAreaView>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.greyDark,
    },
    text: {
        color: 'white',
    },
    input: {
        color: colors.greyDark,
        height: 40,
        width: '80%',
        marginVertical: 12,
        padding: 10,
        backgroundColor: 'white',
    },
    searchSection: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center',
        width: '90%',
        borderRadius: 5,
        alignContent: 'flex-start',
    },
    icon: {
        marginLeft: 10,
    },
    listEmptyText: {
        color: colors.green,
        marginTop: 200,
        fontSize: 28,
        fontWeight: 'bold',
        width: 250,
        textAlign: 'center',
    },
});
