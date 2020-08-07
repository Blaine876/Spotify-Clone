import React, { useEffect, useContext } from "react";
import { Login, MusicPlayer } from "./components";
import { getToken } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { GlobalContext } from "./context/DataContext";

const s = new SpotifyWebApi();

function App() {
  const {
    token,
    loginUser,
    setToken,
    setPlaylists,
    setDiscoverWeekly,
    setTopArtists,
    setSpotify,
  } = useContext(GlobalContext);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      setToken(_token);

      s.getPlaylist("37i9dQZEVXcKzm6iVxdBLT").then((response) => {
        setDiscoverWeekly(response);
      });

      s.getMyTopArtists().then((response) => {
        setTopArtists(response);
      });

      setSpotify(s);

      s.getMe().then((user) => {
        loginUser(user);
      });

      s.getUserPlaylists().then((playlists) => {
        setPlaylists(playlists);
      });
    }
  }, [
    token,
    loginUser,
    setToken,
    setPlaylists,
    setTopArtists,
    setSpotify,
    setDiscoverWeekly,
  ]);
  return (
    <div className="app">{token ? <MusicPlayer spotify={s} /> : <Login />}</div>
  );
}

export default App;
