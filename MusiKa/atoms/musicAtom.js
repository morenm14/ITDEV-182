import { atom } from 'recoil';

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
