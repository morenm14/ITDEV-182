export const getPlaylistTracks = (playlistId, token) => {
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token} `,
            'Content-Type': 'application/json',
        },
    })
        .then((data) => data.json())
        .then((data) => console.log('tracks: ', data))
        .catch((error) => console.log(error));
};
