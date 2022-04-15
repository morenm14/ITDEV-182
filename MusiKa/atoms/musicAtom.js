import { atom } from 'recoil';

export const categoriesState = atom({
    key: 'categories',
    default: [],
});

export const myPlaylists = atom({
    key: 'myPlaylists',
    default: [],
});
