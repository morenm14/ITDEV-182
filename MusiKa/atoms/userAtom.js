import { atom } from 'recoil';

export const userState = atom({
    key: 'activeUser',
    default: '',
});
