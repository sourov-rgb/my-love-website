import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI_PROD;

const scopes = [
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing'
];

const StoryPage = () => {
  const [token, setToken] = useState(localStorage.getItem('spotifyToken') || '');
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash.substring(1)
      .split('&')
      .reduce((initial, item) => {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      localStorage.setItem('spotifyToken', _token);
      spotifyApi.setAccessToken(_token);
      window.location.hash = '';
    } else if (token) {
      spotifyApi.setAccessToken(token);
    }
  }, [token]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await spotifyApi.searchTracks(query);
      setTracks(res.tracks.items);
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handlePlay = async (uri) => {
    try {
      await spotifyApi.play({ uris: [uri] });
    } catch (err) {
      console.error('Playback error (make sure Spotify is open):', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('spotifyToken');
    setToken('');
    window.location.reload();
  };

  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=token&scope=${encodeURIComponent(scopes.join(' '))}`;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎵 My Love Story Page with Spotify 🎵</h1>

      {!token ? (
        <a
          href={loginUrl}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1DB954',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px',
          }}
        >
          Login to Spotify
        </a>
      ) : (
        <div>
          <button
            onClick={handleLogout}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#d9534f',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
            }}
          >
            Logout
          </button>

          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a song..."
              style={{
                padding: '10px',
                width: '250px',
                marginRight: '10px',
                borderRadius: '20px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: '10px 20px',
                borderRadius: '20px',
                backgroundColor: '#1DB954',
                color: 'white',
                border: 'none',
              }}
            >
              Search
            </button>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h2>Search Results:</h2>
            {tracks.length === 0 && <p>No tracks found. Try searching something!</p>}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {tracks.map((track) => (
                <li
                  key={track.id}
                  style={{
                    marginBottom: '15px',
                    padding: '10px',
                    border: '1px solid #eee',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={track.album.images[0]?.url}
                    alt={track.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '5px',
                      marginRight: '15px',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <strong>{track.name}</strong> <br />
                    <span>{track.artists.map((artist) => artist.name).join(', ')}</span>
                  </div>
                  <button
                    onClick={() => handlePlay(track.uri)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#1DB954',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                    }}
                  >
                    Play
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryPage;
