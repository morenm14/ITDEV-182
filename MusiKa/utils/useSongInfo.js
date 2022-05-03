import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { singleTrack } from '../atoms/musicAtom';
import { tokenState } from '../atoms/tokenAtom';
import SpotifyWebApi from 'spotify-web-api-node';

const spotify = new SpotifyWebApi();

function useSongInfo() {
    const [song] = useRecoilState(singleTrack);
    const { id } = song;
    const token = useRecoilValue(tokenState);

    useEffect(() => {
        const fetchSongInfo = async () => {
            if (!id) {
                const trackInfo = await fetch(
                    'https://api.spotify.com/v1/me/player/currently-playing',
                    {
                        header: {
                            Authorization: 'Bearer ' + token,
                        },
                    }
                ).then((response) => response.json());
                console.log(trackInfo);
            }
        };
        fetchSongInfo();
    }, [id, token]);

    return useSongInfo;
}

export default useSongInfo;
