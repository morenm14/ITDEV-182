import { atom } from 'recoil';

export const userState = atom({
    key: 'activeUser',
    default: '',
});

export const userAvatar = atom({
    key: 'avatar',
    default: 'mmfuentes',
});
