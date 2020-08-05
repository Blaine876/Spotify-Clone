import React, { useEffect, useContext } from "react";
import { Home, Login, MusicPlayer } from "./components";
import { getToken } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { GlobalContext } from "./context/DataContext";

const spotify = new SpotifyWebApi();

function App() {
  const {
    token,
    loginUser,
    setToken,
    setPlaylists,
    setDiscoverWeekly,
  } = useContext(GlobalContext);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        loginUser(user);
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      setPlaylists(playlists);
    });

    spotify.getPlaylist("37i9dQZEVXcKzm6iVxdBLT").then((response) => {
      setDiscoverWeekly(response);
    });
  }, []);
  return (
    <div className="app">
      {token ? <MusicPlayer spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
