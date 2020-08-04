import React, { useEffect, useContext } from "react";
import { Home, Login } from "./components";
import { getToken } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import MusicPlayer from "./components";
import { GlobalContext } from "./context/DataContext";

const spotify = new SpotifyWebApi();

function App() {
  const { user, token, loginUser, setToken } = useContext(GlobalContext);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      console.log(_token);
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        loginUser(user);
      });
    }
  }, []);

  console.log(token);
  return (
    <div className="app">{token ? <h1>Hi am Logged In</h1> : <Login />}</div>
  );
}

export default App;
