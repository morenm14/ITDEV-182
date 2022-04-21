import 'react-native-gesture-handler';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Main from './Main';

export default function App() {
    return (
        <RecoilRoot>
            <Main />
        </RecoilRoot>
    );
}
