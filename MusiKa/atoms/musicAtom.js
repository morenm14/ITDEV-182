import { atom, selector } from 'recoil';

export const categoriesState = atom({
    key: 'categories',
    default: [],
});

export const myPlaylists = atom({
    key: 'playlists',
    default: [],
});

export const tracksState = atom({
    key: 'tracks',
    default: [],
});

export const singleTrack = atom({
    key: 'track',
    default: [],
});

export const currentTrackIdState = selector({
    key: 'trackId',
    get: ({ get }) => {
        return get(singleTrack).id;
    },
});

export const recommendationsState = atom({
    key: 'recommendations',
    default: [],
});

export const isPlayingState = atom({
    key: 'playingSong',
    default: false,
});
